import {dispatch} from '../../../dispatcher';
import setToString from '../../../lib/settostring';
import {jsonapiCursor} from '../../../state';

export function create(dice) {
  const dicekeys = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']).toJS().map(dice => dice.dicekey);
  const debugswitch = jsonapiCursor(['options', 'debug']);
  // console.log('Debug switch: ' + debugswitch);
  // console.log('Dice' + dice);
  // console.log('Dice keys indexx: ' + dicekeys.indexOf(dice.dicekey));
  // console.log('Dice keys: ' + dicekeys);
  // console.log(dicekeys.indexOf(dice.dicekey) === - 1);
  // console.log(dicekeys.indexOf(dice.dicekey) === -1 || debugswitch);
  if (dicekeys.indexOf(dice.dicekey) === -1 || debugswitch)
    dispatch(create, dice);
}

export function remove(dice) {
  dispatch(remove, dice);
}

// export function roll(dice) {
//   dispatch(roll, {message: dice});
// }

export function rollAll() {
  dispatch(rollAll, {message: 'all dices rolled'});
}

setToString('dice', {
  create,
  remove,
  // roll,
  rollAll
});
