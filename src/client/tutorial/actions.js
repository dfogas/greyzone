import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';

export function playerChoseAgentClass(agentclass) {
  dispatch(playerChoseAgentClass, {agentclass});
}

setToString('tutorial', {
  playerChoseAgentClass
});
