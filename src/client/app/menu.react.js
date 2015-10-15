import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class Menu extends Component {

  render() {
    const userIsLoggedIn = !!this.props.viewer;

    return (
      <header>
        <ul>
          <li><span><FormattedHTMLMessage message={msg('menu.headerHtml')} /></span></li>&nbsp;|&nbsp;
          <li><Link to="command">Command</Link></li>&nbsp;|&nbsp;
          {userIsLoggedIn &&
            <li><Link to="armory">{msg('menu.armory')}</Link></li>}
          {userIsLoggedIn &&
            <span>&nbsp;|&nbsp;</span>}
          {userIsLoggedIn &&
            <li><Link to="briefing">{msg('menu.briefing')}</Link></li>}
          {userIsLoggedIn &&
            <span>&nbsp;|&nbsp;</span>}
          <li><Link to="dashboard">{msg('menu.dashboard')}</Link></li>
          {userIsLoggedIn &&
            <span>&nbsp;|&nbsp;</span>}
          {userIsLoggedIn &&
            <li><Link to="mission">{msg('menu.mission')}</Link></li>}
          &nbsp;|&nbsp;
          {!userIsLoggedIn &&
            <span>&nbsp;|&nbsp;</span>}
          <li><Link to="help">{msg('menu.help')}</Link></li>
        </ul>
      </header>
    );
  }

}

Menu.propTypes = {
  viewer: React.PropTypes.object
};

export default Menu;
