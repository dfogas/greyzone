import './mission.css';
import Component from '../components/component.react';
import React from 'react';
import TaskTier from './tasktier.react';
import TableTopTier from './tabletoptier.react';
import AgentsTier from './agentstier.react';
import NavBar from '../buttons/navbar.react.js';
import immutable from 'immutable';

class MissionTrackingScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');
    const activemission = jsonapi.get('activemission');

    return (
      <div id='MissionTrackingScreen'>
        <NavBar placement='left' />
        <TaskTier isMission={true} jsonapi={jsonapi} pendingActions={pendingActions} />
        <TableTopTier activemission={activemission} pendingActions={pendingActions} />
        <AgentsTier agents={agents} jsonapi={jsonapi} pendingActions={pendingActions} />
        <NavBar placement='right' />
      </div>
    );
  }
}

MissionTrackingScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default MissionTrackingScreen;
