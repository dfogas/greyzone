import './tomission.styl';
import * as missionsActions from '../mission/actions';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class ToMission extends Component {
  redirectAndStartMission() {
    missionsActions.start();
  }

  render() {
    return (
      <Link to='dashboard'>
        <button
          className='ingame-nav-button'
          id='ToMissionNavButton'
          onClick={this.redirectAndStartMission.bind(this)}>
          {msg('menu.mission')}
        </button>
      </Link>
    );
  }
}

export default ToMission;
