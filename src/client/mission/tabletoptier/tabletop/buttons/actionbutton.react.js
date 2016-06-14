import './actionbutton.styl';
import * as dicesActions from '../../dice/actions';
import * as missionActions from '../../../actions';
import Component from '../../../../components/component.react.js';
import React from 'react';
import $ from 'jquery';
import Sound from '../../../../lib/sound';

class ActionButton extends Component {
  action() {
    const {agentlock, diceslock, missionStarted} = this.props;
    // POC: sound effect
    let mySound = new Sound('http://localhost:8000/assets/audio/MissionStart.mp3');
    if (!missionStarted) {
      $('#TableTop').append('<div id=\'MissionStartMessage\'>Mission Started</div>');
      $('#MissionStartMessage').hide().fadeIn(200);
      $('#MissionStartMessage').fadeOut(1000, () => $('#MissionStartMessage').remove());
      missionActions.start();
      mySound.play();
      missionActions.agentLockedToTask();
    }

    if (!diceslock && missionStarted)
      dicesActions.rollAll();

    if (!agentlock && missionStarted)
      missionActions.agentLockedToTask();
  }

  render() {
    const {missionStarted, diceslock} = this.props;
    return (
      <div>
        {!diceslock && <input
          className='action-button'
          onClick={this.action.bind(this)}
          type='button'
          value={missionStarted ? 'Action - Dice Throw' : 'Start Mission' }
          />}
      </div>
    );
  }
}

ActionButton.propTypes = {
  agentlock: React.PropTypes.bool,
  diceslock: React.PropTypes.bool,
  missionStarted: React.PropTypes.bool
};

export default ActionButton;
