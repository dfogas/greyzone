//
// import bodyParser from 'body-parser';
// import config from '../../config';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import morgan from 'morgan';

//
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
import playerFeedback from '../mail/player.feedback';
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

router.route('/api/v1/auth/login')
  .post(localAuthenticator, (req, res) => {
    const {email} = req.body;
    User.findOne({username: email}, function(err, user) {
      if (err)
        throw new Error(err);
      else
        Player.findOneAndUpdate({userId: user._id}, {$set: {paying: user.paying}}, {upsert: true, new: true}, function(err, player) {
          if (err)
            throw new Error(err);
          else res.json(player);
        });
    });
  });

router.route('/api/v1/auth/signup')
  .post((req, res) => {
    const {email, organization, password} = req.body;

    let notverified = new NotVerified({
      username: email,
      password: password,
      organization: organization,
      activationhash: uuid()
    });

    // TODO: check if User is registered already
    User.findOne({username: email}, (err, user) => {
      if (err)
        res.json({
          message: err
        });
      else if (user)
        res.json({
          description: `User exists`,
          message: `User already exists and is verified. Use forgotten password link.`
        });
      else
        NotVerified.findOne({username: email}, (err, unverified) => {
          if (err)
            res.json({message: 'Error finding unverified'});
          else if (unverified)
            transporter.sendMail(verifier(
              unverified._id,
              unverified.activationhash,
              unverified.username
            ), function(err, info) {
              if (err) {
                console.log('Sending mail Error: ' + err.message);
                res.json({
                  description: `Send mail Error`,
                  message: `Encountered error when trying to send an email: ` + err
                });
              } else {
                console.log('Repeated sign up mail message sent.');
                res.json({
                  description: `Repeated Signup`,
                  message: `Repeated sign up mail message sent.`
                });
              }
            });
          else
            notverified.save((err, newrecord) => {
              if (err)
                res.json({
                  message: 'DB saving error: ' + err
                });
              else
                transporter.sendMail(verifier(
                  newrecord._id,
                  notverified.activationhash,
                  email
                ), function(err, info) {
                  if (err) {
                    console.log('Sending mail Error: ' + err.message);
                    res.json({
                      description: `Send mail Error`,
                      message: `Encountered error when trying to send an email` + err
                    });
                  } else {
                    console.log('New sign up mail message has been sent.');
                    res.json({
                      description: `New Signup`,
                      message: `New authentication email message has been sent.`,
                      _id: newrecord._id,
                      activationhash: newrecord.activationhash
                    });
                  }
                });
            });
        });
    });

  });

router.route('/api/v1/auth/verify')
  .get((req, res) => {
    const {id, hash} = req.query;
    // req.query Davide
    NotVerified.findById(id, (err, notverified) => {
      if (err)
        res.send(err);
      else if (!notverified)
        res.json({
          notfound: 'Record not found.'
        });
      else if (hash === notverified.activationhash) {
        var newUser = new User({
          password: notverified.password,
          registered: Date.now(),
          username: notverified.username,
          paying: {
            collector: false,
            revenge: false
          }
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
                res.send('<p>Congratulation, the registration was successful.</p><a href="https://www.ghoststruggle.com">GhostStruggle Page</a>');
                // res.json({
                //   message: 'New user and player have been added. You may log in now.',
                //   user: user.username,
                //   player: player.name
                // });
            });
            NotVerified.findByIdAndRemove(id, function(err) {
              if (err)
                console.log(err);
            });
          }
        });
      } else
      res.json({message: 'Wrong authorization'});
    });

  });

router.route('/api/v1/auth/lprecover')
  .post((req, res) => {
    const {email} = req.body;

    const newLPRecover = new LPRecover({
      recoverhash: uuid(),
      email: email
    });


    User.findOne({username: email}, (err, user) => {
      if (err)
        res.send(err);
      else if (!user)
        res.send('No such user in the database.');
      else
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
  });

router.route('/api/v1/auth/reauthentication')
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

router.route('/api/v1/auth/feedback')
  .post((req, res) => {
    const {userId} = req.body;
    const feedback = req.body;
    User.findOne({_id: userId}, function(err, user) {
      if (err) {
        console.log(err);
        res.json({err: err});
      } else transporter.sendMail(playerFeedback(feedback, user.username), function(err, info) {
        if (err) {
          console.log('Sending mail Error: ' + err.message);
          res.json({
            description: `Send mail Error`,
            message: `Encountered error when trying to send an email` + err
          });
        } else {
          console.log(`New feedback from ${user.username} has been sent.`);
          res.json({
            description: `New Feedback`,
            message: `New feedback from player ${user.username}.`,
            username: user.username
          });
        }
      });
    });
  });

// router.route('/logout')
//   .get((req, res) => {
//     req.session.destroy((err) => {
//       if (err)
//         throw new Error(`Error destroying session.`);
//       // else
//       //   res.redirect('/');
//     });
//   });

export default router;
