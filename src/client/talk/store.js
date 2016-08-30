import {register} from '../dispatcher';
import * as talkActions from './actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === talkActions.addParticipant)
    jsonapiCursor(jsonapi => {
      return jsonapi.updateIn(['talk', 'participants'], val => val.push(data.agent.get('id')));
    });

  if (action === talkActions.clearParticipants)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['talk', 'participants'], immutable.fromJS(Array(0)));
    });

});
