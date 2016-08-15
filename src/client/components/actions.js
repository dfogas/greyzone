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

export function introductionWindowToggle() {
  dispatch(introductionWindowToggle, {});
}

export function loginSignupToggle() {
  dispatch(loginSignupToggle, {});
}

export function missionScreenToggleOff() {
  dispatch(missionScreenToggleOff, {});
}

export function missionScreenToggleOn() {
  dispatch(missionScreenToggleOn, {});
}

export function missionScreenTransition() {
  dispatch(missionScreenTransition, {});
}

export function tablePlanToggle() {
  dispatch(tablePlanToggle, {});
}

setToString('components', {
  bigScreenToggle,
  bigScreenZ,
  devNoticeToggle,
  introductionWindowToggle,
  loginSignupToggle,
  missionScreenTransition,
  missionScreenToggleOff,
  missionScreenToggleOn,
  tablePlanToggle
});
