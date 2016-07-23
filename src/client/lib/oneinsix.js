/* Number(dicestotal) Number(dicesdifference) -> Number(Probability)
  six dices probability counting mechanism, I wonder whether related to BML or not
  BML: false
*/

function oneInSix(total, diff) {
  return (Math.pow(6, diff + 1) - Math.pow(5, diff + 1)) / (Math.pow(6, total));
}

export default oneInSix;
