import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function bigScreenToggle() {
  dispatch(bigScreenToggle, {});
}

export function bigScreenZ(zIndex) {
  dispatch(bigScreenZ, {zIndex});
}

export function devNoticeToggle() {
  // odstraní okno s Dev Notice z DOMu přes Reactí render funkci
  dispatch(devNoticeToggle, {});
}

export function missionScreenTransition() {
  dispatch(missionScreenTransition, {});
}

setToString('components', {
  bigScreenToggle,
  bigScreenZ,
  devNoticeToggle,
  missionScreenTransition
});
