import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function languageSelect(message) {
  dispatch(languageSelect, {message});
}

setToString('app', {
  languageSelect
});
