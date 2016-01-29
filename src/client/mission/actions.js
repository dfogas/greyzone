import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';

export function agentIsBackFromTask() {
  dispatch(agentIsBackFromTask, {});
}

export function agentLockedToTask() {
  dispatch(agentLockedToTask, {});
}

export function agentOnTaskGetsExperienceForCompletingTask() {
  dispatch(agentOnTaskGetsExperienceForCompletingTask, {});
}

export function agentsAreBackFromMission() {
  dispatch(agentsAreBackFromMission, {});
}

export function bookLosses(mission) {
  dispatch(bookLosses, {message: mission});
}

export function bookRewards(mission) {
  dispatch(bookRewards, {message: mission});
}

export function checkFatalities() {
  dispatch(checkFatalities, {});
}

export function clearTask() {
  dispatch(clearTask, {});
}

export function clearTabletop() {
  dispatch(clearTabletop, {});
}

export function completeTask(task) {
  dispatch(completeTask, {message: task});
}

export function controldamage() {
  dispatch(controldamage, {});
}

export function fail() {
  dispatch(fail, {});
}

export function focusMission() {
  dispatch(focusMission, {});
}

export function passOnMission(mission) {
  dispatch(passOnMission, {message: mission});
}

export function removeCompletedMission() {
  dispatch(removeCompletedMission, {});
}

export function select(title, inCountry, tier) {
  const missions = jsonapiCursor(['missions']);
  const mission = missions.find(mission =>
      mission.get('title') === title &&
      mission.get('inCountry') === inCountry &&
      mission.get('tier') === tier
    );

  dispatch(select, {message: mission});
}

export function start() {
  dispatch(start, {});
}

export function success() {
  dispatch(success, {});
}

export function test() {
  dispatch(test, {});
}

/*
  get success probability
*/

setToString('mission', {
  agentIsBackFromTask,
  agentLockedToTask,
  agentOnTaskGetsExperienceForCompletingTask,
  agentsAreBackFromMission,
  bookLosses,
  bookRewards,
  checkFatalities,
  clearTabletop,
  clearTask,
  completeTask,
  controldamage,
  fail,
  focusMission,
  passOnMission,
  removeCompletedMission,
  select,
  start,
  success,
  test
});
