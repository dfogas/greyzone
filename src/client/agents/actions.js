import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {gameCursor, jsonapiCursor} from '../state';
import cconfig from '../client.config';

import actionDices from '../lib/bml/actiondices';
import agentIncurDelay from '../lib/bml/agentincurdelay';
import agentRankup from '../lib/bml/agentrankup';
import isEquipmentBackfire from '../lib/bml/isequipmentbackfire';
import leadershipcheck from '../lib/bml/leadershipcheck';
import Sound from '../lib/sound';
import $ from 'jquery';

const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
const isNotProduction = process.env.NODE_ENV !== 'production';

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

export function agentTalking(agent) {
  const goodlabel = jsonapiCursor(['enhancements']).find(enh => enh.get('name') === 'Good Label');
  const enhancements = jsonapiCursor(['enhancements']);
  const self = jsonapiCursor(['self']);
  const isNotSelf = self.get('id') !== agent.get('id');

  if (agent.get('prison'))
    isNotProduction ? alert('add prison dialog here') : console.log('work in progress');//eslint-disable-line no-alert, no-unused-expressions, no-console
  else if ((goodlabel && jsonapiCursor(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'prisonbreak')))
    dispatch(enhancementTalk, {message: 'prisonbreak'});
  else if (!isNotSelf && goodlabel && jsonapiCursor(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'silencewitness'))
    dispatch(enhancementTalk, {message: 'silencewitness'});
  else if (isNotSelf && agent.get('specialist') === 'technician' && goodlabel && agent.get('missionsDone').size > 10 && !enhancements.find(enh => enh.get('missiontag') === 'destroyevidence'))
    dispatch(enhancementTalk, {message: 'destroyevidence'});
  else if (isNotSelf && agent.get('specialist') === 'spy' && goodlabel && agent.get('loyalty') === 'loyal' && !enhancements.find(enh => enh.get('missiontag') === 'afriendininnercircle'))
    dispatch(enhancementTalk, {message: 'afriendininnercircle'});
  else if (isNotSelf && agent.get('personality') === 'SP' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'bankrobbery'))
    dispatch(enhancementTalk, {message: 'bankrobbery'});
  else if (isNotSelf && agent.get('loyalty') !== 'loyal' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'anolddebt') && agent.get('id') !== self.get('id'))
    dispatch(enhancementTalk, {message: 'anolddebt'});
  else
    isNotProduction ? alert('add dialog option here') : console.log('work in progress'); //eslint-disable-line no-alert, no-unused-expressions, no-console
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

export function enhancementTalk(message) {
  dispatch(enhancementTalk, message);
}

export function equip(equipment) {
  // TODO: napsat líp //
  const hasAlready = jsonapiCursor(['agentinarmory', 'equipments']).map(eqs => eqs.get('name')).indexOf(equipment.get('name')) !== -1;
  if (!hasAlready) {
    dispatch(equip, equipment);
    let mySound = new Sound(url + '/assets/audio/AgentEquiped.ogg');
    mySound.play();
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
  }
  else flashArmory('Upgrade training facility.');
}

export function setETA(agent, equipment) {
  const delay = gameCursor(['globals', 'features', 'unpaid', 'equipments', 'ETAdelay']);
  const agentsETA = agentIncurDelay(agent, delay, isEquipmentBackfire(agent, equipment));

  // console.log(dayandtime(agentsETA, new Date().getTimezoneOffset()));
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
  codeChange,
  enhancementTalk,
  equip,
  flashArmory,
  getRank,
  setETA
});
