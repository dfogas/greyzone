import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function agentToArmory(agent) {
  dispatch(agentToArmory, {message: agent});
}

export function assignMission(agent) {
  dispatch(assignMission, {message: agent});
}

export function assignTask(agent) {
  dispatch(assignTask, {message: agent});
}

export function backfromArmory(agent) {
  dispatch(backfromArmory, {message: agent});
}

export function backtoAssignment(agent) {
  dispatch(backtoAssignment, {message: agent});
}

export function backtoRoster(agent) {
  dispatch(backtoRoster, {message: agent});
}

export function equip(equipmentindexandname) {
  dispatch(equip, equipmentindexandname);
}

export function getRank(agent) {
  dispatch(getRank, agent);
}

export function goFree() {
  dispatch(goFree, {message: 'run free!'});
}

export function goToPrison() {
  dispatch(goToPrison, {message: 'in prison!'});
}
/*
  agent is also draggable to the mission
*/

setToString('agents', {
  agentToArmory,
  assignMission,
  assignTask,
  backfromArmory,
  backtoAssignment,
  backtoRoster,
  equip,
  getRank,
  goFree,
  goToPrison
});
