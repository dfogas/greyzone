import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import Country from './country';

import InfoCard from './infocard.react';

class CountryList extends Component {
  render() {
    const {countries, pendingActions} = this.props;

    if (!countries.size)
      return (
        <span>CountryList is empty</span>
      );

    return (
      <ul id="CountryList">
        {countries.map(country => {
          return (
            <InfoCard
              country={new Country(country.toJS())}
              pendingActions={pendingActions}
            />
          );
        })}
      </ul>
    );
  }
}

CountryList.propTypes = {
  countries: React.PropTypes.instanceOf(immutable.List),
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default CountryList;
