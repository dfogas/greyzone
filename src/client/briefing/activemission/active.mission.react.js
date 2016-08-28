/* Dumb Component */
import './active.mission.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import ActualMissionCard from './actual.missioncard.react';

class ActiveMission extends Component {
  render() {
    const {activemission, components, game, jsonapi} = this.props;

    return (
      <div className='active-mission'>
        <ActualMissionCard
          activemission={activemission}
          components={components}
          game={game}
          isActual={true}
          jsonapi={jsonapi}
          />
      </div>
    );
  }
}

ActiveMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  components: React.PropTypes.instanceOf(immutable.Map),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default ActiveMission;
