import passport from 'passport';
import User from '../models/user';
import {Strategy} from 'passport-local';

// let usernameControl;

// road to nowere
// if (req || req.user === undefined) {
//   usernameControl = 'email';
// } else {
//   usernameControl = 'username';
// }

// usernameControl = 'email';

passport.use(new Strategy({
  usernameField: 'email',
  passReqToCallback: true
  },
  (req, username, password, done) => {
    console.log('Local says: I am here.');
    User.findOne({username: req.user ? req.user.username : username}, (err, user) => {
      if (err)
          done(err);

      if (!user)
        return done(null, false, {message: 'Incorrect username.'});

      user.verifyPassword(password, function(err, isMatch) {
        if (err)
          return done(err);

        if (!isMatch)
          return done(null, false);

        return done(null, user);
      });
    });
  }
));

export default passport.authenticate('local');
