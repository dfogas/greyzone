import './missiontodashboard.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class MissionToDashboard extends Component {
  render() {
    return (
      <Link to='dashboard'>
        <button
          className='ingame-nav-button'
          id='MissionToDashboardButton'
          >
          {msg('menu.dashboard')}
        </button>
      </Link>
    );
  }
}

export default MissionToDashboard;
