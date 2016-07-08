import paypal from 'paypal-rest-sdk';
import nuuid from 'node-uuid';
import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';

const clientId = `ASeVvgbUxX4kOI8YCk_in3_5QNUNP2-BfBqU3yHGO7ydQ2eHLbe593CLyBgZT7RrLkZe5K_QpkojtKQz`;
const secret = `EHcj0-gW6H82eEbHFdsr-o-PX91XtEmHlQBvy-e6ZB8xpnV_bTbdOqw6IY3N-KnxqctjMRNkMriLFN3Y`;

const app = express();

app.use(bodyParser.json());

paypal.configure({
  'mode': 'sandbox',
  'client_id': clientId,
  'client_secret': secret
});

app.get('/create', function(req, res) {
    //build PayPal payment request
  var payReq = {
    'intent': 'sale',
    'redirect_urls': {
      'return_url': config.dns + '/process',
      'cancel_url': config.dns + '/cancel'
    },
    'payer': {
      'payment_method': 'paypal'
    },
    'transactions': [{
      'amount': {
        'total': '7.47',
        'currency': 'USD'
      },
      'description': 'This is the payment transaction description.'
    }]
  };
  paypal.payment.create(payReq, function(error, payment) {
    if (error)
      console.error(error);
    else {
      //capture HATEOAS links
      var links = {};
      payment.links.forEach(function(linkObj) {
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

app.get('/process', function(req, res) {
  var paymentId = req.query.paymentId;
  var payerId = { 'payer_id': req.query.PayerID };

  paypal.payment.execute(paymentId, payerId, function(error, payment) {
    if(error)
      console.error(error);
    else
      if (payment.state === 'approved')
        res.send(JSON.stringify(payment));
      else
        res.send('payment not successful');
  });
});

export default app;
