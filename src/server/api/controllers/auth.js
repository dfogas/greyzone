import express from 'express';
import passport from 'passport';
import Player from '../models/player';
import User from '../models/user';
import NotVerified from '../models/notverified';
import localAuthenticator from '../strategies/local';
import playerdefaults from '../../lib/playerdefaults';
import transporter from '../mail/transporter';
import uuid from '../../../client/lib/guid';
import verifier from '../mail/email.verifier';

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
  .post(localAuthenticator, (req, res, next) => {
    // res.status(200).end();
    // simulate DB checks
    // wihout it -> WRONG PASSWORD on login
    setTimeout(() => {
      res.status(200).end();
    }, 1000);

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
            console.log('Message has been sent.');
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
                  message: 'New user and player have been added',
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

export default router;
