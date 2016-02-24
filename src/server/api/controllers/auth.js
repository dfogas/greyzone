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
    const {email, password} = req.body;

    let user = new User({
      password: password,
      username: email
    });

    user.save((err) => {
      if (err)
        res.send(err);

      console.log('New user has been added');
      res.json({
        message: 'New user has been added'
      });
    });


  });

export default router;
