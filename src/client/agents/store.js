import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
// import getRandomSkill from '../lib/getrandomskill';
// import trainingtable from '../../server/lib/greyzone/trainingtable';
import dayandtime from '../lib/dayandtime';
// import uuid from '../lib/guid';

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
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], immutable.fromJS(data.dices))
        .setIn(['activemission', 'log'], 'Agent has been assigned to task.');
    });

  if (action === agentsActions.backFromArmory)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(data.message))
        .set('agentinarmory', null);
    });

  if (action === agentsActions.backtoRoster)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(data.message))
        .updateIn(['activemission', 'agentsonmission'], val => val.delete(val.indexOf(data.message)));
    });

  if (action === dashboardActions.dismissAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - ' +
          'Agent ' + data.agent.get('specialist') + ' ' + data.agent.get('name') + ' has been left to rot in prison.'
        ))
        .setIn(['dashboard', 'agentswindow', 'message'], 'Agent left in prison.')
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

  if (action === agentsActions.honorAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(
          dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - ' +
          'Agent ' + data.agent.get('specialist') + ' ' + data.agent.get('name') + ' has been honored in her death.'
        ))
        .setIn(['dashboard', 'agentswindow', 'message'], 'Agent has been honored.')
        .update('agents', val => val.delete(val.indexOf(data.agent)));
    });

  // Implemnted, but needs testing and expanding for equipments&equipmentSlots, rank - TODO: check whether it is already implemented
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

  if (action === agentsActions.setETA)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'ETA'], data.agentsETA);
      });

  if (action === agentsActions.logArmory) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['armory', 'message'], data);
    });
  }

});
