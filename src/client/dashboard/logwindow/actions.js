import setToString from '../../lib/settostring';
import {dispatch} from '../../dispatcher';
import {jsonapiCursor} from '../../state';
import R from 'ramda';
import immutable from 'immutable';
import lockr from 'lockr';

export function clearLog() {
  dispatch(clearLog, {});
}

export function exportLog() {
  const logInExportFormat = JSON.stringify(jsonapiCursor(['log']).toJS());
  let link = document.getElementById('DownloadLogLink');

  link.href = window.URL.createObjectURL(new Blob([logInExportFormat], {type: 'application/json'}));
  link.click();
}

export function loadLog() {
  // console.log(lockr.get(`gs${jsonapiCursor(['_id'])}${jsonapiCursor(['name'])}log`));
  const log = immutable.fromJS(lockr.get(`gs${jsonapiCursor(['_id'])}${jsonapiCursor(['name'])}log`));
  dispatch(loadLog, {log});
}

export function saveLog() {
  // TODO: saveLog is not working properly, doesn't overwrite saves - why?
  const log = jsonapiCursor(['log']).toJS();

  const storage = lockr.get(`gs${jsonapiCursor(['_id'])}${jsonapiCursor(['name'])}log`) || [];

  lockr.set(`gs${jsonapiCursor(['_id'])}${jsonapiCursor(['name'])}log`, R.uniq(storage.concat(log)));
}

setToString('log', {
  clearLog,
  loadLog,
  saveLog
});
