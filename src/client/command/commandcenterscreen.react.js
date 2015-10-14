import './command.css';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

import MainScreen from './mainscreen.react';

class CommandCenterScreen extends Component {

  render() {
    const isLoggedIn = !!this.props.viewer;
    return (
      <div id='CommandCenterScreen'>
        <h1 className='game-title'>MIA</h1>
        {!isLoggedIn &&
          <Link to='login'><input className='command-login' type='button' value={msg('auth.form.legend.login')} /></Link>}
        <Link to='signup'><input className='command-signup' type='button' value={msg('auth.form.legend.signup')} /></Link>
        <MainScreen />
      </div>
    );
  }
}

CommandCenterScreen.propTypes = {
  viewer: React.PropTypes.object
};

export default CommandCenterScreen;
