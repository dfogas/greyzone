import './missiontobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class MissionToBriefing extends Component {
  render() {
    return (
      <Link to='briefing'>
        <div
          className='ingame-nav-curved-tail-arrow'
          id='MissionToBriefingButton'
          >
          {msg('menu.briefing')}</div>
      </Link>
    );
  }
}

export default MissionToBriefing;
