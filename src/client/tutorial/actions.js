import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {gameCursor, jsonapiCursor} from '../state';
import immutable from 'immutable';
import actiondices from '../lib/bml/actiondices';
import FirstMission from '../../server/lib/greyzone/missions/tutorial/first.mission';
import Sanya from '../../server/lib/greyzone/agents/sanya.agent';
import Miyako from '../../server/lib/greyzone/agents/miyako.agent';
import Agent from '../../server/lib/greyzone/agents.generator';

export function campaignIntroViewed(campaignname) {
  dispatch(campaignIntroViewed, {campaignname});
}

export function confirmCampaignsSelection() {
  dispatch(confirmCampaignsSelection, {});
}

export function firstMissionSetup() {
  const self = jsonapiCursor(['self']);
  const EquipmentList = gameCursor(['globals', 'equipments']);
  // AY! terrible hack
  // TODO: find better way to write this
  let mission;
  if (self.get('specialist') === 'technician')
    mission = FirstMission
      .setIn(['mission', 'currenttask', 'agentontask'], self)
      .update('agentsonmission', val => val.push(immutable.fromJS(Sanya)))
      .setIn(['mission', 'currenttask', 'actiondices'], immutable.fromJS(actiondices(self, FirstMission.getIn(['tasks', 0]))))
      .setIn(['mission', 'currenttask', 'agentontask', 'equipments'], immutable.fromJS([EquipmentList.get(3), EquipmentList.get(4)]))
      .setIn(['rewards', 'character'], 'spy');
  else
    mission = FirstMission
      .setIn(['mission', 'currenttask', 'agentontask'], immutable.fromJS(Miyako))
      .update('agentsonmission', val => val.push(self.set('equipments', immutable.fromJS([EquipmentList.get(0), EquipmentList.get(6)]))))
      .setIn(['mission', 'currenttask', 'actiondices'], immutable.fromJS(actiondices(immutable.fromJS(Miyako), FirstMission.getIn(['tasks', 0]))))
      .setIn(['rewards', 'character'], self.get('specialist') === 'spy' ? 'operative' : 'spy');

  mission = mission.set('started', true).set('tier', 3);
  dispatch(firstMissionSetup, {mission});
}

export function firstMissionDone() {
  dispatch(firstMissionDone, {});
}

export function historyProgress(slideNo) {
  dispatch(historyProgress, {slideNo});
}

export function playerChoseAgentClass(agentclass) {
  const playersAgent = Agent(agentclass, 3, gameCursor(['globals', 'trainingtable']));
  dispatch(playerChoseAgentClass, {agent: immutable.fromJS(playersAgent)});
}

export function toggleCampaign(name, value) {
  dispatch(toggleCampaign, {name, value});
}

setToString('tutorial', {
  campaignIntroViewed,
  confirmCampaignsSelection,
  firstMissionDone,
  firstMissionSetup,
  historyProgress,
  playerChoseAgentClass,
  toggleCampaign
});
