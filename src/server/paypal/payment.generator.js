/* String(userId) String(PaymentCase) JSObject(basePayReq) -> JSObject(PayReqForPaypal)
  produces Payment Request to be used by paypal sub-application
*/

function genPayReq(userId, name, basePayReq) {
  let payReq = basePayReq;
  console.log(name, 'payment generator');
  if (name === 'collector') {
    payReq.transactions[0].amount.total = '7.99';
    payReq.transactions[0].description = 'collector,' + userId;
  } else if (name === 'revenge') {
    payReq.transactions[0].amount.total = '7.99';
    payReq.transactions[0].description = 'revenge,' + userId;
  } else payReq.transactions[0].description += userId;
  return payReq;
}

export default genPayReq;
