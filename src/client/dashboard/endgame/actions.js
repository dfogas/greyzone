import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';
import lockr from 'lockr';

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

  const missions = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`) || [];
  const agentsall = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`) || [];
  const agentsleft = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`) || [];
  const agentskilled = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`) || [];
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
