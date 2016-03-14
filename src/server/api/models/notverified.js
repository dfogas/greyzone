import mongoose from 'mongoose';

const NotVerifiedSchema = new mongoose.Schema({
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
  organization: {
    required: true,
    type: String,
    unique: false
  },
  activationhash: {
    required: true,
    type: String,
    unique: true
  }
});

const NotVerified = mongoose.model('NotVerified', NotVerifiedSchema);

export default NotVerified;
