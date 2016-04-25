import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

import * as agentsActions from '../agents/actions';
import * as briefingActions from './actions';

import defaultActiveMission from '../lib/defaultactivemission';

export const dispatchToken = register(({action, data}) => {

  if (action === briefingActions.assignMission) {
    let agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    let agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(data.message))
        .setIn(['agents'], agents.delete(agents.indexOf(data.message)));
    });
  }


  if (action === briefingActions.logBriefing) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['briefing', 'message'], data);
    });
  }

  if (action === briefingActions.pushGameMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.unshift(immutable.fromJS(data.mission)));
    });

  if (action === briefingActions.selectMission) {
    const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    // if (data.message) - TODO: Why is this check here?
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('activemission', data.message ? immutable.fromJS(defaultActiveMission).mergeDeep(data.message) : immutable.fromJS(defaultActiveMission));
    });
  }

  if (action === briefingActions.setDefaultAfterExpired)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('activemission', immutable.fromJS(defaultActiveMission));
    });
  // if (action === agentsActions.saveAgent)
  //   jsonapiCursor(jsonapi => {
  //     return jsonapi
  //     .set('agentbeingfreed', data.agent);
  //   });
});
