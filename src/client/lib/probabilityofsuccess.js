/* eslint no-unused-expressions: 1, no-undefined: 1 */
/* ImmutableList(dices) ImmutableList(actions) -> Number(Probability) */
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
  dices ? dices = dices.toJS() : dices = [];
  actions ? actions = actions.toJS() : actions = [];

  if (actions.filter(action => action.type === 'stealth').length)
    stealth = actions.filter(action => action.type === 'stealth');

  if (actions.filter(action => action.type === 'electronics').length)
    electronics = actions.filter(action => action.type === 'electronics');

  if (actions.filter(action => action.type === 'operations'))
    operations = actions.filter(action => action.type === 'operations');

  let probabilities = [];

  if (stealth) {
    stealthnames = stealth.map(action => action.name);
    stcount = dices.filter(dice => dice.type === 'stealth').length;
    for (let i = 0; i < stealthnames.length; i += 1)
      stealthnames[i] === 'improv' ? probabilities.push(twoInSix(stcount - i, stcount - i - 1)) : probabilities.push(oneInSix(stcount - i, stcount - i - 1));
  }

  if (electronics) {
    electronicsnames = electronics.map(action => action.name);
    elcount = dices.filter(dice => dice.type === 'electronics').length;
    for (let i = 0; i < electronicsnames.length; i += 1)
      electronicsnames[i] === 'improv' ? probabilities.push(twoInSix(elcount - i, elcount - i - 1)) : probabilities.push(oneInSix(elcount - i, elcount - i - 1));
  }

  if (operations) {
    operationsnames = operations.map(action => action.name);
    opcount = dices.filter(dice => dice.type === 'operations').length;
    for (let i = 0; i < operationsnames.length; i += 1)
      operationsnames[i] === 'improv' ? probabilities.push(twoInSix(opcount - i, opcount - i - 1)) : probabilities.push(oneInSix(opcount - i, opcount - i - 1));
  }

  probabilities.length === 0 ? [0, 0] : probabilities;

  return probabilities.reduce((prev, curr) => {return prev * curr; }, 1);
}

export default probabilityOfSuccess;
