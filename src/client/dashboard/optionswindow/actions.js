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

export function giveFeedback() {
  dispatch(giveFeedback, {});
}

export function loadGame(game) {
  const savegame = lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}`);
  const gamehash = lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}hash`);
  const debug = jsonapiCursor(['options', 'debug']);

  // TODO: I am not sure why debug is here, need to remove it
  if (debug) {
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}agentsall`) || []);
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}agentskilled`) || []);
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}agentsleftinprison`) || []);
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}missions`) || []);
    dispatch(loadGame, savegame);
    updateSaveGamesInfo();
    announce(`Game has been loaded.`, `Dashboard`);
  } else if (savegame && hashString(savegame) === gamehash) {
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}agentsall`) || []);
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}agentskilled`) || []);
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}agentsleftinprison`) || []);
    lockr.set(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`, lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}missions`) || []);
    dispatch(loadGame, savegame);
    updateSaveGamesInfo();
    announce(`Game has been loaded.`, `Dashboard`);
  } else announce(`Hashes don\'t equal. You may need to log out.`, `Dashboard`);
}

export function loadMissions() {
  // loads missions from local storage passes them to store
  const missions = lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`) || [];
  /*
    const missionDone = {
      title: activemission.get('title'),
      timeDone: Date.now(),
      tier: activemission.get('tier'),
      result: activemission.get('result'),
      inCountry: activemission.get('inCountry'),
      agents: agentsmissionall.toJS().map(agent => agent.id)
    };
  */
  dispatch(loadMissions, {missions});
}

export function sanitizeAgents() {
  dispatch(sanitizeAgents, {});
}

export function sanitizeMissions() {
  dispatch(sanitizeMissions, {});
}

export function saveGame(jsonapi, game) {
  const jsonapijs = jsonapi.toJS();
  // loading missions so that no mission gets lost
  loadMissions();
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}`, jsonapijs);
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}hash`, hashString(jsonapijs));
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}agentsall`, lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsall`) || []);
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}agentskilled`, lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentskilled`) || []);
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}agentsleftinprison`, lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}agentsleftinprison`) || []);
  lockr.set(`gs${jsonapiCursor(['userId'])}_save${game}missions`, lockr.get(`gs${jsonapiCursor(['userId'])}${jsonapiCursor(['name'])}missions`) || []);
  announce(`Game has been saved.`, `Dashboard`);
  const missionsDoneCount = lockr.get(`gs${jsonapiCursor(['userId'])}_save${game}missions`).length;
  // in order to track savegames info accross different games
  const saveGameInfo = {
    missionsDoneCount,
    savedAt: Date.now()
  };
  lockr.set(`gs${jsonapiCursor(['userId'])}_savegame${game}info`, saveGameInfo);

  dispatch(saveGame, {saveGameInfo, game});
}

export function startNewGame(jsonapi) {
  if (!jsonapi.get('paying'))
    dispatch(startNewGame, jsonapi.set('paying', immutable.fromJS({base: false, collector: false, revenge: false})));
  else
    dispatch(startNewGame, jsonapi);
  eraseGameStatistics();
  eraseGameLog();
  updateSaveGamesInfo();
}

export function updateSaveGamesInfo() {
  // console.log(lockr.get(`gs${jsonapiCursor(['userId'])}_savegame1info`));//
  // console.log(`gs${jsonapiCursor(['userId'])}_savegame1info`);
  const savegames = immutable.List([
    immutable.fromJS(lockr.get(`gs${jsonapiCursor(['userId'])}_savegame1info`) || {}),
    immutable.fromJS(lockr.get(`gs${jsonapiCursor(['userId'])}_savegame2info`) || {}),
    immutable.fromJS(lockr.get(`gs${jsonapiCursor(['userId'])}_savegame3info`) || {})
  ]);
  dispatch(updateSaveGamesInfo, savegames);
}

setToString('options', {
  changeOption,
  changePaying,
  giveFeedback,
  loadGame,
  loadMissions,
  sanitizeAgents,
  sanitizeMissions,
  saveGame,
  startNewGame,
  updateSaveGamesInfo
});
