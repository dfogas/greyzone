/* [Action] [Dice]-> Boolean;
  BML: true
*/
import R from 'ramda';

const canCompleteTask = function(actions, dices) {
  // return R.without(actions.map(action => { return {name: action.name, type: action.type}}), dices).length <= dices.length - actions.length;

  const uniqActions = R.uniq(actions);

  let count = 0;
  for (let i = 0; i < uniqActions.length; i += 1) {
    let actionCount = actions.filter(action => action.name === uniqActions[i].name && action.type === uniqActions[i]. type).length;
    let diceCount = dices.filter(dice => dice.name === uniqActions[i].name && dice.type === uniqActions[i].type).length;
    if (actionCount <= diceCount)
      count += 1;
  }
  if (count === uniqActions.length)
    return true;
  else
    return false;
};

export default canCompleteTask;
