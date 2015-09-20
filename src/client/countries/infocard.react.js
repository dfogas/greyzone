import * as actions from './actions';
import Component from '../components/component.react';
import React from 'react';
import Thumbnail from './thumbnail.react';
import immutable from 'immutable';
import InfoCardCounter from './infocardcounter.react';
import {msg} from '../intl/store';

import uuid from '../lib/guid';

class InfoCard extends Component {
  getCountryName() {
    return this.props.country.get('name');
  }

  handleTestButtonClick(e) {
    e.preventDefault();
    var countryname = this.getCountryName();
    return actions.updateCountry(countryname);
  }

  render() {
    const {country, pendingActions} = this.props;
    const key = uuid();

    return (
      <li className='info-card' key={key} pendingActions={pendingActions}>
        <h3>{country.get('name')}</h3>
        <Thumbnail />
        <br />
        <label className='infocard-label' forName='ReputationCounter'>{msg('countryinfo.infocard.labels.reputation')}</label>
        <InfoCardCounter reputation={country.get('reputation')} />
        <br />
        <label className='infocard-label' forName='ObscurityCounter'>{msg('countryinfo.infocard.labels.obscurity')}</label>
        <InfoCardCounter obscurity={country.get('obscurity')} />
        <br />
        <InfoCardCounter activemissions={0} />
        <input className='country-test-button' onClick={(e)=>this.handleTestButtonClick(e)} type='button' value='Test reviver' />
      </li>
    );
  }
}

InfoCard.propTypes = {
  country: React.PropTypes.instanceOf(immutable.Record).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default InfoCard;
