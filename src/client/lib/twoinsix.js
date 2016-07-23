/* Number Number -> Number(Probability)
  what is the probability if we have two same results on die
  BML: false
*/

function twoInSix(total, diff) {
  return (Math.pow(6, diff + 1) - Math.pow(4, diff + 1)) / (Math.pow(6, total));
}

export default twoInSix;
