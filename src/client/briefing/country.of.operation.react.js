import './country.of.operation.styl';
import * as componentsActions from '../components/actions';
import * as travelActions from './travelwindow/actions';
import announce from '../lib/announce';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import DropDown from 'react-dropdown-w-react13';

class CountryOfOperation extends Component {
  changeCountry(option) {
    const {jsonapi} = this.props;
    if (!jsonapi.get('missions').find(mission => mission.get('forcefail'))) {
      componentsActions.travelSelectionToggle();
      travelActions.changeCountry(option);
    } else {
      travelActions.changeCountry({
        label: jsonapi.getIn(['dashboard', 'countryofoperation']),
        name: 'countryofoperation',
        value: jsonapi.getIn(['dashboard', 'countryofoperation'])
      });
      announce(`There is an unresolved forced mission`, `Dashboard`);
    }
  }

  render() {
    const {game, jsonapi} = this.props;
    const countries = game.getIn(['globals', 'countries']);
    return (
      <div id='CountryOfOperation'>
        <div id='CountryOfOperationText'>Operating in {jsonapi.getIn(['dashboard', 'countryofoperation'])}</div>
        <div id='TravelToText'>Move operations to ... ?</div>
        <DropDown
          baseClassName='countryofoperation'
          name='countryofoperation'
          onChange={option => this.changeCountry(option)}
          options={countries.map(item => {
            return ({
              value: item.get('name'),
              name: 'countryofoperation',
              label: item.get('name')
            });
          }).toJS()}
          value={jsonapi.getIn(['dashboard', 'countryofoperation']) || 'Operating In ..'}
          />
      </div>
    );
  }
}

CountryOfOperation.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default CountryOfOperation;
