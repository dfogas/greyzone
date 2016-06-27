import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import {gameCursor} from '../state';
import {msg} from '../intl/store';

import actionDices from '../lib/actiondices';
import agentIncurDelay from '../lib/agentincurdelay';
import agentRankup from '../lib/agentrankup';
import agentTalk from '../lib/agenttalk';
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
    logArmory('Mission agent limit already reached.');
  else if (agent.get('ETA') - Date.now() > 0)
    logArmory('Agent is tired.');
  else
    dispatch(agentInArmoryAssignMission, {agent});
}

export function agentTalking(agent) {
  const self = jsonapiCursor(['self']);
  if ($('#ArmoryScreen').html()) {
    console.log('armory talk');
    $('#ArmoryScreen').append(() => msg('agents.talk.' + agentTalk(agent, self)));
    $('#AgentTalk').append(`<button>Close</button>`);
    $('#AgentTalk button').click(() => $('#AgentTalk').remove());
  } else if ($('#BriefingScreen').html()) {
    console.log('briefing talk');
    $('#BriefingScreen').append(msg('agents.talk.' + agentTalk(agent, self)));
    $('#AgentTalk').append(`<button>Close</button>`);
    $('#AgentTalk button').click(() => $('#AgentTalk').remove());
  } else if ($('#DashboardScreen').html()) {
    console.log('dashboard talk');
    $('#DashboardScreen').append(msg('agents.talk.' + agentTalk(agent, self)));
    $('#AgentTalk').append(`<button>Close</button>`);
    $('#AgentTalk button').click(() => $('#AgentTalk').remove());
  } else {
    console.log('mission talk');
    $('#TableTop').append('<div id=\'MissionStartMessage\'>Busy</div>');
    $('#MissionStartMessage').hide().fadeIn(200);
    $('#MissionStartMessage').fadeOut(1000, () => $('#MissionStartMessage').remove());
  }
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
  agentTalking,
  assignTask,
  backFromArmory,
  backtoRoster,
  equip,
  getRank,
  // goFree,
  // goToPrison,
  honorAgent,
  logArmory,
  setETA
});
