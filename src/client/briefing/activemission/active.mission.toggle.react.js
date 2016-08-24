import './active.mission.toggle.styl';
import * as componentsActions from '../../components/actions';
import Component from '../../components/component.react';
import React from 'react';
import $ from 'jquery';

class ActiveMissionToggle extends Component {
  // activeMissionToggle(e) {
  //   e.preventDefault();
  //   if (typeof ($('.active-mission').val()) === 'string') // check if item is present in browser's DOM
  //     $('.active-mission').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
  //       // animationsActions.animationEnd(); //
  //       componentsActions.activeMissionToggle();
  //     });
  //   else componentsActions.activeMissionToggle();
  // }

  dimMonitor() {
    $(React.findDOMNode(this)).css('box-shadow', '');
  }

  highlightMonitor() {
    $(React.findDOMNode(this)).css('box-shadow', '0 0 40px white, 0 0 20px white inset');
  }

  render() {
    return (
      <div
        id='ActiveMissionToggle'
        onClick={(e) => componentsActions.activeMissionToggle()}
        onMouseLeave={this.dimMonitor.bind(this)}
        onMouseOver={this.highlightMonitor.bind(this)}>
      </div>
    );
  }
}

export default ActiveMissionToggle;
