import {Record} from 'immutable';

const CountryRecord = Record({
  name: '',
  obscurity: '',
  reputation: ''
});

export default class Country extends CountryRecord {}
