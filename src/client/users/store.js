import * as authActions from '../auth/actions';
import {register} from '../dispatcher';
import {usersCursor} from '../state';

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    // See how user store can handle auth action.
    case authActions.login:
      usersCursor(users => {
        return users.set('viewer', data.name);
      });
      break;

    // case authActions.signup:
    //   // here it should redirect to login
    //   usersCursor(users => {
    //     const user = data;
    //     return users.set('viewer', new User(user));
    //   });
    //   break;
  }
});
