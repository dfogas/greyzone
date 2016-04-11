import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import leadershipcheck from '../lib/leadershipcheck';
import agentRankup from '../lib/agentrankup';
import trainingtable from '../../server/lib/greyzone/trainingtable';

export function toArmory(agent) {
  dispatch(toArmory, {message: agent});
}

export function assignTask(agent) {
  // fairly complicated action resolve in agents/store
  // basically it finds out what is current task and which action types it has
  // then adds dices to tabletop
  dispatch(assignTask, {message: agent});
}

export function backFromArmory(agent) {
  dispatch(backFromArmory, {message: agent});
}

export function backtoRoster(agent) {
  /* agent se vrací z týmu přípravujícího se na misi zpět do agentů čekajících */
  dispatch(backtoRoster, {message: agent});
}

export function dismissAgent(agent) {
  dispatch(dismissAgent, {message: agent});
}

export function equip(obj) {
  // TODO: napsat líp
  const hasAlready = jsonapiCursor(['agentinarmory', 'equipments']).map(eqs => eqs.get('name')).indexOf(obj.get('name')) !== -1;
  if (!hasAlready) {
    dispatch(equip, obj);
    dispatch(logArmory, {message: 'Agent equipped.'});
  }
  else dispatch(logArmory, {message: 'Agent has this equipment already.'});
}

export function getRank(agent) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  // console.log(agentRankup(trainingtable, 7, agent));
  if (leadershipcheck(agent.get('rank'), enhancementnames))
    dispatch(getRank, agentRankup(trainingtable, 7, agent));
  else
    dispatch(logArmory, {message: 'You must upgrade your training facility to train agent further.'});
}

export function incurETA(agent) {
  dispatch(incurETA, {message: agent});
}

export function logArmory(message) {
  dispatch(logArmory, {message});
}

setToString('agents', {
  toArmory,
  assignTask,
  backFromArmory,
  backtoRoster,
  dismissAgent,
  equip,
  getRank,
  // goFree,
  // goToPrison,
  incurETA,
  logArmory
});
