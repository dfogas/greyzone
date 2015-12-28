import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function agentIsBackFromTask() {
  dispatch(agentIsBackFromTask, {});
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

export function removeCompletedMission() {
  dispatch(removeCompletedMission, {});
}

export function select(mission) {
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
  removeCompletedMission,
  select,
  start,
  success,
  test
});
