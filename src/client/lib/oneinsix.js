/* Number(dicestotal) Number(dicesdifference) -> Number(Probability) */

function oneInSix(total, diff) {
  return (Math.pow(6, diff + 1) - Math.pow(5, diff + 1))/(Math.pow(6, total));
}

export default oneInSix;
