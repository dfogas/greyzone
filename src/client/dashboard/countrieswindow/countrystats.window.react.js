import './countrystats.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../lib/guid';

class CountryStatsWindow extends Component {
  render() {
    const countrystats = this.props.countrystats.map(countrystat => {
      return (
        <tr
          className='country-stat'
          key={uuid() + 'countrystat'}
          >
          <td className='country-name-dashboard'>
            {countrystat.get('name')}&nbsp;
          </td>
          <td className='country-stat-reputation-dashboard'>
            {countrystat.get('reputation')}&nbsp;
          </td>
          <td className='country-stat-obscurity-dashboard'>
            {Math.round10((countrystat.get('obscurity')), -2)}&nbsp;
          </td>
        </tr>
      );
    });

    return (
      <div id='CountryStatsOverview'>
        <table>
          <thead>
            <tr className='country-tablehead'>
              <th>Country</th>
              <th>Reputation</th>
              <th>Obscurity</th>
            </tr>
          </thead>
          <tbody>
            {countrystats}
          </tbody>
        </table>
      </div>
    );
  }
}

CountryStatsWindow.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.List)
};

export default CountryStatsWindow;
