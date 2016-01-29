/*
  Dumb Component`
  this component is intended to display mission ETA, which for the purposes
  of game counts how much has the player left in order to complete the mission
*/
import * as missionActions from '../mission/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

class MissionClock extends Component {
  render() {
    const {mission} = this.props;
    const ETAtime = mission.get('ETA') - Date.now() > 0 ? ETA - Date.now() : 0;
    // if (!ETAtime)
    //   missionActions.passOnMission(mission);
    return (
      <div className='mission-eta-clock'>
        {ETAtime &&
          (ETAtime / 60*60*1000) + ':' (ETAtime % (60*60*1000) / 60*1000)}
      </div>
    );
  }
}



export default MissionClock;
