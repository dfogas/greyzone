import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {jsonapiCursor} from '../../state';

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
  if (storage)
    dispatch(loadGame, storage);
}

export function startNewGame(userId, name) {
  dispatch(startNewGame, {userId, name});
}

export function saveGame(jsonapi, game) {
  localStorage.setItem(['ghoststruggle', jsonapiCursor(['_id']), jsonapiCursor(['name']), 'save' + game], JSON.stringify(jsonapi.toJS()));
}

setToString('options', {
  changeOption,
  changePaying,
  loadGame,
  saveGame,
  startNewGame
});
