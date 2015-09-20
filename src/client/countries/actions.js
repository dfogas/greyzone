import setToString from '../lib/settostring';
import {dispatch} from '../dispatcher';

// update country infocard with data provided as second argument
// export function addCountry(missionname) {
//   dispatch(addCountry, {message: missionname});
// }

export function updateCountry(countryname) {
  let country = {name: countryname + '-Africa', reputation: 50, obscurity: 1.1};

  dispatch(updateCountry, country);
}

setToString('countries', {
  // addCountry,
  updateCountry
});
