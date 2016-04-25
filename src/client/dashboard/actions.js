/* Dashboard Actions */
import Promise from 'bluebird';
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import immutable from 'immutable';
import cconfig from '../client.config';
import Agent from '../../server/lib/greyzone/agents.generator';
import MissionsList from '../../server/lib/greyzone/missions.list';
import CountryList from '../../server/lib/greyzone/country.list';
import EnhancementList from '../../server/lib/greyzone/enhancement.list';
import StatusesList from '../../server/lib/greyzone/status.list';

import {gameCursor} from '../state';
import {jsonapiCursor} from '../state';
import allAgents from '../lib/allagents';
import capabilityCheck from '../lib/capabilitycheck';
import checkArmory from '../lib/checkarmory';
import leadershipCheck from '../lib/leadershipcheck';
import maxAgentsCheck from '../lib/maxagentscheck';
import maxMissionsCheck from '../lib/maxmissionscheck';
import missionAccept from '../lib/missionaccept';
import noDoubleAgents from '../lib/nodoubleagents';
import randomInt from '../lib/getrandomint';
import R from 'ramda';
import xmissioncheck from '../lib/xmissioncheck';

/* Number, String, String, Object */
export function acceptMission(tier, focus, country, options) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const mission = missionAccept(tier, focus, country, options, enhancements, CountryList, MissionsList);
  const missions = jsonapiCursor(['missions']);
  const capabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);

  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'missions']);
  const storage = typeof storagejson === 'number' ? [] : storagejson ? JSON.parse(storagejson) : [];

  if (!capabilityCheck(parseInt(tier, 10), capabilitynames))
    dispatch(logMissionsWindow, {message: 'Upgrade your capability enhancement for higher tier missions.'});
  else if (!maxMissionsCheck(missions.size, capabilitynames))
    dispatch(logMissionsWindow, {message: 'Missions limit reached, pass on some missions to accept new ones.'});
  else {
    localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'agents'], storage.concat(JSON.stringify([mission])));
    dispatch(acceptMission, {mission});
    dispatch(logMissionsWindow, {message: 'New mission has been accepted.'});
  }
}

export function bookMissionPrice(tier) {
  const missionPrice = gameCursor(['globals', 'constants', 'missionsPriceList']).get(tier);

  dispatch(bookMissionPrice, {message: missionPrice});
}

export function bookPrisonBreakMissionPrice(agentbeingsaved) {
  dispatch(bookPrisonBreakMissionPrice, {
    message: immutable.fromJS({
      cash: agentbeingsaved.get('rank') * 1000,
      contacts: agentbeingsaved.get('rank') * 10
    })
  });
}

export function buyEnhancement({target}) {
  const enhancement = EnhancementList.filter(enhancement => enhancement.name === target.parentNode.childNodes[0].innerHTML)[0];
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementcapabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);
  if (enhancementcapabilitynames.indexOf('Good Label') === -1 && enhancement.type === 'operationsscope')
    dispatch(log, {message: 'You need to upgrade operation to Good Label, before enhancing your operations scope.'});
  else
    dispatch(buyEnhancement, {message: enhancement});
}

export function buyStatus({target}) {
  const status = StatusesList.filter(status => status.name === target.parentNode.childNodes[0].innerHTML)[0];
  dispatch(buyStatus, {message: status});
}

export function changeMissionOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  dispatch(changeMissionOption, promise);
}

export function changeOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  dispatch(changeOption, promise);
}

export function clearAgentHireFields() {
  dispatch(clearAgentHireFields, {});
}

export function clearLog() {
  dispatch(clearLog, {});
}

export function clearMissionAcceptFields() {
  dispatch(clearMissionAcceptFields, {});
}

export function displayGameEndStatistics() {
  // TODO: calls to localStorage and passes results to store

  const jsonmissions = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'missions']);
  const missionstorage = jsonmissions ? JSON.parse(jsonmissions) : [];
  const jsonagents = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'agents']);
  const agentstorage = jsonagents ? JSON.parse(jsonagents) : [];
  dispatch(displayGameEndStatistics, {});
}

export function hireAgent(specialist, rank) {
  const agent = noDoubleAgents(allAgents(jsonapiCursor()).toJS(), rank, specialist);
  const leadershipNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'leadership').map(enh => enh.name);
  const capabilityNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'capability').map(enh => enh.name);
  const totalAgents = jsonapiCursor(['agents']).size + jsonapiCursor(['activemission', 'agentsonmission']).size + (checkArmory() ? 1 : 0);

  const agentPriceList = gameCursor(['globals', 'constants', 'agentsPriceList']).toJS();
  const agentPrice = agentPriceList[rank];
  const gameCash = jsonapiCursor(['gameCash']);

  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'agents', 'all']);
  const storage = typeof storagejson === 'number' ? [] : storagejson ? storagejson : [];

  if (agentPrice > gameCash)
    dispatch(logAgentsWindow, {message: 'Agent is too expensive for us, at the moment.'});
  else if (!maxAgentsCheck(totalAgents, capabilityNames))
    dispatch(logAgentsWindow, {message: 'Max agents reached already. Dismiss an agent if you want to hire new one.'});
  else if (!leadershipCheck(rank - 1, leadershipNames))
    dispatch(logAgentsWindow, {message: 'Upgrade leadership facility to recruit and train agents of higher ranks.'});
  else {
    localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'agents', 'all'], storage.concat(JSON.stringify([agent])));
    dispatch(hireAgent, {agent, agentPrice});
    dispatch(logAgentsWindow, {message: 'New agent recruited.'});
  }
}

