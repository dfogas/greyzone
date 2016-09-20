import {dispatch} from '../dispatcher'; //
import setToString from '../lib/settostring';
import {gameCursor, jsonapiCursor} from '../state';
import cconfig from '../client.config';

import announce from '../lib/announce';
import actionDices from '../lib/bml/actiondices';
import agentIncurDelay from '../lib/bml/agentincurdelay';
import agentRankup from '../lib/bml/agentrankup';
import isEquipmentBackfire from '../lib/bml/isequipmentbackfire';
import leadershipcheck from '../lib/bml/leadershipcheck';
import playSound from '../lib/sound';
import $ from 'jquery';

const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;

/*user interfaces function */
export function armoryCode(color) {
  dispatch(armoryCode, {color});
}

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
    flashArmory(`Mission agent limit already reached.`);
  else if (agent.get('ETA') - Date.now() > 0)
    flashArmory(`Agent is tired.`);
  else if (jsonapiCursor(['dashboard', 'countryofoperation']) !== jsonapiCursor(['activemission', 'inCountry']))
    flashArmory(`Not in the country.`);
  else {
    flashArmory('Assigned!');
    dispatch(agentInArmoryAssignMission, {agent});
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
  /* agent se vrací z týmu přípravujícího se na misi zpět do agentů čekajících  */
  dispatch(backtoRoster, {message: agent});
}

export function buyEnhancement(enhancement) {
  const gameCash = jsonapiCursor(['gameCash']);
  const gameContacts = jsonapiCursor(['gameContacts']);
  const price = enhancement.get('price');

  if (gameCash >= price.get('cash') && gameContacts >= price.get('contacts'))
    dispatch(buyEnhancement, {enhancement});
  else
    flashArmory(`Insufficient funds.`);
}

export function codeChange(color) {
  dispatch(codeChange, {color});
}

export function equip(equipment) {
  const hasAlready = jsonapiCursor(['agentinarmory', 'equipments']).find(eq => eq.get('name') === equipment.get('name'));
  if (!hasAlready) {
    dispatch(equip, equipment);
    playSound(url + '/assets/audio/AgentEquiped.ogg');
    flashArmory('Agent equipped.');
  }
  else flashArmory('Agent already has this equipment.');
}

export function flashArmory(message) {
  $('#ArmoryMessage').remove();
  $('#ArmoryScreen').append(`<div id='ArmoryMessage'>${message}</div>`);
  $('#ArmoryMessage').hide().fadeIn(300, () => {
    $('#ArmoryMessage').fadeOut(1000, () => $('#ArmoryMessage').remove());
  });
}

export function getRank(agent) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementnames = enhancements.filter(enh => enh.type === 'leadership').map(enh => enh.name);
  const trainingtable = gameCursor(['globals', 'trainingtable']);
  // console.log(agentRankup(trainingtable, 7, agent));
  if (leadershipcheck(agent.get('rank'), enhancementnames)) {
    flashArmory('Agent Rank Gained.');
    dispatch(getRank, agentRankup(trainingtable, 7, agent));
  } else {
    announce('Upgrade training facility in your Dashboard.', 'Briefing');
    announce('Upgrade training facility in your Dashboard.', 'Armory');
  }
}

export function setETA(agent, equipment) {
  const delay = gameCursor(['globals', 'features', 'unpaid', 'equipments', 'ETAdelay']);
  const agentsETA = agentIncurDelay(agent, delay, isEquipmentBackfire(agent, equipment));

  // console.log(dayandtime(agentsETA, new Date().getTimezoneOffset()));
  dispatch(setETA, {agentsETA});
}

setToString('agents', {
  armoryCode,
  toArmory,
  agentInArmoryAssignMission,
  assignTask,
  backFromArmory,
  backtoRoster,
  buyEnhancement,
  codeChange,
  equip,
  flashArmory,
  getRank,
  setETA
});
