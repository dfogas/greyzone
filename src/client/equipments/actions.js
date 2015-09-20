import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

/*
  Equipment Actions
*/
export function buy(equipment) {
  dispatch(buy, equipment);
}

export function sell(equipment) {
  dispatch(sell, equipment);
}

export function use(equipment) {
  dispatch(use, equipment);
}

export function lockDice(dice) {
  dispatch(lockDice, dice);
}

setToString('equipment', {
  buy,
  sell,
  use,
  lockDice
});
