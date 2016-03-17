import mongoose from 'mongoose';

const LPRecoverSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  recoverhash:{
    type: String,
    unique: true,
    required: true
  }
});

const LPRecover = mongoose.model('lprecover', LPRecoverSchema);

export default LPRecover;
