import express from 'express';
import passport from 'passport';
import User from '../models/user';
import localAuthenticator from '../strategies/local';

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
  .post((req, res, next) => {
    const {email, password} = req.body;

    // TODO: Change it to NotVerified with added hash for verification
    // password hash should not be visible in REST API
    let user = new User({
      password: password,
      username: email
    });

    user.save((err) => {
      if (err)
        res.send(err);
      // add username for verification by API test
      else
        res.send({
          message: 'New user has been added',
          user: user.username
        });
    });
  });

router.route('/verify')
  .get((req, res, next) => {
    const {id, hash} = this.props;

    // NotVerified.findOne({_id: id}, (err, notverified) {
        // if (hash === notverified.hash) {
          // ... add new user to users collection
        //} else {
          // res.json({message: 'Wrong authorization'});
      // }
    // });
  });

export default router;
