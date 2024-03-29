import {register} from '../dispatcher';
import * as talkActions from './actions';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === talkActions.addParticipant)
    jsonapiCursor(jsonapi => {
      return jsonapi.updateIn(['talk', 'participants'], val => val.push(data.agent.get('id')));
    });

  if (action === talkActions.agentDialogToggle) {
    const toggle = jsonapiCursor(['talk', 'dialog']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['talk', 'dialog'], !toggle);
    });
  }

  if (action === talkActions.clearParticipants)
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['talk', 'participants'], immutable.fromJS(Array(0)));
    });

  if (action === talkActions.enhancementTalk)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'enhancementtalk'], data.message)
        .setIn(['dashboard', 'enhancementtalkindex'], 'dialog');
    });

  if (action === talkActions.storyBoxToggle) {
    const toggle = jsonapiCursor(['talk', 'story']);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['talk', 'story'], !toggle);
    });
  }

});
