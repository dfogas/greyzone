import {register} from '../dispatcher';
import * as tutorialActions from './actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === tutorialActions.completeTutorial)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['tutorial', 'completed'], true);
    });

  if (action === tutorialActions.confirmAvatar)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['tutorial', 'avatarselected'], true);
    });

  if (action === tutorialActions.confirmCampaignsSelection)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['campaigns', 'selection', 'done'], true);
    });

  if (action === tutorialActions.firstMissionSetup)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('activemission', immutable.fromJS(data.mission));
    });

  if (action === tutorialActions.firstMissionDone)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['tutorial', 'firstmission', 'done'], true);
    });

  if (action === tutorialActions.historyProgress)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['tutorial', 'playerhistory', 'slideNo'], data.slideNo + 1);
    });

  if (action === tutorialActions.playerChoseAgentClass)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('self', data.agent);
    });

  if (action === tutorialActions.setupTutorial) {
    /*TODO: placeholder */
  }

  if (action === tutorialActions.toggleCampaign)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['campaigns', 'campaigns', data.name, 'selected'], data.value)
        .setIn(['campaigns', 'campaigns', data.name, 'name'], data.name);
    });

});
