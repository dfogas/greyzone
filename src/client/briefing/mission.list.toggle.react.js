import './mission.list.toggle.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
// import {msg} from '../intl/store';
import $ from 'jquery';
import playSound from '../lib/sound';

class MissionListToggle extends Component {
  dimTaskHelp() {
    $(React.findDOMNode(this)).css('box-shadow', '');
  }

  highlightTaskHelp() {
    playSound('../../../assets/audio/ui/rollover2.wav');
    $(React.findDOMNode(this)).css('box-shadow', '0 0 40px white, 0 0 20px white inset');
  }

  missionListToggle(e) {
    e.preventDefault();
    if (typeof ($('#MissionsListTable').val()) === 'string')
      $('#MissionsListTable').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        // animationsActions.animationEnd(); //
        componentsActions.missionListToggle();
      });
    else componentsActions.missionListToggle();
  }

  render() {
    return (
      <div
        id='MissionListToggle'
        onClick={this.missionListToggle}
        onMouseLeave={this.dimTaskHelp.bind(this)}
        onMouseOver={this.highlightTaskHelp.bind(this)}>
      </div>
    );
  }
}

export default MissionListToggle;
