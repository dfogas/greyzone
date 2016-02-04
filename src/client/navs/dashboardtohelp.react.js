import './dashboardtohelp.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToHelp extends Component {
  render() {
    return (
      <Link to='help'>
        <button
          className='ingame-nav-button'
          id='DashboardToHelp'
          >{msg('menu.introduction')}</button>
      </Link>
    );
  }
}

export default DashboardToHelp;
