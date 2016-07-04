import * as equipmentsActions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import {msg} from '../intl/store';
import uuid from '../lib/guid';

export const dispatchToken = register(({action, data}) => {

  if (action === equipmentsActions.agentUnequip) {
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

  if (action === equipmentsActions.buy) {
    const equipments = jsonapiCursor(['equipments']);
    jsonapiCursor(jsonapi => {
      return jsonapi
      .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name'))), 'quantity'], val => val + 1)
      .updateIn(['gameCash'], val => val - data.get('price'));
    });
  }

  if (action === equipmentsActions.logMissionFromEquipments) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'log'], data);
    });
  }

  if (action === equipmentsActions.lockDice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'equipmenteffects', 'lockeddice'], immutable.fromJS(data));
    });

  if (action === equipmentsActions.noeffect)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
    });

  if (action === equipmentsActions.sell) {
    const equipments = jsonapiCursor(['equipments']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name'))), 'quantity'], val => val - 1)
        .updateIn(['gameCash'], val => val + data.get('price'));
    });
  }

  if (action === equipmentsActions.use) {
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
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], 'operations')
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.electronics.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], 'electronics')
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.agentequipment.get('name') === msg('equipments.stealth.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], 'stealth')
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
          .setIn(['activemission', 'equipmenteffects', 'lockeddice'], [])
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
