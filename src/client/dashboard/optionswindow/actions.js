import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';
import hashString from '../../lib/hashstring';
import immutable from 'immutable';
// import cconfig from '../../client.config';
import $ from 'jquery';
import lockr from 'lockr';

export function changeOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  // if (name === 'multiplayer')
  //   dashboardAnnounce(`Multiplayer is not yet implemented. Due to smoothing out interactions
  //     with other players it will not feature game saves.`);
  if (name === 'soundeffects') {
    dashboardAnnounce(`Sound effects are ${value ? 'on' : 'off'}`);
    dispatch(changeOption, promise);
  } else dispatch(changeOption, promise);
}

export function changePaying(name, value) {
  // const api = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
  const userId = jsonapiCursor(['userId']);
  // console.log(name, value);
  if (value)
    dashboardAnnounce(`This item is already bought.`);
  else
    location.href = `/create?userId=${userId}&name=${name}`;
}

function dashboardAnnounce(message) {
  $('#DashboardAnnounce').remove();
  $('#DashboardScreen').append(`<div id='DashboardAnnounce'>${message}</div>`);
  $('#DashboardAnnounce').on('click', () => {
    $('#DashboardAnnounce').remove();
  });
}

function eraseGameLog() {
  lockr.set(`gs${jsonapiCursor(['_id'])}${jsonapiCursor(['name'])}log`, []);
}

function eraseGameStatistics() {
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`, []);
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`, []);
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, []);
  lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`, []);
}

export function loadGame(game) {
  const savegame = lockr.get(`gs${jsonapiCursor(['_id'])}_save${game}`);
  const gamehash = lockr.get(`gs${jsonapiCursor(['_id'])}_save${game}hash`);
  const debug = jsonapiCursor(['options', 'debug']);

  if (debug) {
    dispatch(loadGame, savegame);
    dashboardAnnounce(`Game has been loaded.`);
  } else if (savegame && hashString(savegame) === gamehash) {
    dispatch(loadGame, savegame);
    dashboardAnnounce(`Game has been loaded.`);
  } else dashboardAnnounce(`Hashes don\'t equal. You may need to log out.`);
}

export function sanitizeAgents() {
  dispatch(sanitizeAgents, {});
}

export function sanitizeMissions() {
  dispatch(sanitizeMissions, {});
}

export function saveGame(jsonapi, game) {
  const jsonapijs = jsonapi.toJS();
  lockr.set(`gs${jsonapiCursor(['_id'])}_save${game}`, jsonapijs);
  lockr.set(`gs${jsonapiCursor(['_id'])}_save${game}hash`, hashString(jsonapijs));
  dashboardAnnounce(`Game has been saved.`);
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
