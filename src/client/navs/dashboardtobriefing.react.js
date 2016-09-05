import './dashboardtobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import $ from 'jquery';

class DashboardToBriefing extends Component {
  hightlight() {
    $(React.findDOMNode(this)).css({color: 'teal'});
  }

  render() {
    return (
      <Link to='briefing'>
        <div
          className='ingame-nav-curved-tail-arrow'
          id='DashboardToBriefing'
          onMouseOver={this.hightlight.bind(this)}
          >{msg('menu.briefing')}</div>
      </Link>
    );
  }
}

export default DashboardToBriefing;
