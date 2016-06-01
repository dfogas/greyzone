import {register} from '../../dispatcher';
import * as logActions from './actions';
import {jsonapiCursor} from '../../state';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {
  //ta ta

  if (action === logActions.clearLog)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('log', immutable.fromJS(Array(0)));
    });

  if (action === logActions.loadLog)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .set('log', data.log);
    });

});
