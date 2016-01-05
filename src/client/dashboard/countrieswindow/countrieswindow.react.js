import './countrieswindow.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class CountriesWindow extends Component {
  render() {
    const countrystats = this.props.countrystats.map(countrystat => {
      return (
        <tbody>
          <tr className='country-stat'>
            <td className='country-name-dashboard'>
              {countrystat.get('name')}&nbsp;
            </td>
            <td className='country-stat-reputation-dashboard'>
              {countrystat.get('reputation')}&nbsp;
            </td>
            <td className='country-stat-obscurity-dashboard'>
              {Math.round10((countrystat.get('obscurity')), -1)}&nbsp;
            </td>
          </tr>
        </tbody>
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
          {countrystats}
        </table>
      </div>
    );
  }
}

CountriesWindow.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.List)
};

export default CountriesWindow;
