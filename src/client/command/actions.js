import {dispatch} from '../dispatcher';
import setToString from '../lib/settostring';
import lockr from 'lockr';
import {jsonapiCursor} from '../state';

export function loadMissions() {
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

setToString('command', {
  loadMissions
});
