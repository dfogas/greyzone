import {register} from '../../dispatcher';
import {jsonapiCursor} from '../../state';

import * as scrollbarActions from './actions';

export const dispatchToken = register(({action, data}) => {

  if (action === scrollbarActions.scrollLeft)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'agentscrollbar', data.context, 'left'], data.agentscrollbar + 265);
    });

  if (action === scrollbarActions.scrollRight)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['components', 'agentscrollbar', data.context, 'left'], data.agentscrollbar - 265);
    });

  if (action === scrollbarActions.slideLeft)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['components', 'agentscrollbar', data.context, 'left'], val => val + data.shift);
    });

  if (action === scrollbarActions.slideRight)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .updateIn(['components', 'agentscrollbar', data.context, 'left'], val => val - data.shift);
    });

});
