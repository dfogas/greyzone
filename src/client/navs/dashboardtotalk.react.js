import './dashboardtotalk.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToTalk extends Component {
  render() {
    return (
      <Link to='talk'>
        <button
          className='ingame-nav-button'
          id='DashboardToTalk'
          >{msg('menu.talk')}</button>
      </Link>
    );
  }
}

export default DashboardToTalk;
