/* Number Number -> Number
*/

function bookObscurity(val, change) {
  if (val + change >= 3)
    return 3;
  else if (val + change <= 0)
    return 0;
  else
    return val + change;
}

export default bookObscurity;
