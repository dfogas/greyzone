import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
import immutable from 'immutable';
import actiondices from '../lib/actiondices';
import EquipmentList from '../../server/lib/greyzone/equipments.list';
import FirstMission from '../../server/lib/greyzone/missions/tutorial/first.mission';
import Sanya from '../../server/lib/greyzone/agents/sanya.agent';
import Miyako from '../../server/lib/greyzone/agents/miyako.agent';

export function campaignIntroViewed(campaignname) {
  dispatch(campaignIntroViewed, {campaignname});
}

export function confirmCampaignsSelection() {
  dispatch(confirmCampaignsSelection, {});
}

export function firstMissionSetup() {
  const self = jsonapiCursor(['self']);
  // AY! terrible hack
  // TODO: find better way to write this
  let mission;
  if (self.get('specialist') === 'technician')
    mission = FirstMission
      .setIn(['mission', 'currenttask', 'agentontask'], self)
      .update('agentsonmission', val => val.push(immutable.fromJS(Sanya)))
      .setIn(['mission', 'currenttask', 'actiondices'], immutable.fromJS(actiondices(self, FirstMission.getIn(['tasks', 0]))))
      .setIn(['mission', 'currenttask', 'agentontask', 'equipments'], immutable.fromJS([EquipmentList[3], EquipmentList[4]]))
      .setIn(['rewards', 'character'], 'spy');
  else
    mission = FirstMission
      .setIn(['mission', 'currenttask', 'agentontask'], immutable.fromJS(Miyako))
      .update('agentsonmission', val => val.push(self.set('equipments', immutable.fromJS([EquipmentList[0], EquipmentList[6]]))))
      .setIn(['mission', 'currenttask', 'actiondices'], immutable.fromJS(actiondices(immutable.fromJS(Miyako), FirstMission.getIn(['tasks', 0]))))
      .setIn(['rewards', 'character'], self.get('specialist') === 'spy' ? 'operative' : 'spy');

  mission = mission.set('started', true).set('tier', 3);
  dispatch(firstMissionSetup, {mission});
}

export function firstMissionDone() {
  dispatch(firstMissionDone, {});
}

export function playerChoseAgentClass(agentclass) {
  dispatch(playerChoseAgentClass, {agentclass});
}

export function toggleCampaign(name, value) {
  dispatch(toggleCampaign, {name, value});
}

setToString('tutorial', {
  campaignIntroViewed,
  confirmCampaignsSelection,
  firstMissionDone,
  firstMissionSetup,
  playerChoseAgentClass,
  toggleCampaign
});
