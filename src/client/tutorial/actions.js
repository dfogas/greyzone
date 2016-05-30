import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function campaignIntroViewed(campaignname) {
  dispatch(campaignIntroViewed, {campaignname});
}

export function confirmCampaignsSelection() {
  dispatch(confirmCampaignsSelection, {});
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
  playerChoseAgentClass,
  toggleCampaign
});
