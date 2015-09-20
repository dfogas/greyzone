import Component from '../components/component.react';
import React from 'react';
import ActualMissionCard from './actualmissioncard.react';
import immutable from 'immutable';

class ActiveMission extends Component {
  render() {
    const {activemission, agents} = this.props;

    return (
      <div className='active-mission'>
        <ActualMissionCard
          activemission={activemission}
          agents={agents}
          isActual={true}
          />
      </div>
    );
  }
}

ActiveMission.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List)
};

export default ActiveMission;
