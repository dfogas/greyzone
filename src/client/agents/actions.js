import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import {gameCursor} from '../state';
import {msg} from '../intl/store';

import actionDices from '../lib/actiondices';
import agentIncurDelay from '../lib/agentincurdelay';
import agentRankup from '../lib/agentrankup';
import invokeAgentTalk from '../lib/invokeagenttalk';
import leadershipcheck from '../lib/leadershipcheck';
import trainingtable from '../../server/lib/greyzone/trainingtable';
import $ from 'jquery';

export function toArmory(agent) {
  if (agent)
    dispatch(toArmory, {message: agent});
}

export function agentInArmoryAssignMission(agent) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const totalmissionagents = agentontask ? agentsonmission.size + 1 : agentsonmission.size;
  const activemissionlimit = jsonapiCursor(['activemission', 'agentLimit']);

  if (totalmissionagents === activemissionlimit)
    flashArmory('Mission agent limit already reached.');
  else if (agent.get('ETA') - Date.now() > 0)
    flashArmory('Agent is tired.');
  else {
    flashArmory('Agent assigned to mission.');
    dispatch(agentInArmoryAssignMission, {agent});
  }
}

export function agentTalking(agent) {
  const goodlabel = jsonapiCursor(['enhancements']).find(enh => enh.get('name') === 'Good Label');
  const enhancements = jsonapiCursor(['enhancements']);

  if ((goodlabel && jsonapiCursor(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'prisonbreak')))
    dispatch(enhancementTalk, {message: 'prisonbreak'});
  else if (jsonapiCursor(['self']).get('id') === agent.get('id') && goodlabel && jsonapiCursor(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'silencewitness'))
    dispatch(enhancementTalk, {message: 'silencewitness'});
  else if (agent.get('specialist') && goodlabel && agent.get('missionsDone').size > 10 && !enhancements.find(enh => enh.get('missiontag') === 'destroyevidence'))
    dispatch(enhancementTalk, {message: 'destroyevidence'});
  else if (agent.get('specialist') === 'spy' && goodlabel && agent.get('loyalty') === 'loyal' && !enhancements.find(enh => enh.get('missiontag') === 'afriendininnercircle'))
    dispatch(enhancementTalk, {message: 'afriendininnercircle'});
  else if (agent.get('personality') === 'SP' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'bankrobbery'))
    dispatch(enhancementTalk, {message: 'bankrobbery'});
  else if (agent.get('loyalty') !== 'loyal' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'anolddebt'))
    dispatch(enhancementTalk, {message: 'anolddebt'});
  else
    invokeAgentTalk(jsonapiCursor(), agent);
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

export function buyEnhancement(missiontag) {
  const list = gameCursor(['globals', 'enhancements']);
  const enhancement = list.find(enh => enh.get('missiontag') === missiontag);

  dispatch(buyEnhancement, {enhancement});
}

export function choiceToAcknowledgement() {
  dispatch(choiceToAcknowledgement, {});
}

export function closeEnhancementTalk() {
  dispatch(closeEnhancementTalk, {});
}

export function dialogToChoice() {
  dispatch(dialogToChoice, {});
}

export function enhancementTalk(message) {
  dispatch(enhancementTalk, message);
}

export function equip(equipment) {
  // TODO: napsat líp
  const hasAlready = jsonapiCursor(['agentinarmory', 'equipments']).map(eqs => eqs.get('name')).indexOf(equipment.get('name')) !== -1;
  if (!hasAlready) {
    dispatch(equip, equipment);
    flashArmory('Agent equipped.');
  }
  else flashArmory('Agent already has this equipment.');
}

export function getRank(agent) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  // console.log(agentRankup(trainingtable, 7, agent));
  if (leadershipcheck(agent.get('rank'), enhancementnames)) {
    flashArmory('Agent Rank Gained.');
    dispatch(getRank, agentRankup(trainingtable, 7, agent));
  }
  else flashArmory('Upgrade training facility.');
}

export function honorAgent(agent) {
  dispatch(honorAgent, {agent});
}

export function flashArmory(message) {
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
  agentTalking,
  assignTask,
  backFromArmory,
  backtoRoster,
  buyEnhancement,
  choiceToAcknowledgement,
  closeEnhancementTalk,
  dialogToChoice,
  enhancementTalk,
  equip,
  getRank,
  // goFree,
  // goToPrison,
  honorAgent,
  flashArmory,
  setETA
});
