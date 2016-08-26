import './dashboardtotutorial.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToTutorial extends Component {
  render() {
    return (
      <Link to='tutorial'>
        <button
          className='ingame-nav-button'
          id='DashboardToTutorial'
          >{msg('navs.dashboardtotutorial')}</button>
      </Link>
    );
  }
}

export default DashboardToTutorial;
