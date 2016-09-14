import './dashboardtointro.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';

class DashboardToIntro extends Component {
  render() {
    return (
      <Link to='help'>
        <button
          className='ingame-nav-button'
          id='DashboardToIntro'
          >GSPedia</button>
      </Link>
    );
  }
}

export default DashboardToIntro;
