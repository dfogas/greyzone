import './travel.window.styl'; //
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import TravelProgressBar from './travel.progress.bar.react';

class TravelWindow extends Component {
  render() {
    const {dashboard} = this.props;
    return (
      <div id='TravelWindow'>
        <span id='TravelWindowStatus'>Moving your activities to {dashboard.get('countryofoperation')}</span>
        <TravelProgressBar dashboard={dashboard} />
      </div>
    );
  }
}

TravelWindow.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map)
};

export default TravelWindow;
