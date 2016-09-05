import './briefingtodashboard.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class BriefingToDashboard extends Component {
  render() {
    return (
      <Link to='dashboard'>
        <div
          className='ingame-nav-curved-tail-arrow to-right'
          id='BriefingToDashboard'
          >
          {msg('menu.dashboard')}
        </div>
      </Link>
    );
  }
}

export default BriefingToDashboard;
