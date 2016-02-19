import {register} from '../../dispatcher';
import {jsonapiCursor} from '../../state';

import * as scrollbarActions from './actions';

export const dispatchToken = register(({action, data}) => {

  if (action === scrollbarActions.scrollLeft)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['components', 'agentscrollbar', data.context, 'left'], val => val + 265);
    });

  if (action === scrollbarActions.scrollRight) {
    console.log(data);
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['components', 'agentscrollbar', data.context, 'left'], val => val - 265);
    });
  }

});
