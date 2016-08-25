import * as animationsActions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';

export const dispatchToken = register(({action, data}) => {
  if (action === animationsActions.animationEnd)
    jsonapiCursor(jsonapi => {
      return jsonapi;
    });
});
