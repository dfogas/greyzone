import './command.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {Link} from 'react-router';
import {msg} from '../intl/store';

import MainScreen from './mainscreen.react';
import CommandToDashboard from '../navs/commandtodashboard.react.js';
import CommandToBriefing from '../navs/commandtobriefing.react.js';

class CommandCenterScreen extends Component {

  render() {
    const {jsonapi, viewer} = this.props;
    const isLoggedIn = !!viewer;

    return (
      <div id='CommandCenterScreen'>
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
        <MainScreen
          jsonapi = {jsonapi}
          />
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
