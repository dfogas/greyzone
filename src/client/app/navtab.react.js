import './navtab.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class NavTab extends Component {
  render() {
    const {locales} = this.props;
    return (
      <div className='nav-tab'>
        <ul>
          <li><Link to='command'>{msg('menu.command')}</Link></li>
          &nbsp;|&nbsp;
          <li><Link to='armory'>{msg('menu.armory')}</Link></li>
          &nbsp;|&nbsp;
          <li><Link to='briefing'>{msg('menu.briefing')}</Link></li>
          &nbsp;|&nbsp;
          <li><Link to='dashboard'>{msg('menu.dashboard')}</Link></li>
          &nbsp;|&nbsp;
          <li><Link to='mission'>{msg('menu.mission')}</Link></li>
          &nbsp;|&nbsp;
          <li><Link to='help'>{msg('menu.help')}</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavTab;
