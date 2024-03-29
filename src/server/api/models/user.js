import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

// Define our user schema
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    required: true,
    type: String,
    unique: false
  },
  registered: Number,
  paying: {
    base: Boolean,
    collector: Boolean,
    revenge: Boolean
  }
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  var user = this; //eslint-disable-line consistent-this

  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var User = mongoose.model('User', UserSchema);

// Export the Mongoose model
export default User;
