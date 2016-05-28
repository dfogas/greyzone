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

  if (action === optionsActions.changePaying)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['paying', data.name], data.value);
    });

  if (action === optionsActions.loadGame)
    jsonapiCursor(jsonapi => {
      return immutable.fromJS(data);
    });

  if (action === optionsActions.startNewGame)
    jsonapiCursor(jsonapi => {
      return immutable.fromJS(playerdefaults)
        .set('_id', data.userId)
        .set('name', data.name)
        .set('gameend', null);
    });

});
