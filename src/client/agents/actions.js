import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import leadershipCheck from '../lib/leadershipcheck';

export function toArmory(agent) {
  dispatch(toArmory, {message: agent});
}

export function assignMission(agent) {
  /* pokud je agent unavený např. z předchozí mise */
  if (agent.get('ETA') - Date.now() < 0)
    dispatch(assignMission, {message: agent});
}

export function assignTask(agent) {
  // fairly complicated action resolve in agents/store
  // basically it finds out what is current task and which action types it has
  // then adds dices to tabletop
  dispatch(assignTask, {message: agent});
}

export function backfromArmory(agent) {
  dispatch(backfromArmory, {message: agent});
}

export function backtoRoster(agent) {
  /* agent se vrací z týmu přípravujícího se na misi zpět do agentů čekajících */
  dispatch(backtoRoster, {message: agent});
}

export function dismissAgent() {
  dispatch(dismissAgent, {});
}

export function equip(equipmentindexandname) {
  // TODO: napsat líp
  dispatch(equip, equipmentindexandname);
}

export function getRank(agent) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  if (leadershipCheck(agent.get('rank'), enhancementnames))
    dispatch(getRank, agent);
}

// export function goFree() {
//   dispatch(goFree, {message: 'run free!'});
// }
//
// export function goToPrison() {
//   dispatch(goToPrison, {message: 'in prison!'});
// }

export function incurETA(agent, ETAtime) {
  dispatch(incurETA, {message: agent, ETAtime: ETAtime});
}

export function log(message) {
  message = Date.now() + message;
  dispatch(log, {message});
}

setToString('agents', {
  toArmory,
  assignMission,
  assignTask,
  backfromArmory,
  backtoRoster,
  dismissAgent,
  equip,
  getRank,
  // goFree,
  // goToPrison,
  incurETA,
  log
});
