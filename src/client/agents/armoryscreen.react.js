import './armoryscreen.css';
import '../equipments/equipment.css';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentEquipContent from './agentequipcontent.react';

class ArmoryScreen extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;
    const agents = jsonapi.get('agents');

    return (
      /*CONVENTION id in camelCase, className dash-separated*/
      <div id='ArmoryScreen' >
        <AgentEquipContent agents={agents} jsonapi={jsonapi} pendingActions={pendingActions} />
      </div>
    );
  }
}

ArmoryScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default ArmoryScreen;
