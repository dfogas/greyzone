/* eslint curly: 1 */
// POC
import * as missionActions from '../mission/actions';
import {jsonapiCursor} from '../state';
import {register} from '../dispatcher';
import bookAttention from '../lib/bml/bookattention';
import bookObscurity from '../lib/bml/bookobscurity';

export const dispatchToken = register(({action, data}) => {
  const attention = jsonapiCursor(['events']).filter(gaev => gaev.get('tag') === 'attention');
  const inCountry = jsonapiCursor(['activemission', 'inCountry']);
  const indexOfCS = jsonapiCursor(['countrystats']).indexOf(jsonapiCursor(['countrystats']).find(cs => cs.get('name') === inCountry));
  const indexOfCAL = jsonapiCursor(['events']).indexOf(jsonapiCursor(['events']).find(gaev => gaev.get('tag') === 'attention' && gaev.get('country') === inCountry));

  if (action === missionActions.fail) {
    if (attention.find(gaev => gaev.get('country') === inCountry).get('level') === 'low')
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['countrystats', indexOfCS, 'obscurity'], val => bookObscurity(val, -0.1));
      });
    else if (attention.find(gaev => gaev.get('country') === inCountry).get('level') === 'medium')
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['countrystats', indexOfCS, 'obscurity'], val => bookObscurity(val, -0.2));
      });
    else if (attention.find(gaev => gaev.get('country') === inCountry).get('level') === 'high')
      jsonapiCursor(jsonapi => {
        return jsonapi
          .updateIn(['countrystats', indexOfCS, 'obscurity'], val => bookObscurity(val, -0.3));
      });
  }

  // IMPLEMENTATION of game mechanism #tbd
  if (action === missionActions.removeCompletedMission) {
    const missionCountryObscurity = jsonapiCursor(['countrystats', indexOfCS, 'obscurity']);
    const countryAL = jsonapiCursor(['events', indexOfCAL, 'level']);
    const chance = Math.random();

    // console.log(chance, bookAttention(countryAL, 'up'));
    if (missionCountryObscurity <= 1 && chance <= 0.8)
      jsonapiCursor(game => {
        return game
          .update('events', val => val.setIn([val.indexOf(val.find(gaev => gaev.get('country') === inCountry && gaev.get('tag') === 'attention')), 'level'], bookAttention(countryAL, 'up')));
      });
    else if (missionCountryObscurity <= 2 && chance <= 0.3)
      jsonapiCursor(game => {
        return game
          .update('events', val => val.setIn([val.indexOf(val.find(gaev => gaev.get('country') === inCountry && gaev.get('tag') === 'attention')), 'level'], bookAttention(countryAL, 'up')));
      });
    else if (missionCountryObscurity <= 3 && chance <= 0.11)
      jsonapiCursor(game => {
        return game
          .update('events', val => val.setIn([val.indexOf(val.find(gaev => gaev.get('country') === inCountry && gaev.get('tag') === 'attention')), 'level'], bookAttention(countryAL, 'up')));
      });
  }

});
