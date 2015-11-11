import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class CountriesWindow extends Component {
  render() {
    const {countries} = this.props;
    const countriesstats = countries.map(country => {
      return (
        <tbody>
          <tr className='country-stat'>
            <td className='country-name-dashboard'>{country.get('name')}&nbsp;</td>
            <td className='country-stat-reputation-dashboard'>{ country.get('reputation')}&nbsp;</td>
            <td className='country-stat-obscurity-dashboard'>{country.get('obscurity')}&nbsp;</td>
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
          {countriesstats}
        </table>
      </div>
    );
  }
}

CountriesWindow.propTypes = {
  countries: React.PropTypes.instanceOf(immutable.List)
};

export default CountriesWindow;
