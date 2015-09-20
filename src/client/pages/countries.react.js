import CountryInfoScreen from '../countries/countryinfoscreen.react.js';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
// import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
import {msg} from '../intl/store';

class Countries extends Component {
  render() {

    return (
      <DocumentTitle title={msg('countryinfo.title')}>
        <div className='countries-page'>
          <CountryInfoScreen {...this.props} />
        </div>
      </DocumentTitle>
    );
  }
}

Countries.propTypes = {
};

export default Countries;
