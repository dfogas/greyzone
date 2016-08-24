import * as componentsActions from '../../components/actions'; //
import Component from '../../components/component.react';
import React from 'react';
import $ from 'jquery';

class ActiveMissionToggleOff extends Component {
  activeMissionToggle(e) {
    e.preventDefault();
    if (typeof ($('.active-mission').val()) === 'string') // check if item is present in browser's DOM
      $('.active-mission').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        // animationsActions.animationEnd(); //
        componentsActions.activeMissionToggle();
      });
    else componentsActions.activeMissionToggle();
  }

  dimDot() {
    $(React.findDOMNode(this)).css('box-shadow', '');
  }

  highlightDot() {
    $(React.findDOMNode(this)).css('box-shadow', '0 0 20px orangered');
  }

  render() {
    return (
      <div
        id='ActiveMissionToggleOff'
        onClick={this.activeMissionToggle}
        onMouseLeave={this.dimDot.bind(this)}
        onMouseOver={this.highlightDot.bind(this)}>
      </div>
    );
  }
}

export default ActiveMissionToggleOff;
