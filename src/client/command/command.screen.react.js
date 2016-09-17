import './command.styl';
import * as commandActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import $ from 'jquery';

import CommandContent from './command.content.react';
import CommandToDashboard from '../navs/commandtodashboard.react.js';
import CommandToBriefing from '../navs/commandtobriefing.react.js';

class CommandCenterScreen extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  showHelpMessage(e) {
    if (e.keyCode === 72 && $('#CommandTutorial').html())
      $('#CommandTutorial').remove();
    else if (e.keyCode === 72)
      $('#CommandCenterScreen').append(msg('tutorial.commandScreen'));
  }

  render() {
    const {jsonapi, viewer} = this.props;
    const isLoggedIn = !!viewer;

    return (
      <div id='CommandScreen'>
        <div id='CommandScreenLabel'>{msg('command.screen.label')}</div>
        <button id='LoadMissionsButton' onClick={(e) => commandActions.loadMissions()}>Load Missions</button>
        {!isLoggedIn &&
          <Link to='login'>
            <button className='login-button'>
              {msg('auth.form.legend.login')}
            </button>
          </Link>}
        {!isLoggedIn &&
          <Link to='signup'>
            <button className='signup-button'>
              {msg('auth.form.legend.signup')}
            </button>
          </Link>}
        {isLoggedIn &&
          <CommandToDashboard />}
        {isLoggedIn &&
          <CommandToBriefing />}
        {<CommandContent
          jsonapi = {jsonapi}
          />}
        <div id='CommandScreenMissionStatistics'>
          {`Missions done: ${jsonapi.get('missionsDone').size}`}
          {`Success: ${jsonapi.get('missionsDone').filter(mission => {
            return mission.get('result') === 'success';
          }).size}`}
          {`Fail: ${jsonapi.get('missionsDone').filter(mission => {
            return mission.get('result') === 'fail';
          }).size}`}
        </div>
        <div id='CommandEmailSupport'>
          Technical problems?! Send mail to support@ghoststruggle.com.
        </div>
      </div>
    );
  }
}

CommandCenterScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  viewer: React.PropTypes.object
};

export default CommandCenterScreen;
