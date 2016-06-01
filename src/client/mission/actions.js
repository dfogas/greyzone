import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import allAgents from '../lib/allagents';
import maxAgentsCheck from '../lib/maxagentscheck';
import obscurityMissionCheck from '../lib/obscuritymissioncheck';

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
  dispatch(agentLockedToTask, {});
}

export function agentMissionDone(index) {
  dispatch(agentMissionDone, {message: index});
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
  and its started property to false */
export function fail() {
  dispatch(fail, {});
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

export function setDefault(mission) {
  dispatch(setDefault, {});
}

/*sets activemission.started true*/
export function start() {
  const activemission = jsonapiCursor(['activemission']);
  const countrystats = jsonapiCursor(['countrystats']);
  const enhancementnames = jsonapiCursor(['enhancements']).map(enh => enh.get('name')).toJS();

  if (!obscurityMissionCheck(activemission, countrystats))
    dispatch(logMission, {message: `Obscurity is too low.`});
  else if (!maxAgentsCheck(allAgents(jsonapiCursor()).size, enhancementnames) && Object.keys(activemission.get('rewards')).indexOf('AgentRecruited') !== -1)
    dispatch(logMission, {message: `Upgrade capbility/operations to hire more agents.`});
  else
    dispatch(start, {});
}

/* sets activemission result to 'success'
  and its started property to false */
export function success() {
  dispatch(success, {});
}

/*
  TODO: get success probability
*/

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
