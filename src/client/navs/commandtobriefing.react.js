import './commandtobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class CommandToBriefing extends Component {
  render() {
    return (
      <Link to='briefing'>
        <div
          className='ingame-nav-curved-tail-arrow'
          id='CommandToBriefing'
          >{msg('menu.briefing')}</div>
      </Link>
    );
  }
}

export default CommandToBriefing;
