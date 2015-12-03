import * as actions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import {msg} from '../intl/store';

export const dispatchToken = register(({action, data}) => {

  if (action === actions.buy) {
    const equipments = jsonapiCursor(['equipments']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name'))), 'quantity'], val => val + 1)
        .updateIn(['gameCash'], val => val - data.get('price'));
    });
  }

  if (action === actions.agentUnequip) {
    const agentsequipments = data.get('equipments');
    const equipments = jsonapiCursor(['equipments']);

    agentsequipments.toJS().map(ae => ae.name).map((aename, i) => {
      // return if agents equipmentslot empty, else DCP would be incremented, dunno why
      if (equipments.indexOf(equipments.find(equipment => equipment.get('name') === aename)) === -1)
        return;
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === aename)), 'quantity'], val => val + 1)
          .setIn(['agentinarmory', 'equipments', i], immutable.fromJS({name: ""}));
      });
    });
  }

  if (action === actions.sell) {
    const equipments = jsonapiCursor(['equipments']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name'))), 'quantity'], val => val - 1)
        .updateIn(['gameCash'], val => val + data.get('price'));
    });
  }

  if (action === actions.use) {
    const remainingdices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'remainingdices']);

    if (data.equipment.get('name') === msg('equipments.operations.0.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.push('operations'))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.electronics.0.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.push('electronics'))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.stealth.0.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.push('stealth'))
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.operations.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], 'operations')
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.electronics.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], 'electronics')
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.stealth.1.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'actionchoose'], 'stealth')
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.operations.2.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['activemission', 'mission', 'currenttask', 'diceslock'], val => false)
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.electronics.2.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'lockeddice'], [])
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });

    if (data.equipment.get('name') === msg('equipments.stealth.2.name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'equipmenteffects', 'damageprotocol'], true)
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'equipments', data.equipmentindex], immutable.fromJS({name: ''}));
      });
  }

  if (action === actions.lockDice)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'equipmenteffects', 'lockeddice'], new Array(data));
        // TO DO: remove dice from dicesthrown
    });
});
