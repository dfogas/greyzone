import './missionendbutton.styl';
import Component from '../../../components/component.react';
import React from 'react';
import {msg} from '../../../intl/store';
import * as missionActions from '../../actions';
import * as tutorialActions from '../../../tutorial/actions';
import immutable from 'immutable';
// var io = require('socket.io-client');

class MissionEndButton extends Component {
  end() {
    // var socket = io.connect('http://localhost');
    const {mission, tutorial} = this.props;
    const missionjs = mission.toJS();
    // socket.emit('mission', missionjs); // eslint-disable-line no-undef
    missionActions.end();
    if (tutorial && !tutorial.getIn(['firstmission', 'done']))
      tutorialActions.firstMissionDone();
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

MissionEndButton.propTypes = {
  mission: React.PropTypes.instanceOf(immutable.Map),
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionEndButton;
