/* Dumb */
import './armory.screen.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import AgentEquipContent from './agentequipcontent.react';
import ScreenHelp from '../tutorial/screen.help.react';

class ArmoryScreen extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.helpMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.helpMessage);
  }

  helpMessage(e) {
    if (e.keyCode === 72)
      componentsActions.screenHelpToggle('armory');
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
        {jsonapi.getIn(['components', 'screenhelp', 'armory']) &&
          <ScreenHelp context='armory' />}
      </div>
    );
  }
}

ArmoryScreen.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default ArmoryScreen;
