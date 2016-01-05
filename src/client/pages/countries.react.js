import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import CountriesScreen from '../country/countriesscreen.react.js';

class Countries extends Component {
  render() {
    return (
      <div className='countries-page'>
      </div>
    );
  }
}

Countries.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default Countries;
