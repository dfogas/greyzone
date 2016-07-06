/* intended for Paypal webhooks */
import express from 'express';
import Payment from '../models/payment';

const router = express.Router();

router.route('/receive')
  .post((req, res) => {
    const payment = new Payment({
      user: req.body.id,
      option: req.body.summary
    });

    payment.save((err, item) => {
      if (err)
        throw Error(err);
      else
        console.log('payment was saved to db');
    });
    /*
      here on a POST request from Paypal API
      it should state the id of the one who payed
      and option that he paid for
      on the basis of which
      the state of user is changed to paying
      and user is logged out and requested to log in
      again activating his payment feats
    */

  });

export default router;
