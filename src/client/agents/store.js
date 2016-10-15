import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import dayandtime from '../lib/dayandtime';
import * as agentsActions from './actions';
import * as dashboardActions from '../dashboard/actions';

export const dispatchToken = register(({action, data}) => {

  if (action === agentsActions.toArmory) {
    const agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agentinarmory'], data.message)
        .setIn(['agents'], agents.delete(agents.indexOf(data.message)));
    });
  }

  if (action === agentsActions.armoryCode)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['armory', 'code'], data.color);
    });

  if (action === agentsActions.agentInArmoryAssignMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['activemission', 'agentsonmission'], val => val.push(data.agent))
        .set('agentinarmory', null);
    });

  if (action === agentsActions.assignTask)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], data.agent)
        .updateIn(['activemission', 'agentsonmission'], val => val.delete(val.indexOf(data.agent)))
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], data.dices);
    });

  if (action === agentsActions.backFromArmory)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(data.message))
        .set('agentinarmory', null);
    });

  if (action === agentsActions.toRoster)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(data.agent))
        .updateIn(['activemission', 'agentsonmission'], val => val.delete(val.indexOf(data.agent)));
    });

  if (action === agentsActions.buyEnhancement) {
    const gameCash = jsonapiCursor(['gameCash']);
    const gameContacts = jsonapiCursor(['gameContacts']);
    const price = data.enhancement.get('price');
    if (gameCash >= price.get('cash') && gameContacts >= price.get('contacts'))
    jsonapiCursor(jsonapi => {
      return jsonapi
      .update('enhancements', val => val.push(data.enhancement))
      .update('gameCash', val => val - price.get('cash'))
      .update('gameContacts', val => val - price.get('contacts'))
      .update('log', val => val.unshift(
        dayandtime(Date.now(), new Date().getTimezoneOffset()) +
        ' - Enhancement ' + data.enhancement.get('name') + ' for your organization bought.'
      ));
    });
  }

  if (action === agentsActions.codeChange)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['components', 'armory', 'code'], data.color);
    });

  if (action === dashboardActions.dismissAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - ' +
          'Agent ' + data.agent.get('specialist') + ' ' + data.agent.get('name') + ' has been left to rot in prison.'
        ))
        .update('agents', val => val.delete(val.indexOf(data.agent)));
    });

  if (action === agentsActions.equip) {
    const equipments = jsonapiCursor(['equipments']);
    const stockindex = equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('name')));
    if (equipments.getIn([stockindex, 'quantity']) > 0)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['agentinarmory', 'equipments', data.get('index')], data)
          .updateIn(['equipments', stockindex, 'quantity'], val => val - 1);
      });
  }

  if (action === agentsActions.getRank) {
    const agents = jsonapiCursor(['agents']);
    if (data.skill)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.agent.get('name'))), data.skill], skill => skill + 1);
      });

    if (data.equipment)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.agent.get('name'))), 'equipmentSlots'], val => val + 1)
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.agent.get('name'))), 'equipments'], val => val.push(immutable.fromJS({name: ''})));
      });

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.agent.get('name'))), 'rank'], rank => parseInt(rank, 10) + 1);
    });
  }

  if (action === agentsActions.logArmory) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['armory', 'message'], data);
    });
  }

});
