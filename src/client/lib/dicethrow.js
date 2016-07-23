/*
  String(dicetype) String(dicekey) -> JSObject(Dice?)
  TODO: možná by funkce měla brát jako parametr kostku(ImmutableMap)
  BML: true
*/

export default function dicethrow(type, dicekey) {
  var diceThrowResult;
  var result;
  switch (type) {
    case 'operations':
      result = Math.ceil(Math.random() * 6);
      if (result === 1 || result === 2)
        diceThrowResult = 'improv';
      else if (result === 3)
        diceThrowResult = 'hit';
      else if (result === 4)
        diceThrowResult = 'close_combat';
      else if (result === 5)
        diceThrowResult = 'pursuit';
      else
        diceThrowResult = 'fail';
      break;
    case 'electronics':
      result = Math.ceil(Math.random() * 6);
      if (result === 1 || result === 2)
        diceThrowResult = 'improv';
      else if (result === 3)
        diceThrowResult = 'decipher';
      else if (result === 4)
        diceThrowResult = 'tap';
      else if (result === 5)
        diceThrowResult = 'monitor';
      else
        diceThrowResult = 'fail';
      break;
    case 'stealth':
      result = Math.ceil(Math.random() * 6);
      if (result === 1 || result === 2)
        diceThrowResult = 'improv';
      else if (result === 3)
        diceThrowResult = 'hide';
      else if (result === 4)
        diceThrowResult = 'infiltrate';
      else if (result === 5)
        diceThrowResult = 'puppet';
      else
        diceThrowResult = 'fail';
  }
  return {type: type, name: diceThrowResult, dicekey: dicekey};
}
