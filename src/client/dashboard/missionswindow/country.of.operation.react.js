import './country.of.operation.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import DropDown from 'react-dropdown-w-react13';

class CountryOfOperation extends Component {
  changeCountry(option) {
    //
    dashboardActions.changeCountry(option);
  }

  render() {
    const {game, jsonapi} = this.props;
    const countries = game.getIn(['globals', 'countries']);
    const countryOfOperation = jsonapi.getIn(['dashboard', 'countryofoperation']);
    const countrystats = jsonapi.get('countrystats');
    const countryOfOperationIndex = countryOfOperation ? countrystats.indexOf(countrystats.find(cs => cs.get('name') === countryOfOperation)) : 0;
    return (
      <div id='CountryOfOperation'>
        <DropDown
          baseClassName='countryofoperation'
          name='countryofoperation'
          onChange={option => this.changeCountry(option)}
          options={countries.map(item => {
            return {
              value: item.get('name'),
              name: 'countryofoperation',
              label: item.get('name')
            };
          })}
          value={jsonapi.getIn(['dashboard', 'countryofoperation']) || 'Operating In ..'}
          />
          <div className='country-obscurity-counter'>
            Obscurity {jsonapi.getIn(['countrystats', countryOfOperationIndex, 'obscurity'])}
          </div>
      </div>
    );
  }
}

CountryOfOperation.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default CountryOfOperation;
