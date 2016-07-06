import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  user: String,
  option: String
});

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;
