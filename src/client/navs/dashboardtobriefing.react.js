import './dashboardtobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToBriefing extends Component {
  render() {
    return (
      <Link to='briefing'>
        <button
          className='ingame-nav-button'
          id='DashboardToBriefing'
          >{msg('menu.briefing')}</button>
      </Link>
    );
  }
}

export default DashboardToBriefing;
