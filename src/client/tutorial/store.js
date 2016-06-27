import {register} from '../dispatcher';
import * as tutorialActions from './actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import Agent from '../../server/lib/greyzone/agents.generator';

export const dispatchToken = register(({action, data}) => {

  if (action === tutorialActions.campaignIntroViewed)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['campaigns', 'campaigns', data.campaignname, 'intro', 'viewed'], true);
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

  if (action === tutorialActions.playerChoseAgentClass)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('self', immutable.fromJS(Agent(data.agentclass, 3)));
    });

  if (action === tutorialActions.toggleCampaign)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['campaigns', 'campaigns', data.name, 'selected'], data.value)
        .setIn(['campaigns', 'campaigns', data.name, 'name'], data.name);
    });

});
