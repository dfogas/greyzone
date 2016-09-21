import {dispatch} from '../dispatcher'; //
import setToString from '../lib/settostring';

export function activeMissionToggle() {
  dispatch(activeMissionToggle, {});
}

export function bigScreenToggle() {
  dispatch(bigScreenToggle, {});
}

export function bigScreenZ(zIndex) {
  dispatch(bigScreenZ, {zIndex});
}

export function deskPlanToggle() {
  dispatch(deskPlanToggle, {});
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

export function missionListToggle() {
  dispatch(missionListToggle, {});
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

export function salesPitchToggle() {
  dispatch(salesPitchToggle, {});
}

export function screenHelpToggle(context) {
  dispatch(screenHelpToggle, {context});
}

export function travelSelectionToggle() {
  dispatch(travelSelectionToggle, {});
}

setToString('components', {
  activeMissionToggle,
  bigScreenToggle,
  bigScreenZ,
  deskPlanToggle,
  devNoticeToggle,
  introductionWindowToggle,
  loginSignupToggle,
  missionListToggle,
  missionScreenTransition,
  missionScreenToggleOff,
  missionScreenToggleOn,
  salesPitchToggle,
  screenHelpToggle,
  travelSelectionToggle
});
