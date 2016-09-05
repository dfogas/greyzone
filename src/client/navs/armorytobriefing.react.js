import './armorytobriefing.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';
import $ from 'jquery';

class ArmoryToBriefing extends Component {
  highlight() {
    // TODO: does not work because is set in styl
    $(React.findDOMNode(this)).css({color: 'darkblue'});
  }

  render() {
    return (
      <Link to='briefing'>
        <div
          className='ingame-nav-curved-tail-arrow to-right armory'
          id='ArmoryToBriefing'
          onMouseOver={this.highlight.bind(this)}
          style={{}}
          >{msg('menu.briefing')}</div>
      </Link>
    );
  }
}

export default ArmoryToBriefing;
