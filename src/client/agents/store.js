import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import getRandomSkill from '../lib/getrandomskill';
import trainingtable from '../../server/lib/greyzone/trainingtable';
import dayandtime from '../lib/dayandtime';

import * as agentActions from './actions';

export const dispatchToken = register(({action, data}) => {

  if (action === agentActions.assignMission) {
    let agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    let agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(data.message))
        .setIn(['agents'], agents.delete(agents.indexOf(data.message)));
    });
  }

  if (action === agentActions.toArmory) {
    const agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agentinarmory'], data.message)
        .setIn(['agents'], agents.delete(agents.indexOf(data.message)));
    });
  }

  if (action === agentActions.assignTask) {
    const agentontask = data.message;
    const actiondices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'actiondices']);
    const taskscompleted = jsonapiCursor(['activemission', 'taskscompleted']);
    const currentindex = taskscompleted.size;
    const currenttask = jsonapiCursor(['activemission', 'tasks', currentindex]);
    let actiontypes = [];
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);

    if (currenttask)
      actiontypes = currenttask.toSeq().map(action => action.get('type'), actiontypes).toArray();

    var taskhasOperations = actiontypes.indexOf('operations');
    var taskhasElectronics = actiontypes.indexOf('electronics');
    var taskhasStealth = actiontypes.indexOf('stealth');
    var actdices = actiondices.toJS();
    var i;

    // is remaining dices set? - PROBLEM: what if mission changes?
    if (taskhasOperations > -1)
      for (i = 0; i < agentontask.get('operationsSkill'); i += 1)
        actdices.push({type: 'operations', name: 'fail'});
    if (taskhasElectronics > -1)
      for (i = 0; i < agentontask.get('electronicsSkill'); i += 1)
        actdices.push({type: 'electronics', name: 'fail'});
    if (taskhasStealth > -1)
      for (i = 0; i < agentontask.get('stealthSkill'); i += 1)
        actdices.push({type: 'stealth', name: 'fail'});

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], data.message)
        .setIn(['activemission', 'agentsonmission'], agentsonmission.delete(agentsonmission.indexOf(data.message)))
        .setIn(['activemission', 'mission', 'currenttask', 'actiondices'], immutable.fromJS(actdices))
        .setIn(['activemission', 'log'], 'Agent has been assigned to task.');
    });
  }

  if (action === agentActions.backFromArmory)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(data.message))
        .set('agentinarmory', null);
    });

  if (action === agentActions.backtoRoster)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.push(data.message))
        .updateIn(['activemission', 'agentsonmission'], val => val.delete(val.indexOf(data.message)));
    });

  if (action === agentActions.dismissAgent) {
    const agentinarmory = jsonapiCursor(['agentinarmory']);
    let agents = jsonapiCursor(['agents']);
    if (agentinarmory && data.agent.get('name') === agentinarmory.get('name'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .set('agentinarmory', null)
          .update('log', val => val.unshift(
            dayandtime(Date.now(), new Date().getTimezoneOffset()) +
              'Agent ' + data.agent.get('specialist') + ' ' + data.agent.get('name') + ' has been dismissed.'
          ));
      });
    else
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['agents'], agents.remove(agents.indexOf(agents.find(agent => agent.get('name') === data.agent.get('name')))))
          .update('log', val => val.unshift(
            dayandtime(Date.now(), new Date().getTimezoneOffset()) +
              'Agent ' + data.agent.get('specialist') + ' ' + data.agent.get('name') + ' has been left to rot in prison.'
          ));
      });
  }

  if (action === agentActions.equip) {
    const equipments = jsonapiCursor(['equipments']);
    const stockindex = equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('equipmentname')));
    if (equipments.getIn([stockindex, 'quantity']) > 0)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['agentinarmory', 'equipments', data.get('equipmentindex'), 'name'], data.get('equipmentname'))
          .updateIn(['equipments', stockindex, 'quantity'], val => val - 1);
      });
  }

  // Implemnted, but needs testing and expanding for equipments&equipmentSlots, rank - TODO: check whether it is already implemented
  if (action === agentActions.getRank) {
    const agents = jsonapiCursor(['agents']);
    if ((data.get('operationsSkill') + (data.get('electronicsSkill') + (data.get('stealthSkill')))) < trainingtable[data.get('rank')].statstotal)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), getRandomSkill()], randomskill => randomskill + 1);
      });

    if (data.get('equipmentSlots') < trainingtable[data.get('rank')].slots)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'equipmentSlots'], val => val + 1)
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'equipments'], val => val.push(immutable.fromJS({name: ''})));
      });

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'rank'], rank => parseInt(rank, 10) + 1);
    });
  }

  if (action === agentActions.incurETA) {
    const agentETA = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask', 'ETA']);
    if (agentETA + 10 * 60 * 1000 <= Date.now())
      jsonapiCursor(jsonapi => {
        return jsonapi
          .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'ETA'], Date.now() + 10 * 60 * 1000)
          .setIn(['activemission', 'log'], 'Agent fatigue.');
      });
    else
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['activemission', 'mission', 'currenttask', 'agentontask', 'ETA'], val => val + 10 * 60 * 1000)
          .setIn(['activemission', 'log'], 'Additional fatigue has gathered.');
      });
  }

  if (action === agentActions.log)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.unshift(data));
    });

});
