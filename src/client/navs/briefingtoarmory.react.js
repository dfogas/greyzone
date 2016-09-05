import './briefingtoarmory.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class BriefingToArmory extends Component {
  render() {
    return (
      <Link to='armory'>
        <div
          className='ingame-nav-curved-tail-arrow'
          id='BriefingToArmory'
          >{msg('menu.armory')}</div>
      </Link>
    );
  }
}

export default BriefingToArmory;
