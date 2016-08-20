import * as componentsActions from '../../components/actions'; //
import Component from '../../components/component.react';
import React from 'react';
import $ from 'jquery';

class ActiveMissionToggleOff extends Component {
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
        onClick={(e) => componentsActions.activeMissionToggle()}
        onMouseLeave={this.dimDot.bind(this)}
        onMouseOver={this.highlightDot.bind(this)}>
      </div>
    );
  }
}

export default ActiveMissionToggleOff;
