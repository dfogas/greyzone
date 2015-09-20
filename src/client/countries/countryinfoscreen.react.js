import './country.css';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import CountryInfoContent from './infocontent.react';
import NavBar from '../buttons/navbar.react';

class CountryInfoScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const countries = jsonapi.get('countries');

    return (
        <div id='CountryInfoScreen'>
          <NavBar placement='left' />
          <CountryInfoContent
            countries={countries}
            pendingActions={pendingActions}
          />
          <NavBar placement='right' />
        </div>
    );
  }
}

CountryInfoScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default CountryInfoScreen;
