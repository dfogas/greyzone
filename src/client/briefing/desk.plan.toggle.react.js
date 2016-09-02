import './desk.plan.toggle.styl'; //
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import $ from 'jquery';
import Sound from '../lib/sound';

class TablePlanToggle extends Component {
  dimPlan() {
    $(React.findDOMNode(this)).css('box-shadow', '');
  }

  highlightPlan() {
    let mySound = new Sound('../../../assets/audio/ui/rollover3.wav');
    mySound.play();
    $(React.findDOMNode(this)).css('box-shadow', '0 0 30px white');
  }

  render() {
    return (
      <div
        id='TablePlanToggle'
        onClick={(e) => componentsActions.taskHelpToggle()}
        onMouseLeave={this.dimPlan.bind(this)}
        onMouseOver={this.highlightPlan.bind(this)}>
      </div>
    );
  }
}

export default TablePlanToggle;
