/* Smart Component */
import './missionswindow.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import MissionAcceptForm from './missionaccept.form.react';

class MissionsWindow extends Component {
  prisonBreakMission() {
    const {agentbeingsaved, missions} = this.props;
    const missionstitles = missions.map(mission => mission.get('title'));
    if (missionstitles.indexOf('Prison Break') === -1) {
      dashboardActions.prisonBreakMission();
      dashboardActions.bookPrisonBreakMissionPrice(agentbeingsaved);
    } else
    dashboardActions.logMissionsWindow({message: 'Prison Break mission already in place, finish it first.'});

  }

  render() {
    const {agentbeingsaved, dashboard, enhancements, missionlog, missions, missionspricelist} = this.props;
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
        {agentbeingsaved &&
          <div id="PrisonBreakMission">
            <button
              id='PrisonBreakMissionButton'
              onClick={this.prisonBreakMission.bind(this)}>Prison Break!</button>
            There is agent waiting to be rescued from prison.
            {agentbeingsaved.get('rank') * 1000 + '\u{1f4b0}'}
            {agentbeingsaved.get('rank') * 10 + '\u{1f575}'}
          </div>}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  agentbeingsaved: React.Proptypes.instanceOf(immutable.Map),
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  enhancements: React.PropTypes.instanceOf(immutable.List),
  missionlog: React.PropTypes.string,
  missions: React.PropTypes.instanceOf(immutable.List),
  missionspricelist: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionsWindow;
