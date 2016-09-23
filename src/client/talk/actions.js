import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import {jsonapiCursor} from '../state';
// import agentTalk from '../lib/bml/agenttalk';
// import {msg} from '../intl/store';

// const isNotProduction = process.env.NODE_ENV !== 'production';

export function addParticipant(agent) {
  dispatch(addParticipant, {agent});
}

export function agentDialogToggle() {
  dispatch(agentDialogToggle, {});
}

export function agentTalking(agent) {
  const goodlabel = jsonapiCursor(['enhancements']).find(enh => enh.get('name') === 'Good Label');
  const enhancements = jsonapiCursor(['enhancements']);
  const self = jsonapiCursor(['self']);
  const isNotSelf = self.get('id') !== agent.get('id');

  if (agent.get('prison'))
    agentDialogToggle();
    // isNotProduction ? alert('add prison dialog here') : console.log('work in progress');//eslint-disable-line no-alert, no-unused-expressions, no-console
  else if ((goodlabel && jsonapiCursor(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'prisonbreak')))
    dispatch(enhancementTalk, {message: 'prisonbreak'});
  else if (!isNotSelf && goodlabel && jsonapiCursor(['agents']).filter(agent => agent.get('prison')).size && !enhancements.find(enh => enh.get('missiontag') === 'silencewitness'))
    dispatch(enhancementTalk, {message: 'silencewitness'});
  else if (isNotSelf && agent.get('specialist') === 'technician' && goodlabel && agent.get('missionsDone').size > 10 && !enhancements.find(enh => enh.get('missiontag') === 'destroyevidence'))
    dispatch(enhancementTalk, {message: 'destroyevidence'});
  else if (isNotSelf && agent.get('specialist') === 'spy' && goodlabel && agent.get('loyalty') === 'loyal' && !enhancements.find(enh => enh.get('missiontag') === 'afriendininnercircle'))
    dispatch(enhancementTalk, {message: 'afriendininnercircle'});
  else if (isNotSelf && agent.get('personality') === 'SP' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'bankrobbery'))
    dispatch(enhancementTalk, {message: 'bankrobbery'});
  else if (isNotSelf && agent.get('loyalty') !== 'loyal' && goodlabel && !enhancements.find(enh => enh.get('missiontag') === 'anolddebt') && agent.get('id') !== self.get('id'))
    dispatch(enhancementTalk, {message: 'anolddebt'});
  else
    agentDialogToggle();
}

export function clearParticipants() {
  dispatch(clearParticipants, {});
}

export function endConversation() {
  clearParticipants();
}

export function enhancementTalk(message) {
  dispatch(enhancementTalk, message);
}

export function storyBoxToggle(agent) {
  dispatch(storyBoxToggle, agent);
}

setToString('talk', {
  addParticipant,
  agentDialogToggle,
  agentTalking,
  clearParticipants,
  endConversation,
  enhancementTalk,
  storyBoxToggle
});
