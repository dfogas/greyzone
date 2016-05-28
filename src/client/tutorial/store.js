import {register} from '../dispatcher';
import * as tutorialActions from './actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import Agent from '../../server/lib/greyzone/agents.generator';

export const dispatchToken = register(({action, data}) => {

  if (action === tutorialActions.playerChoseAgentClass)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .set('self', immutable.fromJS(Agent(data.agentclass, 3)));
    });

});
