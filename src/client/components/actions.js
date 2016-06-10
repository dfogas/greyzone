import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function bigScreenToggle() {
  dispatch(bigScreenToggle, {});
}

export function devNoticeToggle() {
  // odstraní okno s Dev Notice z DOMu přes Reactí render funkci
  dispatch(devNoticeToggle, {});
}

setToString('components', {
  bigScreenToggle,
  devNoticeToggle
});
