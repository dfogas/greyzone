import {dispatch} from '../../../dispatcher';
import setToString from '../../../lib/settostring';
import {jsonapiCursor} from '../../../state';

export function create(dice) {
  const dicekeys = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']).toJS().map(dice => dice.dicekey);
  const debugswitch = jsonapiCursor(['options', 'debug']);
  if (dicekeys.indexOf(dice.dicekey) === -1 || debugswitch)
    dispatch(create, dice);
}

export function remove(dice) {
  dispatch(remove, dice);
}

export function roll(dice) {
  dispatch(roll, {dice});
}

export function protectiveGearEffectFizzle() {
  dispatch(protectiveGearEffectFizzle, {});
}

export function protectiveGearUse(dices) {
  for (let i = 0; i < dices.size; i += 1)
    roll(dices.get(i));
  protectiveGearEffectFizzle();
}

export function rollAll() {
  dispatch(rollAll, {message: 'all dices rolled'});
}

export function selectForReroll(index) {
  dispatch(selectForReroll, {index: index});
}

setToString('dice', {
  create,
  protectiveGearEffectFizzle,
  remove,
  roll,
  rollAll,
  selectForReroll
});
