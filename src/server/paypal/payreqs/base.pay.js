import config from '../../config';

let payReq = {
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
      'total': '13.99',
      'currency': 'USD'
    },
    'description': 'base,'
  }]
};

export default payReq;
