import * as diceActions from '../mission/tabletoptier/dice/actions';
import * as equipmentActions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import {msg} from '../intl/store';
import uuid from '../lib/guid';

export const dispatchToken = register(({action, data}) => {

  if (action === equipmentActions.agentUnequip) {
    const agentsequipments = data.get('equipments');
    const equipments = jsonapiCursor(['equipments']);

    agentsequipments.toJS().map(ae => ae.name).map((aename, i) => {
      // return if agents equipmentslot empty, else DCP would be incremented, dunno why
      if (equipments.indexOf(equipments.find(equipment => equipment.get('name') === aename)) === -1)
        return;
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === aename)), 'quantity'], val => val + 1)
          .setIn(['agentinarmory', 'equipments', i], immutable.fromJS({name: ''}));
      });
    });
  }

  if (action === equipmentActions.buy) {
    const equipments = jsonapiCursor(['equipments']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name'))), 'quantity'], val => val + 1)
        .updateIn(['gameCash'], val => val - data.get('price'));
    });
  }

  if (action === diceActions.destroyLockedDice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'equipmenteffects', 'lockeddice'], null);
    });

  if (action === equipmentActions.lockDice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'equipmenteffects', 'lockeddice'], immutable.fromJS(data));
    });

  if (action === equipmentActions.noeffect)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
    });

  if (action === equipmentActions.sell) {
    const equipments = jsonapiCursor(['equipments']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name'))), 'quantity'], val => val - 1)
        .updateIn(['gameCash'], val => val + data.get('price'));
    });
  }

  if (action === equipmentActions.use) {
    const actiondices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']);

    if (data.agentequipment.get('name') === msg('equipments.operations.0.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], actiondices.push(immutable.fromJS({type: 'operations', name: 'fail', dicekey: uuid() + 'hiredgun'})))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.electronics.0.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], actiondices.push(immutable.fromJS({type: 'electronics', name: 'fail', dicekey: uuid() + 'handykit'})))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.stealth.0.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], actiondices.push(immutable.fromJS({type: 'stealth', name: 'fail', dicekey: uuid() + 'fakepassports'})))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.operations.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], immutable.fromJS(['close_combat', 'hit', 'pursuit'].map(action => {
            return {
              dicekey: uuid() + 'operationschoose',
              dicetype: 'operations',
              name: action
            };
          })))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.electronics.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], immutable.fromJS(['decipher', 'monitor', 'tap'].map(action => {
            return {
              dicekey: uuid() + 'electronicschoose',
              dicetype: 'electronics',
              name: action
            };
          })))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.stealth.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], immutable.fromJS(['hide', 'infiltrate', 'puppet'].map(action => {
            return {
              dicekey: uuid() + 'stealthchoose',
              dicetype: 'stealth',
              name: action
            };
          })))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.operations.2.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'protectivegear'], true)
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.electronics.2.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'lockeddice'], immutable.fromJS(Array(0)))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.stealth.2.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'damageprotocol'], true)
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });
  }

});
