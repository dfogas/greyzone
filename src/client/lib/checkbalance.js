/*
  Number Number -> Boolean
  checks price agaist account balance
  given: 80, 79.5 expected: false
  given: 80, 80 expected: true
  given: 80, 81 expected: true
*/

function checkbalance(price, balance) {
  if (price > balance)
    return false;
  return true;
}

export default checkbalance;
