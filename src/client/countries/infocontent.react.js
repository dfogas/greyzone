import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import CountryList from './countrylist.react';

class CountryInfoContent extends Component {

  render() {
    const {countries, pendingActions} = this.props;

    return (
      <div id='InfoContent'>
        <CountryList
          countries={countries}
          pendingActions={pendingActions}
        />
        <br />
      </div>
    );
  }
}

CountryInfoContent.propTypes = {
  countries: React.PropTypes.instanceOf(immutable.List).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default CountryInfoContent;
