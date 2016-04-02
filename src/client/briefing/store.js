import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

import * as agentsActions from '../agents/actions';
import * as briefingActions from './actions';

export const dispatchToken = register(({action, data}) => {

  if (action === agentsActions.saveAgent)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('agentbeingfreed', data.agent);
    });
});
