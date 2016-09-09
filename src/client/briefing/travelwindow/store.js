import {register} from '../../dispatcher';
import * as travelActions from './actions';
import {jsonapiCursor} from '../../state';
import getRandomInt from '../../lib/getrandomint';

export const dispatchToken = register(({action, data}) => {

  if (action === travelActions.bookPrice)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .update('gameContacts', val => val - data.get('gameContacts'))
      .update('gameCash', val => val - data.get('gameCash'));
    });

  if (action === travelActions.changeCountry)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .setIn(['dashboard', 'countryofoperation'], data.value);
    });

  if (action === travelActions.moveProgressBarDot)
    jsonapiCursor(jsonapi => {
      return jsonapi
      .setIn(['dashboard', 'progressbar', 'index'], getRandomInt(0, 4));
    });

  if (action === travelActions.screenPlasticToggle) {
    const toggle = jsonapiCursor(['dashboard', 'screenplastic', 'toggle']);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['dashboard', 'screenplastic', 'toggle'], !toggle);
    });
  }

  if (action === travelActions.travelWindowToggle) {
    const toggle = jsonapiCursor(['dashboard', 'progressbar', 'toggle']);
    jsonapiCursor(jsonapi => {
      return jsonapi.setIn(['dashboard', 'progressbar', 'toggle'], !toggle);
    });
  }

});
