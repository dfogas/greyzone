import './missionscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import TaskTier from './tasktier/tasktier.react';
import TableTopTier from './tabletoptier/tabletoptier.react';
import AgentsTier from './agentstier/agentstier.react';
import immutable from 'immutable';

class MissionTrackingScreen extends Component {
  render() {
    const {jsonapi} = this.props;

    return (
      <div id='MissionTrackingScreen'>
        <TaskTier
          activemission={jsonapi.get('activemission')}
          />
        <TableTopTier
          activemission={jsonapi.get('activemission')}
          />
        <AgentsTier
          jsonapi={jsonapi}
          />
      </div>
    );
  }
}

MissionTrackingScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default MissionTrackingScreen;
