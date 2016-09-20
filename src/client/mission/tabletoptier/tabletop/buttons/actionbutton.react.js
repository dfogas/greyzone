import './actionbutton.styl';
import * as dicesActions from '../../rotatingdie/actions';
import * as missionActions from '../../../actions';
import Component from '../../../../components/component.react.js';
import React from 'react';
import playSound from '../../../../lib/sound';

class ActionButton extends Component {
  action() {
    const {agentlock, diceslock, missionStarted} = this.props;

    if (!missionStarted) {
      missionActions.start();
      missionActions.agentLockedToTask();
    }

    if (!diceslock && missionStarted) {
      dicesActions.spinDice();
      playSound('../../../../../../assets/audio/diceInHand.ogg');
      setTimeout(() => {
        dicesActions.spinDice();
        dicesActions.rollAll();
      }, 1500);
    }

    if (!agentlock && missionStarted)
      missionActions.agentLockedToTask();
  }

  render() {
    const {missionStarted, diceslock} = this.props;
    return (
      <button>
        {!diceslock && <input
          className='action-button'
          onClick={this.action.bind(this)}
          type='button'
          value={missionStarted ? 'Throw' : 'Start Mission' }
          />}
      </button>
    );
  }
}

ActionButton.propTypes = {
  agentlock: React.PropTypes.bool,
  diceslock: React.PropTypes.bool,
  missionStarted: React.PropTypes.bool
};

export default ActionButton;
