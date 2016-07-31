/* ImmutableList(dices) ImmutableList(actions) -> Number(Probability)
  BML: true
*/
import oneInSix from './oneinsix';
import twoInSix from './twoinsix';

function probabilityOfSuccess(dices, actions) {
  if (typeof actions === 'undefined')
    return 0;
  if (typeof dices === 'undefined')
    return 0;
  let operations, electronics, stealth;
  let operationsnames, electronicsnames, stealthnames;
  let opcount, elcount, stcount;
  dices = dices || [];
  actions = actions || [];

  if (actions.filter(action => action.get('type') === 'stealth').size)
    stealth = actions.filter(action => action.get('type') === 'stealth');

  if (actions.filter(action => action.get('type') === 'electronics').size)
    electronics = actions.filter(action => action.get('type') === 'electronics');

  if (actions.filter(action => action.get('type') === 'operations'))
    operations = actions.filter(action => action.get('type') === 'operations');

  // [Number]
  let probabilities = [];

  if (stealth) {
    stealthnames = stealth.map(action => action.get('name'));
    stcount = dices.filter(dice => dice.get('type') === 'stealth').size;
    for (let i = 0; i < stealthnames.size; i += 1)
      if (stealthnames.get(i) === 'improv')
        probabilities.push(twoInSix(stcount - i, stcount - i - 1));
      else probabilities.push(oneInSix(stcount - i, stcount - i - 1));
  }

  if (electronics) {
    electronicsnames = electronics.map(action => action.get('name'));
    elcount = dices.filter(dice => dice.get('type') === 'electronics').size;
    for (let i = 0; i < electronicsnames.size; i += 1)
      if (electronicsnames.get(i) === 'improv')
        probabilities.push(twoInSix(elcount - i, elcount - i - 1));
      else probabilities.push(oneInSix(elcount - i, elcount - i - 1));
  }

  if (operations) {
    operationsnames = operations.map(action => action.get('name'));
    opcount = dices.filter(dice => dice.get('type') === 'operations').size;
    for (let i = 0; i < operationsnames.size; i += 1)
      if (operationsnames.get(i) === 'improv')
        probabilities.push(twoInSix(opcount - i, opcount - i - 1));
      else probabilities.push(oneInSix(opcount - i, opcount - i - 1));
  }

  return probabilities.reduce((prev, curr) => {return prev * curr; }, 1);
}

export default probabilityOfSuccess;
