import {register} from '../dispatcher';
import {i18nCursor} from '../state';
import messages from '../messages';
import immutable from 'immutable';

import * as appActions from './actions';

export const dispatchToken = register(({action, data}) => {

  if (action === appActions.languageSelect)
    i18nCursor(i18n => {
      return i18n
        .set('locales', data.message)
        .set('messages', messages[data.message]);
    });
});
