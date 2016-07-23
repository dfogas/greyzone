/* Number Number -> Number
  BML: false
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export default getRandomInt;
