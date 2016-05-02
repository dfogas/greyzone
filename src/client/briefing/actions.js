import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import pickAgentForFatal from '../lib/pickagentforfatal';
import obscurityMissionCheck from '../lib/obscuritymissioncheck';

export function assignMission(agent) {
  /* pokud je agent unavený např. z předchozí mise */
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const agentsonmission = jsonapiCursor(['activemission', 'agentsonmission']);
  const totalmissionagents = agentontask ? agentsonmission.size + 1 : agentsonmission.size;
  const activemissionlimit = jsonapiCursor(['activemission', 'agentLimit']);

  if (totalmissionagents === activemissionlimit)
    dispatch(logBriefing, {message: 'Mission agent limit already reached.'});
  else if (agent.get('ETA') - Date.now() > 0)
    dispatch(logBriefing, {message: 'Agent is tired from previous mission and can\'t be assigned to mission until later.'});
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

export function logBriefing(message) {
  dispatch(logBriefing, message);
}

/*finds passed mission within player's missions and removes it*/
export function passMission(mission) {
  dispatch(passMission, {message: mission});
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

/*passed mission is merged to become a activemission*/
export function selectMission(mission) {
  const activemission = jsonapiCursor(['activemission']);
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  const countrystats = jsonapiCursor(['countrystats']);
  if (agentontask)
    dispatch(logBriefing, {message: 'Agent is on task, remove her from there before selecting new mission.'});
  else if (mission && mission.get('ETA') - Date.now() <= 0) {
    dispatch(passMission, {message: mission});
    dispatch(setDefaultAfterExpired, {});
    if (mission.get('forcefail')) {
      dispatch(bookLosses, {mission});
      checkFatalities({results: mission.get('losses').toJS()});
    }
  }
  else {
    if (!obscurityMissionCheck(mission, countrystats))
      dispatch(logBriefing, {message: `The selected mission will not start, because either success or failure in the mission would bring obscurity in the country under 0.`});

    dispatch(selectMission, {mission});
  }
}

export function setDefaultAfterExpired() {
  dispatch(setDefaultAfterExpired, {});
}

setToString('briefing', {
  assignMission,
  bookLosses,
  checkFatalities,
  logBriefing,
  passMission,
  pushGameMission,
  selectMission,
  setDefaultAfterExpired
});
