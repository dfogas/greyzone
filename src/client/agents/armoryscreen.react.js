import './armoryscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import AgentEquipContent from './agentequipcontent.react';
import ArmoryToBriefing from '../navs/armorytobriefing.react';

class ArmoryScreen extends Component {
  render() {
    const {jsonapi} = this.props;

    return (
      <div id='ArmoryScreen' >
        <div id='ArmoryScreenLabel'>{msg('armory.screen.label')}</div>
        <ArmoryToBriefing />
        <AgentEquipContent
          jsonapi={jsonapi}
          />
      </div>
    );
  }
}

ArmoryScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default ArmoryScreen;
