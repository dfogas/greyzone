import {dispatch} from '../dispatcher'; //
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import pickAgentForFatal from '../lib/bml/pickagentforfatal';
import maxAgentsCheck from '../lib/bml/maxagentscheck';
import obscurityMissionCheck from '../lib/bml/obscuritymissioncheck';
// import cconfig from '../client.config';
import $ from 'jquery';
import announce from '../lib/announce';
import immutable from 'immutable';
import lockr from 'lockr';

export function assignMission(agent) {
  /* pokud je agent unavený např. z předchozí mise */
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const totalmissionagents = agentontask ? agentsonmission.size + 1 : agentsonmission.size;
  const activemissionlimit = jsonapiCursor(['activemission', 'agentLimit']);

  if (totalmissionagents === activemissionlimit)
    flashBriefing('Mission agent limit already reached.');
  else if (agent.get('ETA') - Date.now() > 0)
    flashBriefing('Agent is tired.');
  else
    dispatch(assignMission, {message: agent});
}

export function bookLosses(mission) {
  dispatch(bookLosses, {mission});
}

export function checkFatalities(results) {
  /* results is probably JSObject */
  results = results.results || results || immutable.fromJS({});
  const agentfatalindex = pickAgentForFatal(jsonapiCursor(['agents']));
  if (agentfatalindex !== -1) {
    const agentfatal = jsonapiCursor(['agents']).get(agentfatalindex);
    if (results.agentKilled) {
      const storage = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`) || [];
      lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`, storage.concat([agentfatal.toJS()]));
    }
    dispatch(checkFatalities, {results, agentfatal});
  }
}

export function flashBriefing(message) {
  $('#BriefingMessage').remove();
  $('#BriefingScreen').append(`<div id='BriefingMessage'>${message}</div>`);
  $('#BriefingMessage').hide().fadeIn(400);
  $('#BriefingMessage').fadeOut(1200, () => $('#BriefingMessage').remove());
}

export function missionTextToggle() {
  dispatch(missionTextToggle, {});
}

/*finds passed mission within player's missions and removes it*/
export function passMission(mission) {
  const activemission = jsonapiCursor(['activemission']);
  const reputationloss = (-100 * mission.get('tier'));
  const inCountry = mission.get('inCountry') || 'US';
  if (mission.get('id') === activemission.get('id'))
    setDefaultAfterExpired();
  dispatch(passMission, {message: mission});
  reputationImpact(inCountry, reputationloss);
  if (mission.get('forcefail')) {
    dispatch(bookLosses, {mission});
    checkFatalities({results: mission.get('losses')});
  }
}

export function pushGameMission(mission) {
  const missions = jsonapiCursor(['missions']);
  if (!missions.find(item => item.get('id') === mission.id))
    dispatch(pushGameMission, {mission});
}

export function reputationImpact(country, impact) {
  flashBriefing(`${impact} reputation in ${country}`);
  dispatch(reputationImpact, {country, impact});
}

/*passed mission is merged to become a activemission*/
export function selectMission(mission) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const countryofoperation = jsonapiCursor(['dashboard', 'countryofoperation']);
  const countrystats = jsonapiCursor(['countrystats']);
  const events = jsonapiCursor(['events']);
  if (agentontask)
    flashBriefing('Agent is on task, move her back.');
  else if (mission && mission.get('ETA') - Date.now() <= 0) {
    passMission(mission);
    if (mission.get('forcefail')) {
      dispatch(bookLosses, {mission});
      checkFatalities({results: mission.get('losses').toJS()});
    }
  } else if (!obscurityMissionCheck(mission, countrystats, events, countryofoperation))
    flashBriefing(`Mission won't start, obscurity is not high enough.`);
  else if (!maxAgentsCheck(jsonapiCursor()) && (mission.get('rewards').keySeq().indexOf('agentRecruited') !== -1)) {
    flashBriefing(`Upgrade operations for more agents.`, 'Dashboard');
    announce(`Upgrade operations for more agents.`, 'Armory');
  } else dispatch(selectMission, {mission});
}

export function setDefaultAfterExpired() {
  dispatch(setDefaultAfterExpired, {});
}

setToString('briefing', {
  assignMission,
  bookLosses,
  checkFatalities,
  flashBriefing,
  missionTextToggle,
  passMission,
  pushGameMission,
  reputationImpact,
  selectMission,
  setDefaultAfterExpired
});
