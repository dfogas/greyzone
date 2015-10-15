import * as actions from './actions';
import {register} from '../../../dispatcher';
import {jsonapiCursor} from '../../../state';
import dicethrow from '../../../lib/dicethrow';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {
  const remainingdices = jsonapiCursor(['activemission', 'mission', 'currenttask', 'remainingdices']);
  let dicesthrown = jsonapiCursor(['activemission', 'mission', 'currenttask', 'dicesthrown']);
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const missionstarted = jsonapiCursor(['activemission', 'started']);

  if (action === actions.rollAll) {
    const taskscompleted = jsonapiCursor(['activemission', 'taskscompleted']);
    const currentindex = taskscompleted.size;
    const currenttask = jsonapiCursor(['activemission', 'tasks', currentindex]);
    let actiontypes = [];

    // start mission if not started already
    if (!missionstarted) {
      console.log('Mission starts, good luck commander.'); //eslint-disable-line no-console
      jsonapiCursor(jsonapi => {
        return jsonapi.setIn(['activemission', 'started'], true);
      });
    }

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

    dicesthrown = remdices.map(dice => dicethrow(dice), dicesthrown);

    /* set jsonapi for remainingdices and dicesthrown */
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], immutable.fromJS(remdices))
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], immutable.fromJS(dicesthrown))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], true);
    });
  }

  if (action === actions.create)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], dicesthrown.push(data.value))
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.push(data.dicetype));
    });

  if (action === actions.remove)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'mission', 'currenttask', 'remainingdices'], remainingdices.remove(0))
        .setIn(['activemission', 'mission', 'currenttask', 'dicesthrown'], dicesthrown.remove(0))
        .setIn(['activemission', 'mission', 'currenttask', 'diceslock'], false);
    });

  /*Done*/
  if (action === actions.roll)
    dicethrow(data.message.type);

});
