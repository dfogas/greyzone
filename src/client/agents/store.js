import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

import * as actions from './actions';
import * as scrollBarActions from './scrollbar/actions';

export const dispatchToken = register(({action, data}) => {

  if (action === actions.scrollLeft)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['componentsstates', 0, 'componentstyle', 'left'], val => val - 265);
    });

  if (action === actions.scrollRight)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['componentsstates', 0, 'componentstyle', 'left'], val => val + 265);
    });

  if (action === actions.assignMission) {
    let agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    let agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(data.message))
        .setIn(['agents'], agents.delete(agents.indexOf(data.message)));
    });
  }

  if (action === actions.agentToArmory) {
    const agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agentinarmory'], data.message)
        .setIn(['agents'], agents.delete(agents.indexOf(data.message)));
    });
  }

  if (action === actions.assignTask) {
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
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
    if (remdices.length === 0) {
      if (agentontask && taskhasOperations > -1)
        for (i = 0; i < agentontask.get('operationsSkill'); i += 1)
          remdices.push('operations');
      if (agentontask && taskhasElectronics > -1)
        for (i = 0; i < agentontask.get('electronicsSkill'); i += 1)
          remdices.push('electronics');
      if (agentontask && taskhasStealth > -1)
        for (i = 0; i < agentontask.get('stealthSkill'); i += 1)
          remdices.push('stealth');
    }

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'agentontask'], data.message)
        .setIn(['activemission', 'agentsonmission'], agentsonmission.delete(agentsonmission.indexOf(data.message)))
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], immutable.fromJS(remdices));
    });
  }

  if (action === actions.backtoAssignment) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['activemission', 'agentsonmission'], agentsonmission.push(data.message));
    });

    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['activemission', 'mission', 'currenttask', 'agentontask'], undefined); // eslint-disable-line no-undefined
    });
  }

  if (action === actions.backtoRoster) {
    let agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    let agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agents'], agents.push(data.message))
        .setIn(['agentinarmory'], null)
        .setIn(['activemission', 'agentsonmission'], agentsonmission.delete(agentsonmission.indexOf(data.message)));
    });
  }

  if (action === actions.equip) {
    const equipments = jsonapiCursor(['equipments']);
    return jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['agentinarmory', 'equipments', data.get('equipmentindex'), 'name'], data.get('equipmentname'))
        .updateIn(['equipments', equipments.indexOf(equipments.find(equipment => equipment.get('name') === data.get('equipmentname'))), 'quantity'], val => val - 1);
    });
  }

  // Implemnted, but needs testing and expanding for equipments&equipmentSlots, rank
  if (action === actions.getLevel) {
    const agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi.updateIn(['agents', agents.indexOf(agents.find(agent => agent.get('name') === data.get('name'))), 'randomSkill'], randomskill => randomskill + 1);
    });
  }
});
