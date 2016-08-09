/* Dashboard Actions  */
import Promise from 'bluebird';
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import cconfig from '../client.config';
import {gameCursor, jsonapiCursor} from '../state';
import {msg} from '../intl/store';
import allAgents from '../lib/bml/allagents';
import capabilityCheck from '../lib/bml/capabilitycheck';
import leadershipCheck from '../lib/bml/leadershipcheck';
import maxAgentsCheck from '../lib/bml/maxagentscheck';
import maxMissionsCheck from '../lib/bml/maxmissionscheck';
import missionAccept from '../lib/bml/missionaccept';
import noDoubleAgents from '../lib/bml/nodoubleagents';
import $ from 'jquery';
import lockr from 'lockr';

const countryList = gameCursor(['globals', 'countries']);
const missionsList = gameCursor(['globals', 'missions']);

/* Number, String, String, Object */
export function acceptMission(tier, focus, country, options) {
  /* for purposes of accept mission form only i.e. debug*/
  const enhancements = jsonapiCursor(['enhancements']).toJS();
  const mission = missionAccept(focus, country, options, jsonapiCursor(), countryList, missionsList);
  const capabilitynames = enhancements.filter(enh => enh.type === 'capability').map(enh => enh.name);

  if (!capabilityCheck(parseInt(tier, 10), capabilitynames))
    flashDashboard(`Upgrade your capability enhancement for higher tier missions.`);
  else if (!maxMissionsCheck(jsonapiCursor()))
    flashDashboard('Missions limit reached, upgrade your operations.');
  else {
    dispatch(acceptMission, {mission});
    flashDashboard(`New mission!`);
  }
}

export function bookMissionPrice(tier) {
  const missionPrice = gameCursor(['globals', 'constants', 'missionsPriceList', tier + '']);

  dispatch(bookMissionPrice, {message: missionPrice});
}

export function changeCountry(option) {
  dispatch(changeCountry, option);
}

export function changeMissionOption(name, value) {
  /* probably just for mission.accept.form i.e. debug */
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

function dashboardAnnounce(message) {
  $('#DashboardAnnounce').remove();
  $('#DashboardScreen').append(`<div id='DashboardAnnounce'>${message}</div>`);
  $('#DashboardAnnounce').on('click', () => {
    $('#DashboardAnnounce').remove();
  });
}

export function dashboardIntroToggle() {
  dispatch(dashboardIntroToggle, {});
}

export function dismissAgent(agent) {
  const storage = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`) || [];
  const agents = jsonapiCursor(['agents']);
  const agentondisplayindex = agents.indexOf(agents.find(ag => ag.get('id') === agent.get('id')));

  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`, storage.concat([agent.toJS()]));
  dispatch(dismissAgent, {agent});
  dashboardAnnounce(`Agent left to rot in prison!`); // TODO: full dialog for agent's revenge taken on player
  selectAgent(agents.get(agentondisplayindex === 0 ? agents.size - 1 : agentondisplayindex - 1));
  if (agent.get('loyalty') !== 'loyal') {
    // let organizationMissions = jsonapiCursor(['missionsDone']); TODO: check in which countries did agent take part in missions
    obscurityCountriesImpact(countryList, -(agent.get('rank') / 10));
    dashboardAnnounce(`The agent has talked, obscurity in countries has been lowered.`);
  }
}

export function flashDashboard(message) {
  $('#DashboardMessage').remove();
  $('#DashboardScreen').append(`<div id='DashboardMessage'>${message}</div>`);
  $('#DashboardMessage').hide().fadeIn(400);
  $('#DashboardMessage').fadeOut(1200, () => $('#DashboardMessage').remove());
}

