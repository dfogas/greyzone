import Component from '../components/component.react';
import React from 'react';
import CommandButton from './commandbutton.react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class CommandBar extends Component {
  render() {
    return (
      <div id='CommandBar'>
        <Link to='armory'><CommandButton text={msg('command.buttons.armory')} /></Link>
        <Link to='briefing'><CommandButton text={msg('command.buttons.briefing')} /></Link>
        <Link to='countries'><CommandButton text={msg('command.buttons.countries')} /></Link>
        <Link to='contest'><CommandButton text={msg('command.buttons.contest')}/></Link>
        <Link to='dashboard'><CommandButton text={msg('command.buttons.dashboard')} /></Link>
      </div>
    );
  }
}

export default CommandBar;
