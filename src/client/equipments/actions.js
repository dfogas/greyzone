import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';

/*
  Equipment Actions
*/
export function buy(equipment) {
  dispatch(buy, equipment);
}

export function sell(equipment) {
  const jsonapi = jsonapiCursor();
  const equipments = jsonapi.get('equipments');
  const equipmentinstock = equipments.filter(e => e.get('name') === equipment.get('name')).get(0).toJS();

  if (equipmentinstock.quantity >= 1)
    dispatch(sell, equipment);
  else
    return;
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
