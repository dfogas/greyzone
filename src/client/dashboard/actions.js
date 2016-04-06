/* Dashboard Actions */
import Promise from 'bluebird';
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import 'isomorphic-fetch';
import cconfig from '../client.config';
import Agent from '../../server/lib/greyzone/agents.generator';
import MissionsList from '../../server/lib/greyzone/missions.list';
import randomInt from '../lib/getrandomint';
import xmissioncheck from '../lib/xmissioncheck';

import {gameCursor} from '../state';
import {jsonapiCursor} from '../state';
import capabilityCheck from '../lib/capabilitycheck';
import checkArmory from '../lib/checkarmory';
import isFatal from '../lib/isfatal';
import determineFocus from '../lib/determinefocus';
import leadershipCheck from '../lib/leadershipcheck';
import maxAgentsCheck from '../lib/maxagentscheck';
import maxMissionsCheck from '../lib/maxmissionscheck';
import CountryList from '../../server/lib/greyzone/country.list';
import EnhancementList from '../../server/lib/greyzone/enhancement.list';
import StatusesList from '../../server/lib/greyzone/status.list';

/* Number, String, String, Object */
export function acceptMission(tier, focus, country, options) {
  console.log('Avoid Fatals: ' + options.avoidfatals);
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const missions = jsonapiCursor(['missions']);
  const operationsnames = enhancements.filter(enh => enh.type === 'operationsscope').map(enh => enh.name);
  const capabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);
  const modifiedMissionsList = xmissioncheck(operationsnames, MissionsList);
  const focusedModifiedMissionsList = focus !== 'random' && focus !== 'special' && focus !== 'multiplayer' ? modifiedMissionsList.filter(mission => determineFocus(mission.rewards)[focus]) : modifiedMissionsList;
  const optionedMissionList = options.avoidfatals ? focusedModifiedMissionsList.filter(mission => !isFatal(mission.losses)) : focusedModifiedMissionsList;
  const missionsPerTier = optionedMissionList.filter(mission => mission.tier === parseInt(tier, 10));
  let randomMission = missionsPerTier[randomInt(0, missionsPerTier.length - 1)];
  if (country !== 'random')
    randomMission.inCountry = country;
  else
    randomMission.inCountry = CountryList[randomInt(0, CountryList.length - 1)].name;
  randomMission.ETA = Date.now() + (2 * 60 * 60 * 1000) + (10 * 60 * 1000);

  console.log(capabilitynames);
  if (!capabilityCheck(parseInt(tier, 10), capabilitynames))
    dispatch(logMissionsWindow, {message: 'Upgrade your capability enhancement for higher tier missions.'});
  else if (!maxMissionsCheck(missions.size, capabilitynames))
    dispatch(logMissionsWindow, {message: 'Missions limit reached, pass on some missions to accept new ones.'});
  else {
    dispatch(acceptMission, {mission: randomMission});
    dispatch(logMissionsWindow, {message: 'New mission has been accepted.'});
  }
}

export function bookMissionPrice(tier) {
  const missionPrice = gameCursor(['globals', 'constants', 'missionsPriceList', JSON.stringify(tier)]);

  dispatch(bookMissionPrice, {message: missionPrice});
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

export function clearMissionAcceptFields() {
  dispatch(clearMissionAcceptFields, {});
}

export function hireAgent(specialist, rank) {
  const agent = Agent(specialist, rank);
  const leadershipNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'leadership').map(enh => enh.name);
  const capabilityNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'capability').map(enh => enh.name);
  const totalAgents = jsonapiCursor(['agents']).size + jsonapiCursor(['activemission', 'agentsonmission']).size + (checkArmory() ? 1 : 0);

  const agentPriceList = gameCursor(['globals', 'constants', 'agentsPriceList']).toJS();
  const agentPrice = agentPriceList[rank];
  const gameCash = jsonapiCursor(['gameCash']);

  if (agentPrice > gameCash)
    dispatch(logAgentsWindow, {message: 'Agent is too expensive for us, at the moment.'});
  else if (!maxAgentsCheck(totalAgents, capabilityNames))
    dispatch(logAgentsWindow, {message: 'Max agents reached already. Dismiss an agent if you want to hire new one.'});
  else if (!leadershipCheck(rank - 1, leadershipNames))
    dispatch(logAgentsWindow, {message: 'Upgrade leadership facility to recruit and train agents of higher ranks.'});
  else {
    dispatch(hireAgent, {agent, agentPrice});
    dispatch(logAgentsWindow, {message: 'New agent recruited.'});
  }
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

export function saveAgent(agent) {
  const enhancements = jsonapiCursor(['enhancements']);
  const enhancementnames = enhancements.filter(enh => enh.type === 'operationsscope').map(enh => enh.name);
  if (enhancementnames.indexOf(`We Got the Power`) === -1)
    dispatch(logAgentsWindow, `Buy enhancement 'We Got the Power first.'`);
  else {
    dispatch(saveAgent, {agent});
    dispatch(logAgentsWindow, `Agent ` + agent.get('name') + ` should be freed by next Prison Break mission.`);
  }
}

export function showTip(destination) {
  dispatch(showTip, {destination});
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
  buyEnhancement,
  buyStatus,
  changeMissionOption,
  changeOption,
  clearAgentHireFields,
  clearMissionAcceptFields,
  hireAgent,
  log,
  logAgentsWindow,
  logMissionsWindow,
  pointerChange,
  refreshStandings,
  saveAgent,
  showTip,
  updateFormField,
  upgradeEnhancement
});
