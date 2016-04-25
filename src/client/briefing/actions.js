import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';

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

export function checkFatalities(mission) {
  dispatch(checkFatalities, {mission});
}

export function logBriefing(message) {
  dispatch(logBriefing, message);
}

/*finds passed mission within player's missions and removes it*/
export function passMission(mission) {
  dispatch(passMission, {message: mission});
  if (mission.get('forcefail')) {
    dispatch(bookLosses, {mission});
    dispatch(checkFatalities, {mission});
  }
}

export function pushGameMission(mission) {
  const missions = jsonapiCursor(['missions']);
  if (missions.indexOf(immutable.fromJS(mission)) === -1)
    dispatch(pushGameMission, {mission});
}

/*passed mission is merged to become a activemission*/
export function selectMission(mission) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  if (agentontask)
    dispatch(logBriefing, {message: 'Agent is on task, remove her from there before selecting new mission.'});
  else if (mission && mission.get('ETA') - Date.now() <= 0) {
    dispatch(passMission, {message: mission});
    dispatch(setDefaultAfterExpired, {});
    if (mission.get('forcefail')) {
      dispatch(bookLosses, {mission});
      dispatch(checkFatalities, {mission});
    }
  }
  else dispatch(selectMission, {message: mission});
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
