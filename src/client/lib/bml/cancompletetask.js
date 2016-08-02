/* [Action] [Dice]-> Boolean;
  BML: true
*/
import R from 'ramda';

const canCompleteTask = function(actions, dices) {
  // return R.without(actions.map(action => { return {name: action.name, type: action.type}}), dices).length <= dices.length - actions.length;

  const uniqActions = R.uniq(actions);

  // to get around don't make functions within loop error/warning
  const makeHandler = function(arr1, arr2, iteration) {
    return arr1.filter(item => item.name === arr2[iteration].name && item.type === arr2[iteration].type);
  };

  let count = 0;
  for (let i = 0; i < uniqActions.length; i += 1) {
    let actionCount = makeHandler(actions, uniqActions, i);
    let diceCount = makeHandler(dices, uniqActions, i);
    // let actionCount = actions.filter(action => action.name === uniqActions[i].name && action.type === uniqActions[i]. type).length;
    // let diceCount = dices.filter(dice => dice.name === uniqActions[i].name && dice.type === uniqActions[i].type).length;
    if (actionCount <= diceCount)
      count += 1;
  }
  if (count === uniqActions.length)
    return true;
  else
    return false;
};

export default canCompleteTask;
