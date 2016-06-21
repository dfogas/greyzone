import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import {gameCursor} from '../state';

import actionDices from '../lib/actiondices';
import agentIncurDelay from '../lib/agentincurdelay';
import agentRankup from '../lib/agentrankup';
import leadershipcheck from '../lib/leadershipcheck';
import trainingtable from '../../server/lib/greyzone/trainingtable';
import $ from 'jquery';

export function toArmory(agent) {
  dispatch(toArmory, {message: agent});
}

export function agentInArmoryAssignMission(agent) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const totalmissionagents = agentontask ? agentsonmission.size + 1 : agentsonmission.size;
  const activemissionlimit = jsonapiCursor(['activemission', 'agentLimit']);

  if (totalmissionagents === activemissionlimit)
    logArmory('Mission agent limit already reached.');
  else if (agent.get('ETA') - Date.now() > 0)
    logArmory('Agent is tired.');
  else
    dispatch(agentInArmoryAssignMission, {agent});
}

export function assignTask(agent) {
  const currenttask = jsonapiCursor(['activemission', 'tasks', jsonapiCursor(['activemission', 'taskscompleted']).size]);
  const dices = actionDices(agent, currenttask);

  dispatch(assignTask, {agent, dices});
}

export function backFromArmory(agent) {
  dispatch(backFromArmory, {message: agent});
}

export function backtoRoster(agent) {
  /* agent se vrací z týmu přípravujícího se na misi zpět do agentů čekajících */
  dispatch(backtoRoster, {message: agent});
}

export function dismissAgent(agent) {
  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'agents', 'leftinprison']);
  const storage = storagejson ? JSON.parse(storagejson) : [];

  localStorage.setItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'agents', 'leftinprison'], JSON.stringify(storage.concat([agent.toJS()])));
  dispatch(dismissAgent, {agent});
}

export function equip(equipment) {
  // TODO: napsat líp
  const hasAlready = jsonapiCursor(['agentinarmory', 'equipments']).map(eqs => eqs.get('name')).indexOf(equipment.get('name')) !== -1;
  if (!hasAlready) {
    dispatch(equip, equipment);
    logArmory('Agent equipped.');
  }
  else logArmory('Agent already has this equipment.');
}

export function getRank(agent) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  // console.log(agentRankup(trainingtable, 7, agent));
  if (leadershipcheck(agent.get('rank'), enhancementnames)) {
    logArmory('Agent Rank Gained.');
    dispatch(getRank, agentRankup(trainingtable, 7, agent));
  }
  else logArmory('Upgrade training facility.');
}

export function honorAgent(agent) {
  dispatch(honorAgent, {agent});
}

export function logArmory(message) {
  $('#ArmoryScreen').append(`<div id='ArmoryMessage'>${message}</div>`);
  $('#ArmoryMessage').hide().fadeIn(400);
  $('#ArmoryMessage').fadeOut(1200, () => $('#ArmoryMessage').remove());
  // může být i v BriefingScreenu
  if ($('#BriefingScreen')) {
    $('#BriefingScreen').append(`<div id='BriefingMessage'>${message}</div>`);
    $('#BriefingMessage').hide().fadeIn(400);
    $('#BriefingMessage').fadeOut(1200, () => $('#BriefingMessage').remove());
  }
}

export function setETA(agent, equipment) {
  const delay = gameCursor(['globals', 'features', 'unpaid', 'equipments', 'ETAdelay']);
  const agentsETA = agentIncurDelay(agent, equipment, delay);

  dispatch(setETA, {agentsETA});
}

setToString('agents', {
  toArmory,
  agentInArmoryAssignMission,
  assignTask,
  backFromArmory,
  backtoRoster,
  dismissAgent,
  equip,
  getRank,
  // goFree,
  // goToPrison,
  honorAgent,
  logArmory,
  setETA
});