export function loadGame() {
  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save1']);
  const storage = storagejson ? JSON.parse(storagejson) : null;
  if (storage)
    dispatch(loadGame, storage);
}

export function loadLog() {
  const userId = jsonapiCursor(['_id']);
  const organization = jsonapiCursor(['name']);
  const log = immutable.fromJS(localStorage.getItem(['ghoststruggle', userId, organization, 'log']).split(','));

  dispatch(loadLog, {log});
}

export function log(message) {
  dispatch(log, {message});
}

export function logAgentsWindow(message) {
  dispatch(logAgentsWindow, {message});
}

export function logMissionsWindow(message) {
  dispatch(logMissionsWindow, {message});
}

export function pointerChange(whereto) {
  dispatch(pointerChange, {message: whereto});
}

export function prisonBreakMission() {
  const enhancements = jsonapiCursor(['enhancements']);
  const operationsnames = enhancements.filter(enh => enh.get('type') === 'operationsscope').map(enh => enh.get('name'));
  const mission = immutable.fromJS(xmissioncheck(operationsnames, MissionsList).filter(mission => mission.title === 'Prison Break' && mission.tier === randomInt(3, 5))[0]);
  const missionwETA = mission.set('ETA', Date.now() + (2 * 60 * 60 * 1000) + (10 * 60 * 1000));
  dispatch(prisonBreakMission, {missionwETA});
}

export function refreshStandings() {
  const api = process.env.NODE_ENV === 'production' ?
    cconfig.dnsprod + '/api/v1/' :
    cconfig.dnsdevel + '/api/v1/';
  var promise = fetch(api + 'contest/')
    .then((response) => {
      if (response.status >= 400)
        throw new Error('Bad response from the server.');
      return response.json();
    });

  dispatch(refreshStandings, promise);
}

export function retireGame() {
  dispatch(retireGame, {});
}

export function sanitizeAgents() {
  dispatch(sanitizeAgents, {});
}

export function sanitizeMissions() {
  dispatch(sanitizeMissions, {});
}

export function saveAgent(agent) {
  const enhancements = jsonapiCursor(['enhancements']);
  const enhancementnames = enhancements.filter(enh => enh.get('type') === 'operationsscope').map(enh => enh.get('name'));
  if (enhancementnames.indexOf(`We Got the Power`) === -1)
    dispatch(logAgentsWindow, `Buy enhancement 'We Got the Power first.'`);
  else if (jsonapiCursor(['agentBeingSaved']))
    dispatch(logAgentsWindow, `There is currently agent being saved, save her first then, you may choose another one.`);
  else {
    dispatch(saveAgent, {agent});
    dispatch(logAgentsWindow, `Agent ` + agent.get('name') + ` should be freed by next Prison Break mission.`);
  }
}

export function saveGame(jsonapi) {
  localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save1'], JSON.stringify(jsonapi.toJS()));
}

export function saveLog() {
  const log = jsonapiCursor(['log']).toJS();
  const userId = jsonapiCursor(['_id']);
  const organization = jsonapiCursor(['name']);

  const storagejson = localStorage.getItem(['ghoststruggle', userId, organization, 'log']);
  const storage = storagejson ? storagejson.split(',') : [];

  localStorage.setItem(['ghoststruggle', userId, organization, 'log'], R.uniq(storage.concat(log)));
}

export function startNewGame(userId, name) {
  dispatch(startNewGame, {userId, name});
}

export function updateFormField({name, value}, context) {
  // Both email and password max length is 100.
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value, context});
}

export function upgradeEnhancement(enhancement) {
  if (enhancement)
    dispatch(upgradeEnhancement, {enhancement});
}

setToString('dashboard', {
  acceptMission,
  bookMissionPrice,
  bookPrisonBreakMissionPrice,
  buyEnhancement,
  buyStatus,
  changeMissionOption,
  changeOption,
  clearAgentHireFields,
  clearLog,
  clearMissionAcceptFields,
  displayGameEndStatistics,
  hireAgent,
  loadLog,
  loadGame,
  log,
  logAgentsWindow,
  logMissionsWindow,
  pointerChange,
  prisonBreakMission,
  refreshStandings,
  retireGame,
  sanitizeAgents,
  sanitizeMissions,
  saveAgent,
  saveGame,
  startNewGame,
  updateFormField,
  upgradeEnhancement
});
