/* ImmutableMap(jsonapi) String(destination country) -> ImmutableMap(Price)
  based on state of game and player it returns price of travel from country to country
*/

import immutable from 'immutable';

const bookTravelling = function(jsonapi, game, dest) {
  return immutable.fromJS({gameCash: 1000, gameContacts: 10});
};

export default bookTravelling;
