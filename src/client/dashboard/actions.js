/* Dashboard Actions */
import Promise from 'bluebird';
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import immutable from 'immutable';
import cconfig from '../client.config';
import MissionsList from '../../server/lib/greyzone/missions.list';
import CountryList from '../../server/lib/greyzone/country.list';
import EnhancementList from '../../server/lib/greyzone/enhancement.list';
import StatusesList from '../../server/lib/greyzone/statuses.list';

import {gameCursor} from '../state';
import {jsonapiCursor} from '../state';
import {msg} from '../intl/store';
import allAgents from '../lib/allagents';
import capabilityCheck from '../lib/capabilitycheck';
import checkArmory from '../lib/checkarmory';
import leadershipCheck from '../lib/leadershipcheck';
import maxAgentsCheck from '../lib/maxagentscheck';
import maxMissionsCheck from '../lib/maxmissionscheck';
import missionAccept from '../lib/missionaccept';
import noDoubleAgents from '../lib/nodoubleagents';
import getRandomInt from '../lib/getrandomint';
import xmissioncheck from '../lib/xmissioncheck';
import $ from 'jquery';

/* Number, String, String, Object */
export function acceptMission(tier, focus, country, options) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const mission = missionAccept(tier, focus, country, options, enhancements, CountryList, MissionsList);
  const missions = jsonapiCursor(['missions']);
  const capabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);

  // const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'missions']);
  // const storage = typeof storagejson === 'number' ? [] : storagejson ? JSON.parse(storagejson) : [];

  if (!capabilityCheck(parseInt(tier, 10), capabilitynames))
    dispatch(logMissionsWindow, {message: 'Upgrade your capability enhancement for higher tier missions.'});
  else if (!maxMissionsCheck(missions.size, capabilitynames))
    dispatch(logMissionsWindow, {message: 'Missions limit reached, pass on some missions to accept new ones.'});
  else {
    dispatch(acceptMission, {mission});
    flashDashboard(`New mission!`);
  }
}

export function agentRecruitMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'agent', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Agent Mission`);
  dispatch(acceptMission, {mission});
}

export function badEndDiscovered() {
  dispatch(badEndDiscovered, {});
}

export function badEndKilled() {
  dispatch(badEndKilled, {});
}

export function badEndLeftInPrison() {
  dispatch(badEndLeftInPrison, {});
}

export function badEndRich() {
  dispatch(badEndRich, {});
}

export function bankRobberyMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'bank', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  dispatch(acceptMission, {mission});
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

export function buyEnhancement(enhancement) {
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const enhancementcapabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);
  if (enhancementcapabilitynames.indexOf('Good Label') === -1 && enhancement.get('type') === 'operationsscope')
    dispatch(log, {message: 'You need to upgrade operation to Good Label, before enhancing your operations scope.'});
  else
    dispatch(buyEnhancement, {enhancement});
}

export function buyStatus(status) {
  const statusesall = gameCursor(['globals', 'statuses']);
  const alltieritems = statusesall.filter(item => item.get('tier') === status.get('tier'));
  const statuses = jsonapiCursor(['statuses']);
  const tieritems = statuses.filter(item => item.get('tier') === status.get('tier'));

  if (jsonapiCursor(['gameCash']) >= status.getIn(['price', 'cash']) && jsonapiCursor(['gameContacts']) >= status.getIn(['price', 'contacts'])) {
    dispatch(buyStatus, {status});
    if (tieritems.size + 1 === alltieritems.size) {
      $('#StatusesWindow').append(msg('dashboard.statuses.tier' + status.get('tier')));
      $('#StatusesTierComplete').append(`<button>Ok</button>`);
      $('#StatusesTierComplete button').click(() => $('#StatusesTierComplete').remove());
    }
  }
}

export function cashFocusMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'cash', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Cash Mission!`);
  dispatch(acceptMission, {mission});
}

export function changeMissionOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  dispatch(changeMissionOption, promise);
}

export function clearAgentHireFields() {
  dispatch(clearAgentHireFields, {});
}

export function clearMissionAcceptFields() {
  dispatch(clearMissionAcceptFields, {});
}

