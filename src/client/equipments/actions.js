/* eslint curly: 1 */
/*Equipment Actions*/
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import playSound from '../lib/sound';
import {gameCursor, jsonapiCursor} from '../state';
import immutable from 'immutable';

import announce from '../lib/announce';
import cconfig from '../client.config';
import equipmentSound from '../lib/equipmentsound';
import equipmentUseCheck from '../lib/bml/equipmentusecheck'; // ??

export function agentUnequip(agent) {
  // TODO: add sound
  dispatch(agentUnequip, agent);
}

export function buy(equipmentname) {
  const equipment = gameCursor(['globals', 'equipments']).find(eq => eq.get('name') === equipmentname);
  dispatch(buy, equipment);
}

export function lockDice(dice) {
  const actionchoose = jsonapiCursor(['activemission', 'equipmenteffects', 'actionchoose']) || immutable.fromJS([{}]);
  if (actionchoose.find(ac => ac.get('dicekey') === dice.dicekey))
    announce(`This is forbidden.`, 'Mission');
  else dispatch(lockDice, dice);
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
  if (equipmentUseCheck(agent, agentequipmentandindex.agentequipment)) { // eslint-disable-line curly
    if (agent.get('name') === agentontask.get('name')) {
      playSound(url + equipmentSound(agentequipmentandindex.agentequipment));
      dispatch(use, agentequipmentandindex);
    }
  } else {
    dispatch(noeffect, agentequipmentandindex);
    playSound(url + equipmentSound(immutable.fromJS({name: 'Fail'})));
  }
}


setToString('equipment', {
  agentUnequip,
  buy,
  lockDice,
  noeffect,
  sell,
  use
});
