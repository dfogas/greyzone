/*
  Dumb Component
*/
import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import {msg} from '../intl/store';

import NavTab from './navtab.react.js';
import Logout from '../auth/logout.react';
import LanguageSelect from './language.select.react';

class Menu extends Component {

  render() {
    const isLoggedIn = !!this.props.viewer;

    return (
      <header>
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
        <NavTab viewer={this.props.viewer}/>
        {isLoggedIn &&
          <Logout />}
        <LanguageSelect locales={this.props.locales}/>
      </header>
    );
  }

}

Menu.propTypes = {
  viewer: React.PropTypes.object
};

export default Menu;
