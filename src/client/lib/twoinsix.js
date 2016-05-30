/* Number Number -> Number(Probability) */

function twoInSix(total, diff) {
  return (Math.pow(6, diff + 1) - Math.pow(4, diff + 1)) / (Math.pow(6, total));
}

export default twoInSix;
