/* eslint curly: 1 */
/*Equipment Actions*/
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';

import equipmentUseCheck from '../lib/equipmentusecheck';

export function agentUnequip(agent) {
  dispatch(agentUnequip, agent);
}

export function buy(equipment) {
  dispatch(buy, equipment);
}

export function lockDice(dice) {
  dispatch(lockDice, dice);
}

export function logMissionFromEquipments(message) {
  dispatch(logMissionFromEquipments, {message});
}

export function noeffect(agentequipmentandindex) {
  dispatch(noeffect, agentequipmentandindex);
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

export function use(agent, agentequipmentandindex) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  if (equipmentUseCheck(agent, agentequipmentandindex.agentequipment)) {
    if (agent.get('name') === agentontask.get('name'))
      dispatch(use, agentequipmentandindex);
  } else {
    dispatch(noeffect, agentequipmentandindex);
    dispatch(logMissionFromEquipments, {message: `Darn it! It didn't work!`});
  }
}


setToString('equipment', {
  agentUnequip,
  buy,
  lockDice,
  logMissionFromEquipments,
  noeffect,
  sell,
  use
});
