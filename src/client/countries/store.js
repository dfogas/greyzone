// store seems not to be a class but dispatchToken function using register method
// of dispatcher
import * as actions from './actions';
import {register} from '../dispatcher';
import Country from './country';
import {jsonapiCursor} from '../state';
// import randomInt from '../lib/getrandomint';

export const dispatchToken = register(({action, data}) => {

  // See how user store can handle auth action.
  if (action === actions.updateCountry)
    console.log('country.store says: Salut!');

  // if (action === actions.addCountry) {
  //   var countries = ['US', 'West Europe', 'Russia', 'SouthEast', 'China', 'Latin America'];
  //   var missions = jsonapiCursor(['missions']);
  //   jsonapiCursor(jsonapi => {
  //     return jsonapi.setIn(['missions', missions.indexOf(data.message), 'title'], countries[randomInt(0, countries.length)]);
  //   });
  // }
});
