/* eslint curly: 1 */
import paypal from 'paypal-rest-sdk';
import nuuid from 'node-uuid';
import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import User from '../api/models/user';
import Payment from '../api/models/payment';

// requests
import basePayReq from './payreqs/base.pay';
import generatePayReq from './payment.generator';

const clientId = `ASeVvgbUxX4kOI8YCk_in3_5QNUNP2-BfBqU3yHGO7ydQ2eHLbe593CLyBgZT7RrLkZe5K_QpkojtKQz`;
const secret = `EHcj0-gW6H82eEbHFdsr-o-PX91XtEmHlQBvy-e6ZB8xpnV_bTbdOqw6IY3N-KnxqctjMRNkMriLFN3Y`;

const app = express();

app.use(bodyParser.json());

paypal.configure({
  'mode': 'sandbox',
  'client_id': clientId,
  'client_secret': secret
});

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
    if(error)
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
