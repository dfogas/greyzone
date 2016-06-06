import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';
import hashString from '../../lib/hashstring';
import $ from 'jquery';

export function changeOption(name, value) {
  const promise = new Promise((resolve, reject) => {
    resolve({name, value});
  });
  dispatch(changeOption, promise);
}

export function changePaying(name, value) {
  dispatch(changePaying, {name, value});
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
    $('#OptionsWindow').append('<div id=\'LoadGameMessage\'>Hashes don\'t equal. Play for the experience and honestly.</div>');
    $('#LoadGameMessage').hide(3000, () => $('#LoadGameMessage').remove());
  }
}

export function startNewGame(userId, name) {
  dispatch(startNewGame, {userId, name});
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
