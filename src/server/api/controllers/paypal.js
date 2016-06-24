/* intended for Paypal webhooks */
import express from 'express';

const router = express.Router();

router.route('/receive')
  .post((req, res) => {
    console.log(JSON.stringify(req.body));
  });

export default router;
