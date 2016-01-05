import './armoryscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentEquipContent from './agentequipcontent.react';
import ArmoryToBriefing from '../navs/armorytobriefing.react';

class ArmoryScreen extends Component {
  render() {
    const {jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    const equipments = jsonapi.get('equipments');

    return (
      /*CONVENTION id in camelCase, className dash-separated*/
      <div id='ArmoryScreen' >
        <ArmoryToBriefing />
        <AgentEquipContent
          agents={agents}
          equipments={equipments}
          jsonapi={jsonapi}
          />
      </div>
    );
  }
}

ArmoryScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default ArmoryScreen;
