import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function addParticipant(agent) {
  dispatch(addParticipant, {agent});
}

export function clearParticipants() {
  dispatch(clearParticipants, {});
}

export function endConversation() {
  clearParticipants();
}


setToString('talk', {
  addParticipant,
  clearParticipants,
  endConversation
});
