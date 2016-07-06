/* intended for Paypal webhooks */
import express from 'express';

const router = express.Router();

router.route('/receive')
  .post((req, res) => {
    /*
      here on a POST request from Paypal API
      it should state the id of the one who payed
      and option that he paid for
      on the basis of which
      the state of user is changed to paying
      and user is logged out and requested to log in
      again activating his payment feats
    */
    console.log(JSON.stringify(req.body));
  });

export default router;
