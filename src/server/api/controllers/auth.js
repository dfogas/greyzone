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

    //simulate DB checks
    setTimeout(() => {
      res.status(200).end();
    }, 1000);

  });

router.route('/signup')
  .post((req, res, next) => {
    const {email} = req.body;
    const {password} = req.body;

    let user = new User({
      username: email,
      password: password
    });

    user.save((err) => {
      if (err)
        res.send(err);

      console.log('New user has been added');
    });

    // IMPORTANT: do not remove these asynchrounous code, if you do, app stops
    setTimeout(() => {
      res.status(200).end();
    }, 1000);

  });

export default router;
