import './red.alert.toggle.styl';
import * as agentsActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import $ from 'jquery';

class RedAlertToggle extends Component {
  dimPlan() {
    const {armorycode} = this.props;
    $(React.findDOMNode(this)).css({
      backgroundColor: `${armorycode}`,
      boxShadow: `0 0 30px ${armorycode}`
    });
  }

  highlightPlan() {
    const {armorycode} = this.props;
    // let mySound = new Sound('../../../assets/audio/ui/rollover3.wav');
    // mySound.play();
    $(React.findDOMNode(this)).css({
      backgroundColor: `${armorycode === 'green' ? 'yellow' : 'red'}`,
      boxShadow: `0 0 30px ${armorycode === 'green' ? 'yellow' : 'red'}`
    });
  }
  render() {
    const {armorycode} = this.props;
    return (
      <div
        id='RedAlertToggle'
        onClick={(e) => agentsActions.armoryCode(`${armorycode === 'green' ? 'yellow' : 'red'}`)}
        onMouseLeave={this.dimPlan.bind(this)}
        onMouseOver={this.highlightPlan.bind(this)}
        style={{
          backgroundColor: `${armorycode}`,
          boxShadow: `0 0 30px ${armorycode}`,
          opacity: 0.8
        }}>
      </div>
    );
  }
}

RedAlertToggle.propTypes = {
  armorycode: React.PropTypes.string
};

export default RedAlertToggle;
