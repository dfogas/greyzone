/* Number, Number -> Number
  capping reputation at 10000 and bottoming it at -10000
*/

const bookReputation = function(val, change) {
  if ((val + change) < -10000)
    return -10000;
  else if ((val + change) > 10000)
    return 10000;
  else
    return val + change;
};

export default bookReputation;
