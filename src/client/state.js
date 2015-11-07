/*
Here we are instantiating the class of State defined in client/lib, named appState,
and providing it with storesReviver function as a callback.

Revivers are linked in here and are used when appState is instantiated,
they should run whenever something in the state and update, the appropriate
fields in nested structure via cursors.

Later down cursors are exported in order to be used in by getState method of
app.react.js,
which is view-controller by React/Flux standards and acts as so in this version
of este.
*/

import State from './lib/state';
import reviveAuth from './auth/revive';
import revivePosts from './support/revive';
import reviveUsers from './users/revive';

const initialState = process.env.IS_BROWSER
  ? window._appState
  : require('../server/initialstate');

export const appState = new State(initialState, function(key, value) {
  switch (key) {
    case 'auth': return reviveAuth(value);
    case 'posts': return revivePosts(value);
    case 'users': return reviveUsers(value);
  }
});

export const authCursor = appState.cursor(['auth']);
export const contestCursor = appState.cursor(['contest']);
export const i18nCursor = appState.cursor(['i18n']);
export const jsonapiCursor = appState.cursor(['jsonapi']);
export const pendingActionsCursor = appState.cursor(['pendingActions']);
export const postsCursor = appState.cursor(['posts']);
export const supportCursor = appState.cursor(['support']);
export const usersCursor = appState.cursor(['users']);
export const viewerCursor = appState.cursor(['users.viewer']);
