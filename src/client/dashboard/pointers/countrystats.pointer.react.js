import './countrystats.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

class CountryStatsPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('countrystats');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToCountryStats'
        onClick={this.pointerChange}
        >
        CountryStats
      </div>
    );
  }
}

export default CountryStatsPointer;
