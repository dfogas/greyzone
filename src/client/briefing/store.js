import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

import * as briefingActions from './actions';
import defaultActiveMission from '../../server/lib/greyzone/missions/default/defaultactivemission';

export const dispatchToken = register(({action, data}) => {

  if (action === briefingActions.assignMission) {
    let agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
    let agents = jsonapiCursor(['agents']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['activemission', 'agentsonmission'], agentsonmission.push(data.agent))
        .setIn(['agents'], agents.delete(agents.indexOf(data.agent)));
    });
  }

  if (action === briefingActions.logBriefing) {
    data = data.message || data;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['briefing', 'message'], data);
    });
  }

  if (action === briefingActions.missionTextToggle)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['components', 'briefing', 'missionthumbnail', 'text'], val => !val);
    });


  if (action === briefingActions.pushGameMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.unshift(immutable.fromJS(data.mission)));
    });

  if (action === briefingActions.reputationImpact) {
    const countrystats = jsonapiCursor(['countrystats']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['countrystats', countrystats.indexOf(countrystats.find(cs => cs.get('name') === data.country)), 'reputation'], val => val + data.impact);
    });
  }

  if (action === briefingActions.selectMission)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('activemission', data.mission ? immutable.fromJS(defaultActiveMission).mergeDeep(data.mission) : immutable.fromJS(defaultActiveMission));
    });

  if (action === briefingActions.setDefaultAfterExpired)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('activemission', immutable.fromJS(defaultActiveMission));
    });
});
