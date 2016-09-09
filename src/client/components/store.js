import * as componentsActions from './actions';
import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';

export const dispatchToken = register(({action, data}) => {

  if (action === componentsActions.activeMissionToggle) {
    const toggle = jsonapiCursor(['components', 'briefing', 'activemission', 'toggle']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'briefing', 'activemission', 'toggle'], !toggle);
    });
  }

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

  if (action === componentsActions.introductionWindowToggle) {
    const toggle = jsonapiCursor(['components', 'login', 'introductionwindow']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'introductionwindow'], !toggle);
    });
  }

  if (action === componentsActions.loginSignupToggle) {
    const toggle = jsonapiCursor(['components', 'login', 'signup']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'login', 'signup'], !toggle);
    });
  }

  if (action === componentsActions.missionListToggle) {
    const toggle = jsonapiCursor(['components', 'briefing', 'missionlist']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'briefing', 'missionlist'], !toggle);
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

  if (action === componentsActions.deskPlanToggle) {
    const toggle = jsonapiCursor(['components', 'briefing', 'deskplan', 'toggle']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'briefing', 'deskplan', 'toggle'], !toggle);
    });
  }

  if (action === componentsActions.travelSelectionToggle) {
    const toggle = jsonapiCursor(['components', 'briefing', 'travelselection', 'toggle']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'briefing', 'travelselection', 'toggle'], !toggle);
    });
  }

});
