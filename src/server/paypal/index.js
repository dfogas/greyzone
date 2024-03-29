/* eslint curly: 0 */
import paypal from 'paypal-rest-sdk';
// import nuuid from 'node-uuid';
import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import User from '../api/models/user';
import Payment from '../api/models/payment';

// requests
import basePayReq from './payreqs/base.pay';
import generatePayReq from './payment.generator';

// Sandbox
// const clientId = `ASeVvgbUxX4kOI8YCk_in3_5QNUNP2-BfBqU3yHGO7ydQ2eHLbe593CLyBgZT7RrLkZe5K_QpkojtKQz`;
// const secret = `EHcj0-gW6H82eEbHFdsr-o-PX91XtEmHlQBvy-e6ZB8xpnV_bTbdOqw6IY3N-KnxqctjMRNkMriLFN3Y`;
// Live
// const clientId = `ARX2tIvUWeatMK76ByR5Ah4eC3QZ4AnVx--uoukqEQ1bCexLgMqc48dnRu-pMRkrtX-QNGrUPN5nqT9U`;
// const secret = `EB9tntFIjTX6aBGTx36dN-3Ft7gZJryPC8KLZwEswf321yU0kAeGCmUg5kbTVitZ-FoqvtJ03su8JtH`;

const app = express();

app.use(bodyParser.json());

paypal.configure(config.paypal.configuration);
// console.log(config.paypal.configuration);

app.get('/create', (req, res) => {
  const userId = req.query.userId;
  const payCase = req.query.name;
  console.log(payCase);
  // build PayPal payment request
  let payReq = generatePayReq(userId, payCase, basePayReq);
  // const payReq = basePayReq;
  console.log(payReq);
  paypal.payment.create(payReq, (error, payment) => {
    if (error)
      console.error(error);
    else {
      //capture HATEOAS links
      var links = {};
      payment.links.forEach((linkObj) => {
        links[linkObj.rel] = {
          'href': linkObj.href,
          'method': linkObj.method
        };
      });

      //if redirect url present, redirect user
      if (links.hasOwnProperty('approval_url'))
        res.redirect(links.approval_url.href);
      else
        console.error('no redirect URI present');
    }
  });
});

app.get('/process', (req, res) => {
  let paymentId = req.query.paymentId;
  let payerId = {'payer_id': req.query.PayerID};

  paypal.payment.execute(paymentId, payerId, (error, payment) => {
    console.log(payment);
    if (error)
      console.error(error);
    else {
      let paycase = payment.transactions[0].description.split(',')[0];
      let userId = payment.transactions[0].description.split(',')[1];
      if (payment.state === 'approved') {
        const payment = new Payment({
          user: userId,
          option: paycase,
          paymentId: paymentId,
          payerId: payerId.payer_id
        });
        // logging the payment to db
        payment.save((err, item) => {
          if (err)
            throw Error(err);
          else {
            console.log('payment was saved to db');
          }
        });

        if (paycase === 'base')
        // v transactions je pouze jedna transakce a to je platba, v jejím
        // descriptionu je email usera, který je i username usera v GS
          User.findOneAndUpdate({_id: userId}, {$set: {'paying.base': true}}, {upsert: true}, (err, user) => {
            if (err) throw err;
            else {
              res.redirect(config.dns);
            }
          });
        else if (paycase === 'collector')
          User.findOneAndUpdate({_id: userId}, {$set: {'paying.collector': true}}, {upsert: true}, (err, user) => {
            if (err) throw err;
            else {
              res.redirect(config.dns);
            }
          });
        else if (paycase === 'revenge')
        User.findOneAndUpdate({_id: userId}, {$set: {'paying.revenge': true}}, {upsert: true}, (err, user) => {
          if (err) throw err;
          else {
            res.redirect(config.dns);
          }
        });
        else res.send('payment not identified');
      } else res.send('payment not successful');
    }
  });
});

app.get('/cancel', (req, res) => {
  res.send('payment was canceled');
});

export default app;
