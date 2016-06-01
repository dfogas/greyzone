import setToString from '../../lib/settostring';
import {dispatch} from '../../dispatcher';
import {jsonapiCursor} from '../../state';
import R from 'ramda';
import immutable from 'immutable';

export function clearLog() {
  dispatch(clearLog, {});
}

export function loadLog() {
  const userId = jsonapiCursor(['_id']);
  const organization = jsonapiCursor(['name']);
  const log = immutable.fromJS(localStorage.getItem(['ghoststruggle', userId, organization, 'log']).split(','));

  dispatch(loadLog, {log});
}

export function saveLog() {
  // TODO: saveLog is not working properly, doesn't overwrite saves - why?
  const log = jsonapiCursor(['log']).toJS();
  const userId = jsonapiCursor(['_id']);
  const organization = jsonapiCursor(['name']);

  const storagejson = localStorage.getItem(['ghoststruggle', userId, organization, 'log']);
  const storage = storagejson ? storagejson.split(',') : [];

  localStorage.setItem(['ghoststruggle', userId, organization, 'log'], R.uniq(storage.concat(log)));
}

setToString('log', {
  clearLog,
  loadLog,
  saveLog
});
