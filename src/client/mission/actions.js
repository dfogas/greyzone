import cconfig from '../client.config';
import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
// import allAgents from '../lib/bml/allagents';
import maxAgentsCheck from '../lib/bml/maxagentscheck';
import obscurityMissionCheck from '../lib/bml/obscuritymissioncheck';
import Sound from '../lib/sound';
import $ from 'jquery';

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

export function agentOnTaskGetsExperienceForCompletingTask() {
  dispatch(agentOnTaskGetsExperienceForCompletingTask, {});
}

export function agentsAreBackFromMission() {
  dispatch(agentsAreBackFromMission, {});
}

export function bookLosses(mission) {
  dispatch(bookLosses, {mission});
}

export function bookRewards(mission) {
  dispatch(bookRewards, {mission});
}

export function checkFatalities(results) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  results = results || immutable.fromJS({});
  if (results.agentImprisoned)
    dispatch(agentImprisoned, {agent: agentontask});
  if (results.agentKilled) {
    const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name'], 'agents', 'killed')]);
    const storage = storagejson ? JSON.parse(storagejson) : [];
    localStorage.setItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name'], 'agents', 'killed')], JSON.stringify(storage.concat([agentontask.toJS()])));
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

/* sets activemission result to 'fail'
  and its started property to false  */
export function fail() {
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

export function logMission(message) {
  dispatch(logMission, {message});
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
  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'missions']);
  const storage = storagejson ? JSON.parse(storagejson) : [];

  localStorage.setItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name']), 'missions'], JSON.stringify(storage.concat([missionDone])));
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
  // const enhancementnames = jsonapiCursor(['enhancements']).map(enh => enh.get('name')).toJS();
  const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
  let mySound = new Sound(url + '/assets/audio/MissionStart.ogg');

  // console.log(!maxAgentsCheck(jsonapiCursor()));
  // console.log(activemission.get('rewards').keySeq().indexOf('agentRecruited') !== -1);

  if (!obscurityMissionCheck(activemission, countrystats))
    flashMission(`Obscurity is too low.`);
  else if (!maxAgentsCheck(jsonapiCursor()) && (activemission.get('rewards').keySeq().indexOf('agentRecruited') !== -1))
    flashMission(`Upgrade operations for more agents.`);
  else {
    flashMission(`Mission Started`);
    mySound.play();
    dispatch(start, {});
  }
}

/* sets activemission result to 'success'
  and its started property to false */
export function success() {
  dispatch(success, {});
}

setToString('mission', {
  agentFreed,
  agentImprisoned,
  agentIsBackFromTask,
  agentKilled,
  agentLockedToTask,
  agentMissionDone,
  agentOnTaskGetsExperienceForCompletingTask,
  agentsAreBackFromMission,
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
  logMission,
  organizationMissionDone,
  removeCompletedMission,
  setDefault,
  start,
  success
});
