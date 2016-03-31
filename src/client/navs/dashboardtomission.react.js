import './dashboardtomission.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToMission extends Component {
  render() {
    return (
      <Link to='mission'>
        <button
          className='ingame-nav-button'
          id='DashboardToMission'
          >To Mission</button>
      </Link>
    );
  }
}

export default DashboardToMission;
