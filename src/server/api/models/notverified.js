import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NotVerifiedSchema = new Schema({
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
  activationhash: {
    required: true,
    type: String,
    unique: true
  }
});

const NotVerified = mongoose.Model(NotVerifiedSchema);

export default NotVerified;
