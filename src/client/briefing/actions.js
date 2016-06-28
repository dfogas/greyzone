import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import pickAgentForFatal from '../lib/pickagentforfatal';
import obscurityMissionCheck from '../lib/obscuritymissioncheck';
import $ from 'jquery';

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
  /* results is JSObject */
  results = results.results || results || immutable.fromJS({});
  const agentfatalindex = pickAgentForFatal(jsonapiCursor(['agents']));
  if (agentfatalindex !== -1) {
    const agentfatal = jsonapiCursor(['agents']).get(agentfatalindex);
    if (results.agentKilled) {
      const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name'], 'agents', 'killed')]);
      const storage = storagejson ? JSON.parse(storagejson) : [];
      localStorage.setItem(['ghoststruggle', jsonapiCursor(['userId']), jsonapiCursor(['name'], 'agents', 'killed')], JSON.stringify(storage.concat([agentfatal.toJS()])));
    }
    dispatch(checkFatalities, {results, agentfatal});
  }
}

export function flashBriefing(message) {
  $('#BriefingScreen').append(`<div id='BriefingMessage'>${message}</div>`);
  $('#BriefingMessage').hide().fadeIn(400);
  $('#BriefingMessage').fadeOut(1200, () => $('#BriefingMessage').remove());
}

export function missionTextToggle() {
  dispatch(missionTextToggle, {});
}

/*finds passed mission within player's missions and removes it*/
export function passMission(mission) {
  const reputationloss = (-100 * mission.get('tier'));
  const inCountry = mission.get('inCountry') || 'US';
  dispatch(passMission, {message: mission});
  reputationImpact(inCountry, reputationloss);
  if (mission.get('forcefail')) {
    dispatch(bookLosses, {mission});
    checkFatalities({results: mission.get('losses').toJS()});
  }
}

export function pushGameMission(mission) {
  const missions = jsonapiCursor(['missions']);
  if (missions.indexOf(immutable.fromJS(mission)) === -1)
    dispatch(pushGameMission, {mission});
}

export function reputationImpact(country, impact) {
  flashBriefing(`${impact} reputation in ${country}`);
  dispatch(reputationImpact, {country, impact});
}

/*passed mission is merged to become a activemission*/
export function selectMission(mission) {
  const activemission = jsonapiCursor(['activemission']);
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const countrystats = jsonapiCursor(['countrystats']);
  if (agentontask)
    flashBriefing('Agent is on task, move her back.');
  else if (mission && mission.get('ETA') - Date.now() <= 0) {
    dispatch(passMission, {message: mission});
    flashBriefing('Time expired.', () => {
      dispatch(setDefaultAfterExpired, {});
    });
    if (mission.get('forcefail')) {
      dispatch(bookLosses, {mission});
      checkFatalities({results: mission.get('losses').toJS()});
    }
  } else if (!obscurityMissionCheck(mission, countrystats))
    flashBriefing(`Mission won't start, obscurity is not high enough.`);
  else dispatch(selectMission, {mission});
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
