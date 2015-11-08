import * as actions from './actions';
import {register} from '../../../dispatcher';
import {jsonapiCursor} from '../../../state';
import dicethrow from '../../../lib/dicethrow';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === actions.rollAll) {
    const remainingdices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'remainingdices']);
    const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
    const taskscompleted = jsonapiCursor(['activemission', 'taskscompleted']);
    let actiontypes = [];
    let dicesthrown = jsonapiCursor(['activemission', 'mission', 'currenttask', 'dicesthrown']);

    const currentindex = taskscompleted.size;
    const currenttask = jsonapiCursor(['activemission', 'tasks', currentindex]);

    if (currenttask)
      actiontypes = currenttask.toSeq().map(action => action.get('type'), actiontypes).toArray();

    var taskhasOperations = actiontypes.indexOf('operations');
    var taskhasElectronics = actiontypes.indexOf('electronics');
    var taskhasStealth = actiontypes.indexOf('stealth');

    var remdices = remainingdices.toJS();
    var i;

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

    dicesthrown = remdices.map(dice => dicethrow(dice), dicesthrown);

    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], immutable.fromJS(remdices))
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], immutable.fromJS(dicesthrown))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], true);
    });
  }

  if (action === actions.create) {
    let dicesthrown = jsonapiCursor(['activemission', 'mission', 'currenttask', 'dicesthrown']);
    const remainingdices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'remainingdices']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], dicesthrown.push(data.value))
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.push(data.dicetype))
        .setIn(['activemission', 'equipmenteffects', 'actionchoose'], null);
    });
  }

  if (action === actions.remove) {
    let dicesthrown = jsonapiCursor(['activemission', 'mission', 'currenttask', 'dicesthrown']);
    const remainingdices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'remainingdices']);
    console.log(data);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.remove(data.diceindex))
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], dicesthrown.remove(data.diceindex))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], false);
    });
  }

  if (action === actions.roll)
    dicethrow(data.message.type);

});
