import * as componentsActions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';

export const dispatchToken = register(({action, data}) => {

  if (action === componentsActions.bigScreenToggle) {
    const toggle = jsonapiCursor(['components', 'login', 'bigscreen']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'bigscreen'], !toggle);
    });
  }

  if (action === componentsActions.devNoticeToggle) {
    const toggle = jsonapiCursor(['components', 'login', 'devnotice']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'devnotice'], !toggle);
    });
  }

});