export function contactsFocusMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'contacts', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Contacts Mission!`);
  dispatch(acceptMission, {mission});
}

export function dashboardIntroToggle() {
  dispatch(dashboardIntroToggle, {});
}

export function destroyEvidenceMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'evidence', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Destroy Evidence Mission!`);
  dispatch(acceptMission, {mission});
}

export function dismissAgent(agent) {
  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'agents', 'leftinprison']);
  const storage = storagejson ? JSON.parse(storagejson) : [];
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const revengemission = missionAccept(operationstier, 'rattedout', 'random', {}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  localStorage.setItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'agents', 'leftinprison'], JSON.stringify(storage.concat([agent.toJS()])));
  dispatch(dismissAgent, {agent});
  if (agent.get('loyalty') !== 'loyal') {
    flashDashboard(`I will speak!`);
    dispatch(acceptMission, {mission: revengemission});
  }
}

export function displayGameEndStatistics() {
  // TODO: calls to localStorage and passes results to store
  const userId = jsonapiCursor(['userId']);
  const name = jsonapiCursor(['name']);

  const jsonmissions = localStorage.getItem(['ghoststruggle', userId, name, 'missions']);
  const missions = jsonmissions ? JSON.parse(jsonmissions) : [];
  const jsonagents = localStorage.getItem(['ghoststruggle', userId, name, 'agents', 'all']);
  const agentsall = jsonagents ? JSON.parse(jsonagents) : [];
  const jsonagentsleft = localStorage.getItem(['ghoststruggle', userId, name, 'agents', 'leftinprison']);
  const agentsleft = jsonagentsleft ? JSON.parse(jsonagentsleft) : [];
  const jsonagentskilled = localStorage.getItem(['ghoststruggle', userId, name, 'agents', 'killed']);
  const agentskilled = jsonagentskilled ? JSON.parse(jsonagentskilled) : [];
  dispatch(displayGameEndStatistics, {agentsall, agentsleft, agentskilled, missions});
}

export function facilityUpgradeDialog(enhancement) {
  dispatch(facilityUpgradeDialog, {enhancement});
}

export function facilityUpgradeDialogClose(enhancement) {
  dispatch(facilityUpgradeDialogClose, {enhancement});
}

export function flashDashboard(message) {
  $('#DashboardScreen').append(`<div id='DashboardMessage'>${message}</div>`);
  $('#DashboardMessage').hide().fadeIn(400);
  $('#DashboardMessage').fadeOut(1200, () => $('#DashboardMessage').remove());
}

export function hireAgent(specialist, rank) {
  const self = jsonapiCursor(['self']);
  const agents = allAgents(jsonapiCursor()).indexOf(self) !== -1 ? allAgents(jsonapiCursor()).push(self) : allAgents(jsonapiCursor());
  const agent = noDoubleAgents(agents.toJS(), rank, specialist);
  const leadershipNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'leadership').map(enh => enh.name);
  const capabilityNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'capability').map(enh => enh.name);
  const totalAgents = jsonapiCursor(['agents']).size + jsonapiCursor(['activemission', 'agentsonmission']).size + (checkArmory() ? 1 : 0);

  const agentPriceList = gameCursor(['globals', 'constants', 'agentsPriceList']).toJS();
  const agentPrice = agentPriceList[rank];
  const gameCash = jsonapiCursor(['gameCash']);

  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'agents', 'all']);
  const storage = typeof storagejson === 'number' ? [] : storagejson ? JSON.parse(storagejson) : [];

  if (agentPrice > gameCash)
    dispatch(logAgentsWindow, {message: 'Agent is too expensive for us, at the moment.'});
  else if (!maxAgentsCheck(totalAgents, capabilityNames))
    dispatch(logAgentsWindow, {message: 'Max agents reached already. Dismiss an agent if you want to hire new one or upgrade operations if possible.'});
  else if (!leadershipCheck(rank - 1, leadershipNames))
    dispatch(logAgentsWindow, {message: 'Upgrade leadership facility to recruit and train agents of higher ranks.'});
  else {
    localStorage.setItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'agents', 'all'], JSON.stringify(storage.concat([agent])));
    dispatch(hireAgent, {agent, agentPrice});
    dispatch(logAgentsWindow, {message: 'New agent recruited.'});
  }
}

