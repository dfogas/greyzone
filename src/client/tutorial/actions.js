import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {gameCursor, jsonapiCursor} from '../state';
import immutable from 'immutable';
import actiondices from '../lib/bml/actiondices';
import announce from '../lib/announce';
import FirstMission from '../../server/lib/greyzone/missions/tutorial/first.mission';
import Agent from '../../server/lib/greyzone/agents.generator';

export function campaignIntroViewed(campaignname) {
  dispatch(campaignIntroViewed, {campaignname});
}

export function completeTutorial() {
  dispatch(completeTutorial, {});
}

export function confirmAvatar() {
  if (jsonapiCursor(['self', 'name']) === 'Default Self')
    announce(`Please select class for your agent`, 'Tutorial');
  else
    dispatch(confirmAvatar, {});
}

export function confirmCampaignsSelection() {
  dispatch(confirmCampaignsSelection, {});
}

export function firstMissionSetup() {
  const self = jsonapiCursor(['self']);
  const EquipmentList = gameCursor(['globals', 'equipments']);
  const partnerTechnician = Agent('technician', 3, gameCursor(['globals', 'trainingtable']));
  let mission;
  if (self.get('specialist') === 'technician')
    mission = FirstMission
      .setIn(['mission', 'currenttask', 'agentontask'], self)
      .update('agentsonmission', val => val.push(immutable.fromJS(Agent('operative', 3, gameCursor(['globals', 'trainingtable']))).set('equipments', immutable.fromJS([EquipmentList.get(0), EquipmentList.get(6)]))))
      .setIn(['mission', 'currenttask', 'actiondices'], immutable.fromJS(actiondices(self, FirstMission.getIn(['tasks', 0]))))
      .setIn(['mission', 'currenttask', 'agentontask', 'equipments'], immutable.fromJS([EquipmentList.get(3), EquipmentList.get(4)]))
      .setIn(['rewards', 'character'], 'spy');
  else
    mission = FirstMission
      .setIn(['mission', 'currenttask', 'agentontask'], immutable.fromJS(partnerTechnician))
      .update('agentsonmission', val => val.push(self.set('equipments', immutable.fromJS([EquipmentList.get(0), EquipmentList.get(6)]))))
      .setIn(['mission', 'currenttask', 'actiondices'], immutable.fromJS(actiondices(immutable.fromJS(partnerTechnician), FirstMission.getIn(['tasks', 0]))))
      .setIn(['mission', 'currenttask', 'agentontask', 'equipments'], immutable.fromJS([EquipmentList.get(3), EquipmentList.get(4)]))
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

export function setupTutorial() {
  /* because  */
  const tutorial = jsonapiCursor(['options', 'tutorial']);
  if (tutorial)
    dispatch(setupTutorial, {});
}

export function toggleCampaign(name, value) {
  dispatch(toggleCampaign, {name, value});
}

setToString('tutorial', {
  campaignIntroViewed,
  completeTutorial,
  confirmAvatar,
  confirmCampaignsSelection,
  firstMissionDone,
  firstMissionSetup,
  historyProgress,
  playerChoseAgentClass,
  setupTutorial,
  toggleCampaign
});
