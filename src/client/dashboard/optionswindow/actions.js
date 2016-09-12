import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';
import hashString from '../../lib/hashstring';
import immutable from 'immutable';
import announce from '../../lib/announce';
// import cconfig from '../../client.config';
import lockr from 'lockr';

export function changeOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  // if (name === 'multiplayer')
  //   announce(`Multiplayer is not yet implemented. Due to smoothing out interactions
  //     with other players it will not feature game saves.`, `Dashboard`);
  if (name === 'soundeffects') {
    announce(`Sound effects are ${value ? 'on' : 'off'}`, `Dashboard`);
    dispatch(changeOption, promise);
  } else dispatch(changeOption, promise);
}

export function changePaying(name, value) {
  // const api = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
  const userId = jsonapiCursor(['userId']);
  // console.log(name, value);
  if (value)
    announce(`This item is already bought.`, `Dashboard`);
  else
    location.href = `/create?userId=${userId}&name=${name}`;
}

function eraseGameLog() {
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}log`, []);
}

function eraseGameStatistics() {
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`, []);
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`, []);
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, []);
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`, []);
}

export function loadGame(game) {
  const savegame = lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}`);
  const gamehash = lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}hash`);
  const debug = jsonapiCursor(['options', 'debug']);

  if (debug) {
    dispatch(loadGame, savegame);
    announce(`Game has been loaded.`, `Dashboard`);
  } else if (savegame && hashString(savegame) === gamehash) {
    dispatch(loadGame, savegame);
    announce(`Game has been loaded.`, `Dashboard`);
  } else announce(`Hashes don\'t equal. You may need to log out.`, `Dashboard`);
}

export function sanitizeAgents() {
  dispatch(sanitizeAgents, {});
}

export function sanitizeMissions() {
  dispatch(sanitizeMissions, {});
}

export function saveGame(jsonapi, game) {
  const jsonapijs = jsonapi.toJS();
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}`, jsonapijs);
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}hash`, hashString(jsonapijs));
  announce(`Game has been saved.`, `Dashboard`);
  const missionsDoneCount = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`).length;

  dispatch(saveGame, {missionsDoneCount, game});
}

export function startNewGame(jsonapi) {
  if (!jsonapi.get('paying'))
    dispatch(startNewGame, jsonapi.set('paying', immutable.fromJS({base: false, collector: false, revenge: false})));
  else
    dispatch(startNewGame, jsonapi);
  eraseGameStatistics();
  eraseGameLog();
}

setToString('options', {
  changeOption,
  changePaying,
  loadGame,
  sanitizeAgents,
  sanitizeMissions,
  saveGame,
  startNewGame
});
