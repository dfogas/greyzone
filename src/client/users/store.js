import * as authActions from '../auth/actions';
import {register} from '../dispatcher';
import User from './user';
import {usersCursor} from '../state';

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    // See how user store can handle auth action.
    case authActions.login:
      usersCursor(users => {
        // data - {email: 'pr@t.ur', password: pratur};
        return users.set('viewer', data);
      });
      break;

    case authActions.signup:
      // here it should redirect to login
      usersCursor(users => {
        const user = data;
        return users.set('viewer', new User(user));
      });
      break;

  }

});
