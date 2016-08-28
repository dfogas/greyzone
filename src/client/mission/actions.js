import cconfig from '../client.config';
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import allAgents from '../lib/bml/allagents';
import noDoubleAgents from '../lib/bml/nodoubleagents';
import maxAgentsCheck from '../lib/bml/maxagentscheck';
import obscurityMissionCheck from '../lib/bml/obscuritymissioncheck';
import Sound from '../lib/sound';
import $ from 'jquery';
import lockr from 'lockr';

const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;

export function agentFreed(agent) {
  dispatch(agentFreed, {agent});
}

export function agentImprisoned(agent) {
  dispatch(agentImprisoned, {agent});
}

export function agentIsBackFromTask() {
  if (jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']))
    dispatch(agentIsBackFromTask, {});
}

export function agentKilled(agent) {
  dispatch(agentKilled, {agent});
}

export function agentLockedToTask() {
  const missionStarted = jsonapiCursor(['activemission', 'started']);
  if (missionStarted)
    dispatch(agentLockedToTask, {});
}

export function agentMissionDone(agent) {
  const activemission = jsonapiCursor(['activemission']);
  const activemissionId = activemission.get('id');
  if (agent.get('missionsDone').indexOf(activemissionId) === -1)
    dispatch(agentMissionDone, {message: activemissionId, agent: agent});
}

export function agentLoyalty() {
  dispatch(agentLoyalty, {});
}

export function agentRecruited(agent) {
  dispatch(agentRecruited, agent);
}

export function agentOnTaskGetsExperienceForCompletingTask() {
  dispatch(agentOnTaskGetsExperienceForCompletingTask, {});
}

export function agentsAreBackFromMission() {
  dispatch(agentsAreBackFromMission, {});
}

export function bookCash(amount) {
  dispatch(bookCash, {amount});
}

export function bookContacts(amount) {
  dispatch(bookContacts, {amount});
}

export function bookLosses(mission) {
  // const results = mission.get('losses') ? mission.get('losses').toJS() : {};
  // const countrystats = jsonapiCursor(['countrystats']);
  // const missioncountryname = mission.get('inCountry');
  // const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));
  //TODO: přesunout sem věci ze storu
  dispatch(bookLosses, {mission});
}

export function bookObscurity(mission) {
  const results = mission.get('losses') ? mission.get('losses').toJS() : {};
  const countrystats = jsonapiCursor(['countrystats']);
  const missioncountryname = mission.get('inCountry');
  const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));

  dispatch(bookObscurity, {countryindex, obscurity: results.obscurity});
}

export function bookReputation(mission) {
  const results = mission.get('losses') ? mission.get('losses').toJS() : {};
  const countrystats = jsonapiCursor(['countrystats']);
  const missioncountryname = mission.get('inCountry');
  const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));

  dispatch(bookReputation, {countryindex, reputation: results.reputation});
}

