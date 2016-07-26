import {register} from '../../dispatcher';
import * as endGameActions from './actions';
import {jsonapiCursor} from '../../state';
import immutable from 'immutable';

export const dispatchToken = register(({action, data}) => {

  if (action === endGameActions.badEndDiscovered)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('gameend', 'discovered');
    });

  if (action === endGameActions.badEndKilled)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('gameend', 'killed');
    });

  if (action === endGameActions.badEndLeftInPrison)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('gameend', 'leftinprison');
    });

  if (action === endGameActions.badEndRich)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('gameend', 'richanddiscovered');
    });


  if (action === endGameActions.displayGameEndStatistics)
    jsonapiCursor(jsonapi => {
      return jsonapi
        .setIn(['options', 'gameend', 'statistics'], true)
        .setIn(['statistics'], immutable.fromJS(data));
    });

  if (action === endGameActions.goodEndRich)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('gameend', 'richandhidden');
    });

  if (action === endGameActions.retireGame)
    jsonapiCursor(jsonapi => {
      return jsonapi.set('gameend', 'retirement');
    });

});
