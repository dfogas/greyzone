import './command.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {Link} from 'react-router';
import {mymsg} from '../intl/store';

import MainScreen from './mainscreen.react';

class CommandCenterScreen extends Component {

  render() {
    const {jsonapi} = this.props;
    const isLoggedIn = !!this.props.viewer;

    return (
      <div id='CommandCenterScreen'>
        {!isLoggedIn &&
          <Link to='login'>
            <input
              className='command-login'
              type='button'
              value={mymsg('auth.form.legend.login')}
              />
          </Link>}
        {!isLoggedIn &&
          <Link to='signup'>
            <input
              className='command-signup'
              type='button'
              value={mymsg('auth.form.legend.signup')}
              />
          </Link>}
        <MainScreen
          jsonapi = {jsonapi}
          />
      </div>
    );
  }
}

CommandCenterScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  viewer: React.PropTypes.object
};

export default CommandCenterScreen;
