/* eslint curly: 1 */
/*Equipment Actions*/
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import Sound from '../lib/sound';
import {gameCursor} from '../state';
import {jsonapiCursor} from '../state';
import equipmentUseCheck from '../lib/equipmentusecheck';
import cconfig from '../client.config';
import equipmentSound from '../lib/equipmentsound';

export function agentUnequip(agent) {
  dispatch(agentUnequip, agent);
}

export function buy(equipmentname) {
  const equipment = gameCursor(['globals', 'equipments']).find(eq => eq.get('name') === equipmentname);
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

export function sell(equipmentname) {
  const equipment = gameCursor(['globals', 'equipments']).find(eq => eq.get('name') === equipmentname);
  const equipments = jsonapiCursor().get('equipments');
  const equipmentinstock = equipments.find(e => e.get('name') === equipment.get('name'));

  if (equipmentinstock.get('quantity') >= 1)
    dispatch(sell, equipment);
}

export function use(agent, agentequipmentandindex) {
  /*immutableMap JSObject(holding immutableMap(agentequipment and number(equipmentindex))) */
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
  if (equipmentUseCheck(agent, agentequipmentandindex.agentequipment)) {
    if (agent.get('name') === agentontask.get('name')) {
      let mySound = new Sound(url + equipmentSound(agentequipmentandindex.agentequipment));
      mySound.play();
      dispatch(use, agentequipmentandindex);
    }
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
