import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';
import hashString from '../../lib/hashstring';
import cconfig from '../../client.config';
import $ from 'jquery';

export function changeOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  dispatch(changeOption, promise);
}

export function changePaying(name, value) {
  const api = process.env.NODE_ENV === 'production' ?
    cconfig.dnsprod :
    cconfig.dnsdevel;
  const userId = jsonapiCursor(['userId']);
  location.href = `/create?userId=${userId}&name=${name}`;
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

export function startNewGame(jsonapi) {
  dispatch(startNewGame, jsonapi);
}

export function saveGame(jsonapi, game) {
  localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game], JSON.stringify(jsonapi.toJS()));
  localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game, 'hash'], hashString(JSON.stringify(jsonapi.toJS())));
  $('#OptionsWindow').append('<div id=\'SaveGameMessage\'>Game has been saved.</div>');
  $('#SaveGameMessage').hide(3000, () => $('#SaveGameMessage').remove());
}

setToString('options', {
  changeOption,
  changePaying,
  loadGame,
  saveGame,
  startNewGame
});
