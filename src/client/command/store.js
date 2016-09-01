import {register} from '../dispatcher';
import {jsonapiCursor} from '../state';
import * as commandActions from './actions';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {
  if (action === commandActions.loadMissions)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('missionsDone', immutable.fromJS(data.missions));
    });
});
