import Component from '../components/component.react';
import React from 'react';
import CountryIcon from './countryicon.react';

class CountryBar extends Component {
  render() {
    return (
      <div id='CountryBar'>
        <CountryIcon />
        <CountryIcon />
        <CountryIcon />
        <CountryIcon />
        <CountryIcon />
      </div>
    );
  }
}

export default CountryBar;
