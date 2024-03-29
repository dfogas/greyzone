import * as authActions from './actions';
import {authCursor, jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    case authActions.loginError:
      authCursor(auth => {
        const error = data;
        return auth.setIn(['form', 'error'], error);
      });
      break;

    case authActions.updateFormField:
      authCursor(auth => {
        const {name, value} = data;
        return auth.setIn(['form', 'fields', name], value);
      });
      break;

    case authActions.signupError:
      authCursor(auth => {
        const error = data;
        return auth.setIn(['form', 'error'], error);
      });
      break;

    case authActions.lpwRecoverError:
      authCursor(auth => {
        const error = data;
        return auth.setIn(['form', 'error'], error);
      });
      break;

    case authActions.lpwRecover:
      authCursor(auth => {
        return auth
          .setIn(['form', 'error'], null)
          .setIn(['lprecover', 'message'], 'Email sent.');
      });
      break;

    case authActions.reauthenticateError:
      authCursor(auth => {
        const error = data;
        return auth
          .setIn(['form', 'error'], error);
      });
      break;

    case authActions.reauthenticate:
      authCursor(auth => {
        return auth
          .setIn(['form', 'error'], null)
          .setIn(['reauthentication', 'message'], 'Password changed.');
      });
      break;

    case authActions.login:
      jsonapiCursor(jsonapi => {
        return jsonapi.mergeDeep(immutable.fromJS(data));
      });
      break;
  }

});