export function bookRewards(mission) {
  const results = mission.get('rewards') ? mission.get('rewards').toJS() : {};
  // const countrystats = jsonapiCursor(['countrystats']);
  // const missioncountryname = mission.get('inCountry');
  // const countryindex = countrystats.indexOf(countrystats.find(country => country.get('name') === missioncountryname));
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agentBecominLoyal = agentsonmission.find(agent => agent.get('loyalty') === 'normal');

  if (Object.keys(results).indexOf('agentRecruited') !== -1) {
    const newagent = noDoubleAgents(allAgents(jsonapiCursor()).toJS(), mission.get('tier'), mission.getIn(['rewards', 'character']));
    const storage = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`) || [];
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, storage.concat([newagent]));
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, storage.concat([newagent]));
    agentRecruited(newagent);
  }
  if (Object.keys(results).indexOf('agentLoyal') !== -1 && agentBecominLoyal)
    agentLoyalty();

  dispatch(bookRewards, {mission});
}

export function checkFatalities(results) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  results = results || immutable.fromJS({});
  if (results.agentImprisoned)
    dispatch(agentImprisoned, {agent: agentontask});
  if (results.agentKilled) {
    const storage = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`) || [];
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`, storage.concat([agentontask.toJS()]));
    dispatch(agentKilled, {agent: agentontask});
  }
  if (results.agentFreed)
    dispatch(agentFreed, {agent: jsonapiCursor(['agentbeingsaved'])});
}

export function clearTask() {
  dispatch(clearTask, {});
}

export function clearTabletop() {
  dispatch(clearTabletop, {});
}

export function completeTask(task) {
  dispatch(completeTask, {message: task});
}

export function controldamage(mission) {
  dispatch(controldamage, {mission});
}

export function end() {
  dispatch(end, {});
}

// sets activemission result to 'fail' and its started property to false
export function fail() {
  let mySound = new Sound(url + '/assets/audio/MissionFail.ogg');
  mySound.play();
  dispatch(fail, {});
}

function flashMission(message) {
  $('#TableTop').append(`<div id=\'MissionStartMessage\'>${message}</div>`);
  $('#MissionStartMessage').hide().fadeIn(200);
  $('#MissionStartMessage').fadeOut(1000, () => $('#MissionStartMessage').remove());
}

export function log(message) {
  dispatch(log, {message}); // still enhanced literal? Probably yes.
}

/* fires after mission result is determined (success or fail)
  extracts information from active mission and stores it in List within player struct*/
export function organizationMissionDone() {
  const activemission = jsonapiCursor(['activemission']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const agentsmissionall = agentontask ? agentsonmission.concat(agentontask) : agentsonmission;
  const missionDone = {
    title: activemission.get('title'),
    timeDone: Date.now(),
    tier: activemission.get('tier'),
    result: activemission.get('result'),
    inCountry: activemission.get('inCountry'),
    agents: agentsmissionall.toJS().map(agent => agent.id)
  };
  const storage = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`) || [];

  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`, storage.concat([missionDone]));
}

/*finds activemission in missions and removes it*/
export function removeCompletedMission() {
  dispatch(removeCompletedMission, {});
}

export function setDefault() {
  dispatch(setDefault, {});
}

/*sets activemission.started  true*/
export function start() {
  const activemission = jsonapiCursor(['activemission']);
  const countrystats = jsonapiCursor(['countrystats']);

  if (!obscurityMissionCheck(activemission, countrystats))
    flashMission(`Obscurity is too low.`);
  else if (!maxAgentsCheck(jsonapiCursor()) && (activemission.get('rewards').keySeq().indexOf('agentRecruited') !== -1))
    flashMission(`Upgrade operations for more agents.`);
  else {
    flashMission(`Mission Started`);
    if (jsonapiCursor(['options', 'soundeffects'])) {
      let mySound = new Sound(url + '/assets/audio/MissionStart.ogg');
      mySound.play();
    }
    dispatch(start, {});
  }
}

/* sets activemission result to 'success'
  and its started property to false */
export function success() {
  let mySound = new Sound(url + '/assets/audio/MissionSuccess.ogg');
  mySound.play();
  dispatch(success, {});
}

// TODO: logging system for mission actions so that it can be replayed

setToString('mission', {
  agentFreed,
  agentImprisoned,
  agentIsBackFromTask,
  agentKilled,
  agentLockedToTask,
  agentLoyalty,
  agentMissionDone,
  agentOnTaskGetsExperienceForCompletingTask,
  agentRecruited,
  agentsAreBackFromMission,
  bookCash,
  bookContacts,
  bookObscurity,
  bookReputation,
  bookLosses,
  bookRewards,
  checkFatalities,
  clearTabletop,
  clearTask,
  completeTask,
  controldamage,
  end,
  fail,
  log,
  organizationMissionDone,
  removeCompletedMission,
  setDefault,
  start,
  success
});
