/* Dumb */
import './armory.screen.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import $ from 'jquery';

import AgentEquipContent from './agentequipcontent.react';

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
    const {game, jsonapi} = this.props;

    return (
      <div id='ArmoryScreen' >
        <div id='ArmoryScreenLabel'>{msg('armory.screen.label')}</div>
        <AgentEquipContent
          game={game}
          jsonapi={jsonapi}
          />
      </div>
    );
  }
}

ArmoryScreen.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default ArmoryScreen;
