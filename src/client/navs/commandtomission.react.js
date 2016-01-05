import './commandtomission.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class CommandToMission extends Component {
  render() {
    return (
      <Link to='mission'>
        <button
          className='ingame-nav-button'
          id='CommandToMission'
          >{msg('menu.mission')}</button>
      </Link>
    );
  }
}

export default CommandToMission;
