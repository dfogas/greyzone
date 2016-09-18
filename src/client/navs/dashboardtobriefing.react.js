import './dashboardtobriefing.styl'; //
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class DashboardToBriefing extends Component {
  // hightlight() {
  //   $(React.findDOMNode(this)).css({color: 'teal'});
  // }
  // onMouseOver={this.hightlight.bind(this)}

  render() {
    return (
      <Link to='briefing'>
        <div
          className='ingame-nav-curved-tail-arrow'
          id='DashboardToBriefing'
          >{msg('menu.briefing')}</div>
      </Link>
    );
  }
}

export default DashboardToBriefing;
