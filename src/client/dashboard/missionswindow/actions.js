import {dispatch} from '../../dispatcher'; //
import setToString from '../../lib/settostring';
import missionAccept from '../../lib/bml/missionaccept';
import {gameCursor, jsonapiCursor} from '../../state';
import immutable from 'immutable';
import $ from 'jquery';
import announce from '../../lib/dashboardannounce';
import maxMissionsCheck from '../../lib/bml/maxmissionscheck';

const countryList = gameCursor(['globals', 'countries']);
const missionsList = gameCursor(['globals', 'missions']);

export function agentRecruitMission() {
  const mission = missionAccept('agent', 'random', {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  flashDashboard(`New Agent Mission`);
  acceptSpecifiedMission(mission);
}

export function acceptSpecifiedMission(mission) {
  if (!maxMissionsCheck(jsonapiCursor()))
    announce('Missions limit reached, upgrade your operations.', 'Dashboard');
  else {
    dispatch(acceptSpecifiedMission, {mission});
    bookMissionPrice(immutable.fromJS(mission));
  }
}

export function bankRobberyMission() {
  const mission = missionAccept('bank', 'random', {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function bookMissionPrice(mission) {
  const priceReputationChange = jsonapiCursor(['countrystats']).find(
    cs => cs.get('name') === mission.get('inCountry')
  ).get('reputation');
  const missionPrice = gameCursor([
    'globals', 'constants', 'missionsPriceList', mission.get('tier') + ''
  ]).update('cash', val => val - priceReputationChange).update('contacts', val => val - priceReputationChange / 100);

  flashDashboard(`-$${missionPrice.get('cash')} -\u{1f575}${missionPrice.get('contacts')}`);
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

export function cashFocusMission() {
  const countryofoperation = jsonapiCursor(['dashboard', 'countryofoperation']);
  const mission = missionAccept('cash', countryofoperation, {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function contactsFocusMission() {
  const countryofoperation = jsonapiCursor(['dashboard', 'countryofoperation']);
  const mission = missionAccept('contacts', countryofoperation, {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function destroyEvidenceMission() {
  const mission = missionAccept('evidence', 'random', {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

function flashDashboard(message) {
  $('#DashboardMessage').remove();
  $('#DashboardScreen').append(`<div id='DashboardMessage'>${message}</div>`);
  $('#DashboardMessage').hide().fadeIn(400);
  $('#DashboardMessage').fadeOut(1200, () => $('#DashboardMessage').remove());
}

export function innerCircleMission() {
  const mission = missionAccept('innercircle', 'random', {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function obscurityFocusMission() {
  const countryofoperation = jsonapiCursor(['dashboard', 'countryofoperation']);
  const mission = missionAccept('obscurity', countryofoperation, {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function oldDebtMission() {
  const mission = missionAccept('olddebt', 'random', {}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function prisonBreakMission(agentbeingsaved) {
  const country = jsonapiCursor(['missionsDone'])
    .filter(item => item.get('agents').indexOf(agentbeingsaved.get('id')) !== -1)
    .reduce((result, x) => { return result.get('timeDone') > x.get('timeDone') ? result : x; }, immutable.fromJS({timeDone: 0, inCountry: 'US'}))
    .get('inCountry');
  const mission = missionAccept('prison', country, {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function reputationFocusMission() {
  const countryofoperation = jsonapiCursor(['dashboard', 'countryofoperation']);
  const mission = missionAccept('reputation', countryofoperation, {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

export function silenceWitnessMission() {
  const mission = missionAccept('killrat', 'random', {avoidfatals: false}, jsonapiCursor(), countryList, missionsList);

  acceptSpecifiedMission(mission);
}

setToString('missionswindow', {
  agentRecruitMission,
  acceptSpecifiedMission,
  bankRobberyMission,
  bookMissionPrice,
  bookPrisonBreakMissionPrice,
  cashFocusMission,
  destroyEvidenceMission,
  innerCircleMission,
  oldDebtMission,
  prisonBreakMission,
  silenceWitnessMission
});
