import './agent.css';
import '../equipments/equipment.css';
import Component from '../components/component.react';
import React from 'react';
import AgentEquipContent from './agentequipcontent.react';
import NavBar from '../buttons/navbar.react';
import immutable from 'immutable';

class AgentEquipScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');

    return (
      /*CONVENTION id in camelCase, className dash-separated*/
      <div id='AgentEquipScreen' >
        <NavBar placement='left' />
        <AgentEquipContent agents={agents} jsonapi={jsonapi} pendingActions={pendingActions} />
        <NavBar placement='right' />
      </div>
    );
  }
}

AgentEquipScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentEquipScreen;
