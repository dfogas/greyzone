import {register} from '../../dispatcher';
import * as statusesActions from './actions';
import {jsonapiCursor} from '../../state';

export const dispatchToken = register(({action, data}) => {

  if (action === statusesActions.buyStatus)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .update('statuses', val => val.push(data.status))
        .update('gameCash', val => val - data.status.getIn(['price', 'cash']))
        .update('gameContacts', val => val - data.status.getIn(['price', 'contacts']));
    });

  if (action === statusesActions.statusesIntroToggle) {
    const toggle = jsonapiCursor(['dashboard', 'statuses', 'intro']);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'statuses', 'intro'], !toggle);
    });
  }

  if (action === statusesActions.statusTierSelect)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'statuses', 'tierdisplayed'], data.tier);
    });

  if (action === statusesActions.tierCompleteClose)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'statuses', 'tiercomplete'], null);
    });

  if (action === statusesActions.tierCursorChange)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['dashboard', 'statuses', 'tiercomplete'], data.tier);
    });

});
