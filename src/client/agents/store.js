import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import getRandomSkill from '../lib/getrandomskill';
import trainingtable from '../../server/lib/greyzone/trainingtable';

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
    const remainingdices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'remainingdices']);
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
    var remdices = remainingdices.toJS();
    var i;

    // is remaining dices set? - PROBLEM: what if mission changes?
    if (taskhasOperations > -1)
      for (i = 0; i < agentontask.get('operationsSkill'); i += 1)
        remdices.push('operations');
    if (taskhasElectronics > -1)
      for (i = 0; i < agentontask.get('electronicsSkill'); i += 1)
        remdices.push('electronics');
    if (taskhasStealth > -1)
      for (i = 0; i < agentontask.get('stealthSkill'); i += 1)
        remdices.push('stealth');

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], data.message)
        .setIn(['activemission', 'agentsonmission'], agentsonmission.delete(agentsonmission.indexOf(data.message)))
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], immutable.fromJS(remdices));
    });
  }

  if (action === agentActions.backfromArmory)
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

  if (action === agentActions.dismissAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('agentinarmory', null);
    });

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
    if ((data.get('operationsSkill') + (data.get('electronicsSkill') + (data.get('stealthSkill')))) < trainingtable[data.get('rank') - 1].statstotal)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), getRandomSkill()], randomskill => randomskill + 1);
      });

    if (data.get('equipmentSlots') < trainingtable[data.get('rank') - 1].slots)
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'equipmentSlots'], val => val + 1)
          .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'equipments'], val => val.push(immutable.fromJS({name: ''})));
      });

    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'rank'], rank => rank + 1);
    });
  }

  if (action === agentActions.incurETA)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask', 'ETA'], data.ETAtime);
    });

  if (action === agentActions.log)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('log', val => val.push(data));
    });

});
