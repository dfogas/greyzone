import './missionendbutton.styl';
import Component from '../../../components/component.react';
import React from 'react';
import {msg} from '../../../intl/store';
import * as missionActions from '../../actions';
// var io = require('socket.io-client');

class MissionEndButton extends Component {
  end() {
    // var socket = io.connect('http://localhost');
    socket.emit('mission', 'Mission has been ended'); // eslint-disable-line no-undef
    missionActions.end();
    missionActions.removeCompletedMission();
    missionActions.agentsAreBackFromMission();
    missionActions.setDefault();
    window.history.back();
  }

  render() {
    return (
      <input
        id='MissionEndButton'
        onClick={this.end.bind(this)}
        type='button'
        value={msg('mission.buttons.end')}
        />
    );
  }
}

export default MissionEndButton;
