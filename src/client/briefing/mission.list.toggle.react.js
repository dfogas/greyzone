import './mission.list.toggle.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
// import {msg} from '../intl/store';
import $ from 'jquery';

class MissionListToggle extends Component {
  dimTaskHelp() {
    $(React.findDOMNode(this)).css('box-shadow', '');
  }

  highlightTaskHelp() {
    $(React.findDOMNode(this)).css('box-shadow', '0 0 40px white, 0 0 20px white inset');
  }

  render() {
    return (
      <div
        id='MissionListToggle'
        onClick={(e) => componentsActions.missionListToggle()}
        onMouseLeave={this.dimTaskHelp.bind(this)}
        onMouseOver={this.highlightTaskHelp.bind(this)}>
      </div>
    );
  }
}

export default MissionListToggle;
