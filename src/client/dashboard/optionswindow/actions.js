import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';
import hashString from '../../lib/hashstring';
import immutable from 'immutable';
// import cconfig from '../../client.config';
import $ from 'jquery';

export function changeOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  // console.log(name); //
  if (name === 'multiplayer')
    dashboardAnnounce(`Multiplayer is not yet implemented. Due to smoothing out interactions
      with other players it will not feature game saves.`);
  else
    dispatch(changeOption, promise);
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

export function loadGame(game) {
  const storagejson = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game]);
  const storage = storagejson ? JSON.parse(storagejson) : null;
  const gamehash = localStorage.getItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game, 'hash']);
  if (storage && hashString(storagejson) === Number(gamehash)) {
    dispatch(loadGame, storage);
    $('#OptionsWindow').append('<div id=\'LoadGameMessage\'>Game has been loaded.</div>');
    $('#LoadGameMessage').hide(3000, () => $('#LoadGameMessage').remove());
  } else {
    $('#OptionsWindow').append('<div id=\'LoadGameMessage\'>Hashes don\'t equal. You may need to log out.</div>');
    $('#LoadGameMessage').hide(3000, () => $('#LoadGameMessage').remove());
  }
}

export function sanitizeAgents() {
  dispatch(sanitizeAgents, {});
}

export function sanitizeMissions() {
  dispatch(sanitizeMissions, {});
}

export function saveGame(jsonapi, game) {
  localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game], JSON.stringify(jsonapi.toJS()));
  localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game, 'hash'], hashString(JSON.stringify(jsonapi.toJS())));
  $('#OptionsWindow').append('<div id=\'SaveGameMessage\'>Game has been saved.</div>');
  $('#SaveGameMessage').hide(3000, () => $('#SaveGameMessage').remove());
}

export function startNewGame(jsonapi) {
  if (!jsonapi.get('paying'))
    dispatch(startNewGame, jsonapi.set('paying', immutable.fromJS({base: false, collector: false, revenge: false})));
  else
    dispatch(startNewGame, jsonapi);
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
