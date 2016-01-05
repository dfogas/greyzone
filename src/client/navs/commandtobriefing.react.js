import './commandtobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class CommandToBriefing extends Component {
  render() {
    return (
      <Link to='briefing'>
        <button
          className='ingame-nav-button'
          id='CommandToBriefing'
          >{msg('menu.briefing')}</button>
      </Link>
    );
  }
}

export default CommandToBriefing;
