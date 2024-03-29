import IntlMessageFormat from 'intl-messageformat';
import IntlRelativeFormat from 'intl-relativeformat';
import {i18nCursor} from '../state';
import {register} from '../dispatcher';
import {List, Map} from 'immutable';
import immutable from 'immutable';

import * as intlActions from './actions';
import messages from '../messages';

const cachedInstances = Object.create(null);
const intlRelativeFormat = new IntlRelativeFormat;

function getCachedInstanceOf(message) {
  if (message in cachedInstances)
    return cachedInstances[message];
  // TODO: Add locales support.
  cachedInstances[message] = new IntlMessageFormat(message);
  return cachedInstances[message];
}

export function mymsg(path) {
  const pathParts = ['messages'].concat(path.split('.'));
  const message = i18nCursor(pathParts);

  if (message == null)
    throw new ReferenceError('Could not find Intl message: ' + pathParts);

  return message;
}

export function msg(path, values = null): string {
  const pathParts = ['messages'].concat(path.split('.'));
  const message = i18nCursor(pathParts);

  if (message == null)
    throw new ReferenceError('Could not find Intl message: ' + pathParts);

  return !values ? message : getCachedInstanceOf(message).format(values);
}

// get List[.slice(start[, end])] of message Maps like [{key: message_key, txt: message_text}, ...]
export function msgs(path, values = null, ...sliceParams): List<Map> {
  const pathParts = ['messages'].concat(path.split('.'));
  const messages = i18nCursor(pathParts);

  if (messages == null)
    throw new ReferenceError('Could not find Intl messages: ' + path);
  if (!List.isList(messages))
    throw new ReferenceError('Not a List of Intl messages: ' + path);

  const messageList = !sliceParams ? messages : List.prototype.slice.apply(messages, sliceParams);

  return !values ? messageList : messageList.map((item) =>
    item.merge(Map({
      txt: getCachedInstanceOf(item.get('txt')).format(values)
    })));
}

export function relativeDateFormat(date, options?): string {
  return intlRelativeFormat.format(date, options);
}

export function dateFormat(date, locales?, options?): string {
  const dateTimeFormat = new Intl.DateTimeFormat(locales, options);
  return dateTimeFormat.format(date);
}

export const dispatchToken = register(({action, data}) => {
  // loads proper locale
  if (action === intlActions.languageSelect)
    i18nCursor(i18n => {
      return i18n
        .set('locales', data.message)
        .set('messages', immutable.fromJS(messages[data.message]));
    });
});