export function goodEndRich() {
  dispatch(goodEndRich, {});
}

export function innerCircleMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'innercircle', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Inner Circle Mission`);
  dispatch(acceptMission, {mission});
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

export function obscurityFocusMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'obscurity', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Obscurity Mission!`);
  dispatch(acceptMission, {mission});
}

export function oldDebtMission() {
  const operationstier = getRandomInt(3, 5);
  const mission = missionAccept(operationstier, 'olddebt', 'random', {}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Old Debt Mission!`);
  dispatch(acceptMission, {mission});
}

export function operationsUpgradeDialogToggle() {
  dispatch(operationsUpgradeDialogToggle, {});
}

export function playerDoesNotGoOnMissions() {
  dispatch(playerDoesNotGoOnMissions, {});
}

export function playerGoesOnMissions() {
  dispatch(playerGoesOnMissions, {});
}

export function pointerChange(whereto) {
  dispatch(pointerChange, {message: whereto});
}

export function prisonBreakMission() {
  const operationstier = getRandomInt(3, 5);
  const mission = missionAccept(operationstier, 'prison', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New PrisonBreak Mission!`);
  dispatch(acceptMission, {mission});
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

export function reputationFocusMission() {
  const operationstier = jsonapiCursor(['enhancements']).filter(enh => enh.get('type') === 'capability').size;
  const mission = missionAccept(operationstier, 'reputation', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  flashDashboard(`New Reputation Mission!`);
  dispatch(acceptMission, {mission});
}

export function retireGame() {
  if (jsonapiCursor(['statuses']).size > 10 && jsonapiCursor(['countrystats']).toJS().reduce((prev, curr) => {return prev + curr.obscurity; }, 0) < 9)
      dispatch(badEndRich, {});
  else if (jsonapiCursor(['statuses']).size > 11)
    dispatch(goodEndRich, {});
  else
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

export function selectAgent(agent) {
  dispatch(selectAgent, {agent});
}

export function selectAgentOnDisplay(agent) {
  dispatch(selectAgentOnDisplay, {agent});
}

export function silenceWitnessMission() {
  const operationstier = getRandomInt(3, 5);
  const mission = missionAccept(operationstier, 'killrat', 'random', {avoidfatals: false}, jsonapiCursor(['enhancements']).toJS(), CountryList, MissionsList);

  dispatch(acceptMission, {mission});
}

export function statusesIntroToggle() {
  dispatch(statusesIntroToggle, {});
}

export function statusTierSelect(tier) {
  dispatch(statusTierSelect, {tier});
}

export function trainingUpgradeDialogToggle() {
  dispatch(trainingUpgradeDialogToggle, {});
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
  badEndDiscovered,
  badEndKilled,
  badEndLeftInPrison,
  badEndRich,
  bankRobberyMission,
  bookMissionPrice,
  bookPrisonBreakMissionPrice,
  buyEnhancement,
  buyStatus,
  cashFocusMission,
  contactsFocusMission,
  changeMissionOption,
  clearAgentHireFields,
  clearMissionAcceptFields,
  dashboardIntroToggle,
  destroyEvidenceMission,
  dismissAgent,
  displayGameEndStatistics,
  facilityUpgradeDialog,
  facilityUpgradeDialogClose,
  flashDashboard,
  goodEndRich,
  hireAgent,
  log,
  logAgentsWindow,
  logMissionsWindow,
  obscurityFocusMission,
  oldDebtMission,
  operationsUpgradeDialogToggle,
  playerDoesNotGoOnMissions,
  playerGoesOnMissions,
  pointerChange,
  refreshStandings,
  reputationFocusMission,
  retireGame,
  sanitizeAgents,
  sanitizeMissions,
  saveAgent,
  selectAgent,
  selectAgentOnDisplay,
  statusesIntroToggle,
  statusTierSelect,
  trainingUpgradeDialogToggle,
  updateFormField,
  upgradeEnhancement
});
