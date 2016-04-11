import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';

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

export function logBriefing(message) {
  dispatch(logBriefing, message);
}

/*finds passed mission within player's missions and removes it*/
export function passMission(mission) {
  dispatch(passMission, {message: mission});
}

/*passed mission is merged to become a activemission*/
export function selectMission(mission) {
  const agentontask = jsonapiCursor(['activemission', 'mission', 'currenttask', 'agentontask']);
  if (mission && mission.get('ETA') - Date.now() <= 0)
    dispatch(passMission, {message: mission});
  else if (agentontask)
    dispatch(logBriefing, {message: 'Agent is on task, remove her from there before selecting new mission.'});
  else
    dispatch(selectMission, {message: mission});
}

setToString('briefing', {
  assignMission,
  logBriefing,
  passMission,
  selectMission
});
