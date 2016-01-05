import './missiontobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class MissionToBriefing extends Component {
  render() {
    return (
      <Link to='briefing'>
        <button
          className='ingame-nav-button'
          id='MissionToBriefingButton'
          >
          {msg('menu.briefing')}
        </button>
      </Link>
    );
  }
}

export default MissionToBriefing;
