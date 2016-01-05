import './dashboardtocommand.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToCommand extends Component {
  render() {
    return (
      <Link to='command'>
        <button
          className='ingame-nav-button'
          id='DashboardToCommand'
          >{msg('menu.command')}</button>
      </Link>
    );
  }
}

export default DashboardToCommand;
