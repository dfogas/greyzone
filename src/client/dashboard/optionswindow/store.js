import {register} from '../../dispatcher';
import {jsonapiCursor} from '../../state';
import * as optionsActions from './actions';
import immutable from 'immutable';
import playerdefaults from '../../../server/lib/playerdefaults';

export const dispatchToken = register(({action, data}) => {

  if (action === optionsActions.changeOption)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['options', data.name], data.value);
    });

  if (action === optionsActions.changePaying) {
    // terrible hack follows, hai
    // TODO: fully implement paying functionality
    let paying = jsonapiCursor(['paying']) ? jsonapiCursor(['paying']).toJS() : {};
    const campaignname = data.name;
    paying[campaignname] = data.value;
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('paying', immutable.fromJS(paying));
    });
  }

  if (action === optionsActions.giveFeedback) {
    const toggle = jsonapiCursor(['dashboard', 'feedback']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'feedback'], !toggle);
    });
  }

  if (action === optionsActions.loadGame)
    jsonapiCursor(jsonapi => {
      return immutable.fromJS(data);
    });

  if (action === optionsActions.sanitizeAgents)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('agents', val => val.filter(val => val !== null).filter(val => typeof val !== 'undefined'))
        .updateIn(['activemission', 'agentsonmission'], val => val.filter(val => val !== null).filter(val => typeof val !== 'undefined'))
        .update('agents', val => val.toSet().toList());
    });

  if (action === optionsActions.sanitizeMissions)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('missions', val => val.filter(val => val !== null).filter(val => typeof val !== 'undefined'));
    });

  if (action === optionsActions.saveGame)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['savegames', data.game - 1], immutable.fromJS({missionsDoneCount: data.missionsDoneCount, savedAt: Date.now()}));
    });

  if (action === optionsActions.startNewGame)
    jsonapiCursor(jsonapi => {
      return immutable.fromJS(playerdefaults)
        .set('userId', data.get('userId'))
        .set('name', data.get('name'))
        .set('gameend', null)
        .set('paying', data.get('paying'))
        .set('savegames', data.get('savegames'));
    });

});
