// [Dice] [Action] -> Boolean;
// import ramda from 'ramda';

const canCompleteTask = function(actions, dices) {
  const canComplete = actions.every(function(val) {
    let numIn1 = actions.filter(function(el) { return el === val; }).length;
    let numIn2 = dices.filter(function(el) { return el === val; }).length;
    return numIn1 <= numIn2;
  });
  return canComplete;
};

export default canCompleteTask;
