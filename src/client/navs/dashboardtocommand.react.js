import './dashboardtocommand.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import $ from 'jquery';

class DashboardToCommand extends Component {
  highlight() {
    $(React.findDOMNode(this)).css({color: 'teal'});
  }

  render() {
    return (
      <Link to='command'>
        <div
          className='ingame-nav-curved-tail-arrow to-right'
          id='DashboardToCommand'
          onMouseOver={this.highlight.bind(this)}
          >{msg('menu.command')}</div>
      </Link>
    );
  }
}

export default DashboardToCommand;
