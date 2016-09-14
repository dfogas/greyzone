import {register} from '../../dispatcher'; //
import {authCursor} from '../../state';
import * as feedbackFormActions from './actions';

export const dispatchToken = register(({action, data}) => {

  if (action === feedbackFormActions.changeValue)
    authCursor(auth => {
      return auth
        .setIn(['feedbackform', data.name], data.value);
    });

  if (action === feedbackFormActions.sendFeedbackError)
    authCursor(auth => {
      return auth
        .set('feedbackerror', data.error);
    });

  if (action === feedbackFormActions.sendFeedbackForm)
    authCursor(auth => {
      return auth;
    });

  if (action === feedbackFormActions.setStars)
    authCursor(auth => {
      return auth
        .setIn(['feedbackform', 'stars', data.name], data.rating);
    });

  if (action === feedbackFormActions.updateFormField)
    authCursor(auth => {
      return auth
        .setIn(['feedbackform', data.name], data.value);
    });

});
