import './briefingtodashboard.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class BriefingToDashboard extends Component {
  render() {
    return (
      <Link to='dashboard'>
        <button
          className='ingame-nav-button'
          id='BriefingToDashboard'
          >
          {msg('menu.dashboard')}
        </button>
      </Link>
    );
  }
}

export default BriefingToDashboard;
