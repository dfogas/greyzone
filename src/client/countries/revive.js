// following code is a reviver function for countries store

import Country from './country';
import {Map} from 'immutable';

export default function(value) {
  var country = value;
  console.log('country from reviver is:', country); // eslint-disable-line no-console
  return Map(value).set([0], new Country(country));
}
