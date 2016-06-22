/* intended for Paypal webhooks */
import express from 'express';

const router = express.Router();

router.route('/receive')
  .post((req, res) => {
    console.log(req.json());
  });

export default router;
