import './briefingtoarmory.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class BriefingToArmory extends Component {
  render() {
    return (
      <Link to='armory'>
        <button
          className='ingame-nav-button'
          id='BriefingToArmory'
          >{msg('menu.armory')}</button>
      </Link>
    );
  }
}

export default BriefingToArmory;
