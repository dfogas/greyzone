import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
// import {jsonapiCursor} from '../state';

/*it should transfer agent from task to agents on mission
  used 3 times*/
export function agentIsBackFromTask() {
  dispatch(agentIsBackFromTask, {});
}

export function agentLockedToTask() {
  dispatch(agentLockedToTask, {});
}

/* fires for all agents on mission after result is determined
  extracts information from active mission and stores it in List within agent struct*/
export function agentMissionDone(index) {
  dispatch(agentMissionDone, {message: index});
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

/* check whether there is agentImprisoned or
  agentKilled */
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

export function end() {
  dispatch(end, {});
}

/* sets activemission result to 'fail'
  and its started property to false */
export function fail() {
  dispatch(fail, {});
}

export function log(message) {
  dispatch(log, {message}); // still enhanced literal? Probably yes.
}

/* fires after mission result is determined (success or fail)
  extracts information from active mission and stores it in List within player struct*/
export function organizationMissionDone() {
  dispatch(organizationMissionDone, {});
}

/*finds passed mission within player's missions and removes it*/
export function passOnMission(mission) {
  dispatch(passOnMission, {message: mission});
}

/*finds activemission in missions and removes it*/
export function removeCompletedMission() {
  dispatch(removeCompletedMission, {});
}

/*passed mission is merged to become a activemission*/
export function select(mission) {
  if (mission && mission.get('ETA') - Date.now() <= 0)
    dispatch(passOnMission, {message: mission});
  else
    dispatch(select, {message: mission});
}

export function setDefault(mission) {
  dispatch(setDefault, {});
}

/*sets activemission.started true*/
export function start() {
  dispatch(start, {});
}

/* sets activemission result to 'success'
  and its started property to false */
export function success() {
  dispatch(success, {});
}

/*
  TODO: get success probability
*/

setToString('mission', {
  agentIsBackFromTask,
  agentLockedToTask,
  agentMissionDone,
  agentOnTaskGetsExperienceForCompletingTask,
  agentsAreBackFromMission,
  bookLosses,
  bookRewards,
  checkFatalities,
  clearTabletop,
  clearTask,
  completeTask,
  controldamage,
  end,
  fail,
  log,
  organizationMissionDone,
  passOnMission,
  removeCompletedMission,
  select,
  setDefault,
  start,
  success
});
