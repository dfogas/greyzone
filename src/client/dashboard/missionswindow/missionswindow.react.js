/* Smart Component */
import './missionswindow.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import MissionAcceptForm from './missionaccept.form.react';

class MissionsWindow extends Component {
  acceptMission(tier) {
    dashboardActions.acceptMission(tier);
    dashboardActions.bookMissionPrice(tier);
  }

  render() {
    const {dashboard, enhancements, missionlog, missions, missionspricelist} = this.props;
    // const capabilityEnhancements = enhancements.filter(enhancement => enhancement.get('type') === 'capability');
    const missionaccept = dashboard.getIn(['strategical', 'missionaccept']);

    return (
      <div id='MissionsWindow'>
        <div id='MissionsWindowMessage'>
          {missionlog}
        </div>
        <MissionAcceptForm
          enhancements={enhancements}
          missionaccept={missionaccept}
          missions={missions}
          missionspricelist={missionspricelist}
          />
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  enhancements: React.PropTypes.instanceOf(immutable.List),
  missions: React.PropTypes.instanceOf(immutable.List),
  missionspricelist: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
