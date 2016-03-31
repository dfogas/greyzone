import './missionendbutton.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

import * as missionActions from '../../actions';

class MissionEndButton extends Component {
  end() {
    const {missions} = this.props;
    missionActions.end();
    missionActions.removeCompletedMission();
    missionActions.agentsAreBackFromMission();
    missionActions.setDefault();
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
  missions: React.PropTypes.instanceOf(immutable.List)
};

export default MissionEndButton;
