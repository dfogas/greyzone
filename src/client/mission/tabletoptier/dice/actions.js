import {dispatch} from '../../../dispatcher';
import setToString from '../../../lib/settostring';
import {jsonapiCursor} from '../../../state';

export function create(dice) {
  dispatch(create, dice);
}

export function remove(dice) {
  dispatch(remove, dice);
}

export function roll(dice) {
  dispatch(roll, {message: dice});
}

export function rollAll() {
  dispatch(rollAll, {message: 'all dices rolled'});
}

setToString('dice', {
  create,
  remove,
  roll,
  rollAll
});
