import './armoryscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import $ from 'jquery';

import AgentEquipContent from './agentequipcontent.react';
import ArmoryToBriefing from '../navs/armorytobriefing.react';

class ArmoryScreen extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  showHelpMessage(e) {
    if (e.keyCode === 72 && $('#ArmoryTutorial').html())
      $('#ArmoryTutorial').remove();
    else if (e.keyCode === 72)
      $('#ArmoryScreen').append(msg('tutorial.armoryScreen'));
  }

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
