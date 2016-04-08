import express from 'express';
import passport from 'passport';
import Player from '../models/player';
import User from '../models/user';
import NotVerified from '../models/notverified';
import LPRecover from '../models/lprecover';
import localAuthenticator from '../strategies/local';
import playerdefaults from '../../lib/playerdefaults';
import transporter from '../mail/transporter';
import uuid from '../../../client/lib/guid';
import verifier from '../mail/email.verifier';
import lostpassword from '../mail/lost.password';

const router = express.Router();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

router.route('/login')
  .post(localAuthenticator, (req, res) => {
    const {email} = req.body;
    User.findOne({username: email}, function(err, user) {
      if (err)
        throw new Error(err);
      else
        Player.findOne({userId: user._id}, function(err, player) {
          if (err)
            throw new Error(err);
          else
            res.json(player);
        });
    });
  });

router.route('/signup')
  .post((req, res) => {
    const {email, organization, password} = req.body;

    // TODO: Change it to NotVerified with added hash for verification
    // TODO: password hash should not be visible in REST API

    let notverified = new NotVerified({
      username: email,
      password: password,
      organization: organization,
      activationhash: uuid()
    });

    notverified.save((err, newrecord) => {
      if (err)
        res.json('DB saving error: ' + err);
      else {
        transporter.sendMail(verifier(
          newrecord._id,
          notverified.activationhash,
          email
        ), function(err, info) {
          if (err)
            console.log('Sending mail Error: ' + err.message);
          else
            console.log('New sign up mail message has been sent.');
        });
        res.json({
          message: 'New not-verified user.',
          _id: newrecord._id,
          activationhash: newrecord.activationhash
        });
      }
    });
  });

router.route('/verify')
  .get((req, res) => {
    const {id, hash} = req.query;
    // req.query Davide
    NotVerified.findById(id, (err, notverified) => {
      if (err)
        res.json({
          notfound: 'Record not found.'
        });
      else if (hash === notverified.activationhash) {
        var newUser = new User({
          password: notverified.password,
          username: notverified.username
        });

        newUser.save((err, user) => {
          if (err)
            res.send(err);
          else {
            playerdefaults.userId = user._id;
            playerdefaults.name = notverified.organization;
            var newPlayer = new Player(playerdefaults);
            newPlayer.save((err, player) => {
              if (err)
                res.json({
                  error: 'Player saving error: ' + err
                });
              else
                res.json({
                  message: 'New user and player have been added. You may log in now.',
                  user: user.username,
                  player: player.name
                });
            });
          }
        });
      } else
      res.json({message: 'Wrong authorization'});
    });

    NotVerified.findByIdAndRemove(id, function(err) {
      if (err)
        console.log(err);
    });
  });

router.route('/lprecover')
  .post((req, res) => {
    const {email} = req.body;

    const newLPRecover = new LPRecover({
      recoverhash: uuid(),
      email: email
    });

    newLPRecover.save((err, lpw) => {
      if (err)
        res.send(err);
      else
        transporter.sendMail(lostpassword(lpw.recoverhash, lpw.email), (err) => {
          if (err)
            res.send(err);
          else
            res.json({
              message: 'Message for lost password recovery was sent to ' + lpw.email + '.',
              email: lpw.email
            });
        });
    });
  });

router.route('/reauthentication')
  .post((req, res) => {
    const {email, password} = req.body;
    const {hash} = req.query;

    LPRecover.findOne({email: email}, function(err, lpw) {
      if (err)
        res.send(err);
      if (lpw.recoverhash === hash && lpw.email === email)
        User.findOne({username: lpw.email}, function(err, doc) {
          if (err)
            res.send(err);
          if (doc) {
            doc.password = password;
            doc.save(function(err, changed) {
              if (err)
                res.send(err);
              else
                res.json({
                  message: 'New password has been set for user ' + changed.username + '.',
                  user: changed.username,
                  pwchanged: changed.password !== password
                });
            });
          }
        });
        // User.findOneAndUpdate({username: lpw.email}, {$set: {password: password}}, (err, doc) => {
        //   if (err)
        //     res.send(err);
        //   else
        //     // TODO: REMOVE LPRecover by hash or email probably set-up periodical check for deletion
        //     res.json({
        //       message: 'New password has been set for user ' + doc.username + '.',
        //       user: doc.username,
        //       pwchanged: doc.password !== password
        //     });
        // });
    });
  });

export default router;
