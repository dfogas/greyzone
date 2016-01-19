import './missionswindow.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

// import MissionToAccept from './missiontoaccept.react';
import MissionResultList from '../../mission/missioncard/results/missionresultlist.react';

class MissionsWindow extends Component {
  acceptMission(tier) {
    dashboardActions.acceptMission(tier);
    dashboardActions.bookMissionPrice(tier);
  }

  render() {
    const {enhancements, missionspricelist} = this.props;
    const capabilityEnhancements = enhancements.filter(enhancement => enhancement.get('type') === 'capability');
    return (
      <div id='MissionsWindow'>
        <button
          className='mission-accept-button'
          id='AcceptMissionTier1'
          onClick={(e) => this.acceptMission(1)}
          >Mission Tier 1
        </button>
        {capabilityEnhancements.find(enhancement => enhancement.get('name') === 'Operation II.') &&
          <button
            className='mission-accept-button'
            id='AcceptMissionTier2'
            onClick={(e) => this.acceptMission(2)}
            >Mission Tier 2
          </button>}
        {capabilityEnhancements.find(enhancement => enhancement.get('name') === 'Good Label') &&
          <button
            className='mission-accept-button'
            id='AcceptMissionTier3'
            onClick={(e) => this.acceptMission(3)}
            >Mission Tier 3
          </button>}
        {capabilityEnhancements.find(enhancement => enhancement.get('name') === 'Higher Level') &&
          <button
            className='mission-accept-button'
            id='AcceptMissionTier4'
            onClick={(e) => this.acceptMission(4)}
            >Mission Tier 4
          </button>}
        {capabilityEnhancements.find(enhancement => enhancement.get('name') === 'Top Class') &&
          <button
            className='mission-accept-button'
            id='AcceptMissionTier5'
            onClick={(e) => this.acceptMission(5)}
            >Mission Tier 5</button>
        }<hr />
        {JSON.stringify(missionspricelist.toJS())}
      </div>
    );
  }

}

MissionsWindow.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.List)
};

export default MissionsWindow;
