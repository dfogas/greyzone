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

  if (action === optionsActions.loadGame)
    jsonapiCursor(jsonapi => {
      return immutable.fromJS(data);
    });

  if (action === optionsActions.startNewGame)
    jsonapiCursor(jsonapi => {
      return immutable.fromJS(playerdefaults)
        .set('userId', data.get('userId'))
        .set('name', data.get('name'))
        .set('gameend', null)
        .set('paying', data.get('paying'));
    });

});
