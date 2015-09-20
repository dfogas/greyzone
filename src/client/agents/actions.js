import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function scrollLeft() {
  dispatch(scrollLeft, {});
}

export function scrollRight() {
  dispatch(scrollRight, {});
}

export function agentToArmory(agent) {
  dispatch(agentToArmory, {message: agent});
}

export function assignMission(agent) {
  dispatch(assignMission, {message: agent});
}

export function assignTask(agent) {
  dispatch(assignTask, {message: agent});
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

export function getLevel(agent) {
  dispatch(getLevel, agent);
}

export function goFree() {
  dispatch(goFree, {message: 'run free!'});
}

export function goToPrison() {
  dispatch(goToPrison, {message: 'in prison!'});
}

export function loyaltyChange() {
  dispatch(loyaltyChange, {message: 'loyalty shift'});
}

export function recieveEquipments() {
  dispatch(recieveEquipments, {message: 'loaded!'});
}

export function travel() {
  dispatch(travel, {message: 'On the way!'});
}

/*
  agent is also draggable to the mission
*/

setToString('agents', {
  scrollLeft,
  scrollRight,
  agentToArmory,
  assignMission,
  assignTask,
  backtoAssignment,
  backtoRoster,
  equip,
  travel
});
