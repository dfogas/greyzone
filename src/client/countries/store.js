// store seems not to be a class but dispatchToken function using register method
// of dispatcher
import * as actions from './actions';
import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  // See how user store can handle auth action.
  if (action === actions.updateCountry)
    return;

});
