/* Not Covered */
/* Number(dicestotal) Number(dicesdifference) -> Number(Probability)
  six dices probability counting mechanism, I wonder whether related to BML or not
  question: we have total of 6sided dice and we should throw them in such way that
  they end upside on one side what is the probability of total - diff results being thrown
  as this(total - diff) being the low boundary, results can be more
  BML: false
*/

function oneInSix(total, diff) {
  return (Math.pow(6, diff + 1) - Math.pow(5, diff + 1)) / (Math.pow(6, total));
}

export default oneInSix;
