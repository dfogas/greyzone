import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';

/*
  Equipment Actions
*/
export function agentUnequip(agent) {
  dispatch(agentUnequip, agent);
}

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

export function lockDice(dice) {
  dispatch(lockDice, dice);
}

export function use(agent, equipment) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);

  if (agent.get('name') === agentontask.get('name'))
    dispatch(use, equipment);
}


setToString('equipment', {
  buy,
  lockDice,
  sell,
  agentUnequip,
  use
});
