import * as componentsActions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';

export const dispatchToken = register(({action, data}) => {

  if (action === componentsActions.bigScreenToggle) {
    const toggle = jsonapiCursor(['components', 'login', 'bigscreen', 'status']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'bigscreen', 'status'], !toggle);
    });
  }

  if (action === componentsActions.bigScreenZ) {
    const zIndex = data.zIndex;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'bigscreen', 'zIndex'], zIndex);
    });
  }

  if (action === componentsActions.devNoticeToggle) {
    const toggle = jsonapiCursor(['components', 'login', 'devnotice']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'devnotice'], !toggle);
    });
  }

  if (action === componentsActions.missionScreenToggleOff)
  jsonapiCursor(jsonapi => {
    return jsonapi
    .setIn(['components', 'mission', 'transition'], false);
  });

  if (action === componentsActions.missionScreenToggleOn)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'mission', 'transition'], true);
    });

  if (action === componentsActions.missionScreenTransition) {
    const toggle = jsonapiCursor(['components', 'mission', 'transition']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'mission', 'transition'], !toggle);
    });
  }

});
