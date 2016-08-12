import * as missionActions from '../mission/actions';
import {gameCursor, jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import bookObscurity from '../lib/bml/bookobscurity';

export const dispatchToken = register(({action, data}) => {
  const attention = gameCursor(['events']).find(gaev => gaev.get('tag') === 'attention');

  if (action === missionActions.success) {
    const inCountry = jsonapiCursor(['activemission', 'inCountry']);
    const indexOfCS = jsonapiCursor(['countrystats']).indexOf(jsonapiCursor(['countrystats']).find(cs => cs.get('name') === inCountry));
    if (attention.get('level') === 'medium' && inCountry === attention.get('country'))
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['countrystats', indexOfCS, 'obscurity'], val => bookObscurity(val, -0.3));
      });
  }

});