/* Debug */
export function hireAgent(specialist, rank) {
  const self = jsonapiCursor(['self']);
  const agents = allAgents(jsonapiCursor()).indexOf(self) !== -1 ? allAgents(jsonapiCursor()).push(self) : allAgents(jsonapiCursor());
  const agent = noDoubleAgents(agents.toJS(), rank, specialist);
  const leadershipNames = jsonapiCursor(['enhancements']).toJS().filter(enh => enh.type === 'leadership').map(enh => enh.name);

  const agentPriceList = gameCursor(['globals', 'constants', 'agentsPriceList']).toJS();
  const agentPrice = agentPriceList[rank];
  const gameCash = jsonapiCursor(['gameCash']);

  const storage = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`) || [];

  if (agentPrice > gameCash)
    flashDashboard(`Agent is too expensive for us, at the moment.`);
  else if (!maxAgentsCheck(jsonapiCursor()))
    flashDashboard(`Max agents reached already. Dismiss an agent if you want to hire new one or upgrade operations if possible.`);
  else if (!leadershipCheck(rank - 1, leadershipNames))
    flashDashboard(`Upgrade leadership facility to recruit and train agents of higher ranks.`);
  else {
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, storage.concat([agent]));
    dispatch(hireAgent, {agent, agentPrice});
    flashDashboard(`New agent recruited.`);
  }
}

export function honorAgent(agent) {
  // because initiating honor Agent is only possible from agentondisplay, unless debug mode is on
  const agents = jsonapiCursor(['agents']);
  const agentondisplayindex = agents.indexOf(agents.find(ag => ag.get('id') === agent.get('id')));
  selectAgent(agents.get(agentondisplayindex === 0 ? agents.size - 1 : agentondisplayindex - 1));
  flashDashboard(`Agent has been honored.`); // TODO: full dialog window for honoring agent
  dispatch(honorAgent, {agent});
}

export function intermediateGoalToggle() {
  dispatch(intermediateGoalToggle, {});
}

export function log(message) {
  dispatch(log, {message});
}

export function obscurityCountriesImpact(countries, impact) {
  dispatch(obscurityCountriesImpact, {countries, impact});
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

export function postponeRescue(agent) {
  flashDashboard(`Rescue postponed.`);
  dispatch(postponeRescue, {agent});
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
  const enhancementnames = enhancements.filter(enh => enh.get('type') === 'operationsscope').map(enh => enh.get('name'));
  if (enhancementnames.indexOf(`We Got the Power`) === -1)
    flashDashboard(`Buy enhancement 'We Got the Power first.'`);
  else if (jsonapiCursor(['agentBeingSaved']))
    flashDashboard(`There is already agent being saved.`);
  else {
    dispatch(saveAgent, {agent});
    flashDashboard(`Agent ` + agent.get('name') + ` should be freed by next Prison Break mission.`);
  }
}

export function selectAgent(agent) {
  dispatch(selectAgent, {agent});
}

export function selectAgentOnDisplay(agent) {
  dispatch(selectAgentOnDisplay, {agent});
}

export function updateFormField({name, value}, context) {
  // Both email and password max length is 100.
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value, context});
}

export function upgradeEnhancement(enhancement) {
  const gameCash = jsonapiCursor(['gameCash']);
  const gameContacts = jsonapiCursor(['gameContacts']);
  const price = enhancement.get('price');
  if (gameCash >= price.get('cash') && gameContacts >= price.get('contacts') && enhancement)
    dispatch(upgradeEnhancement, {enhancement});
  else if (gameCash <= price.get('cash'))
    flashDashboard('Not enough Cash.');
  else if (gameContacts <= price.get('contacts'))
    flashDashboard('Not enough Contacts.');
}

setToString('dashboard', {
  acceptMission,
  bookMissionPrice,
  changeCountry,
  changeMissionOption,
  clearAgentHireFields,
  clearMissionAcceptFields,
  dashboardIntroToggle,
  dismissAgent,
  flashDashboard,
  hireAgent,
  honorAgent,
  intermediateGoalToggle,
  log,
  obscurityCountriesImpact,
  playerDoesNotGoOnMissions,
  playerGoesOnMissions,
  pointerChange,
  postponeRescue,
  refreshStandings,
  saveAgent,
  selectAgent,
  selectAgentOnDisplay,
  updateFormField,
  upgradeEnhancement
});
