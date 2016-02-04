/*
  Dumb Component`
  this component is intended to display mission ETA, which for the purposes
  of game counts how much has the player left in order to complete the mission
*/
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class MissionClock extends Component {
  render() {
    const {mission} = this.props;
    const ETAtime = (mission.get('ETA') - new Date().getTime() > 0) ? (mission.get('ETA') - new Date().getTime()) : 0;
    const hours = Math.floor(ETAtime / (60 * 60 * 1000));
    const minutes = Math.floor((ETAtime % (60 * 60 * 1000) / (60 * 1000)));
    return (
      <div className='mission-eta-clock'>
        {ETAtime === 0 ? 'Expired' :
          hours + ':' + Math.floor(minutes / 10) + '' + (minutes % 10)}
      </div>
    );
  }
}

MissionClock.propTypes = {
  mission: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionClock;
