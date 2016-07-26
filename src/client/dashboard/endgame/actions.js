import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

export function badEndDiscovered() {
  dispatch(badEndDiscovered, {});
}

export function badEndKilled() {
  dispatch(badEndKilled, {});
}

export function badEndLeftInPrison() {
  dispatch(badEndLeftInPrison, {});
}

export function badEndRich() {
  dispatch(badEndRich, {});
}

export function displayGameEndStatistics() {
  const userId = jsonapiCursor(['userId']);
  const name = jsonapiCursor(['name']);

  const jsonmissions = localStorage.getItem(['ghoststruggle', userId, name, 'missions']);
  const missions = jsonmissions ? JSON.parse(jsonmissions) : [];
  const jsonagents = localStorage.getItem(['ghoststruggle', userId, name, 'agents', 'all']);
  const agentsall = jsonagents ? JSON.parse(jsonagents) : [];
  const jsonagentsleft = localStorage.getItem(['ghoststruggle', userId, name, 'agents', 'leftinprison']);
  const agentsleft = jsonagentsleft ? JSON.parse(jsonagentsleft) : [];
  const jsonagentskilled = localStorage.getItem(['ghoststruggle', userId, name, 'agents', 'killed']);
  const agentskilled = jsonagentskilled ? JSON.parse(jsonagentskilled) : [];
  dispatch(displayGameEndStatistics, {agentsall, agentsleft, agentskilled, missions});
}

export function goodEndRich() {
  dispatch(goodEndRich, {});
}

export function retireGame() {
  if (jsonapiCursor(['statuses']).size > 10 && jsonapiCursor(['countrystats']).reduce((prev, curr) => {return prev + curr.get('obscurity'); }, 0) < 9)
    dispatch(badEndRich, {});
  else if (jsonapiCursor(['statuses']).size > 11)
    dispatch(goodEndRich, {});
  else
    dispatch(retireGame, {});
}

setToString('endgame', {
  badEndDiscovered,
  badEndKilled,
  badEndLeftInPrison,
  badEndRich,
  displayGameEndStatistics,
  goodEndRich,
  retireGame
});
