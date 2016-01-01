import './backtomission.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import {msg} from '../../../intl/store';

class BackToMission extends Component {
  agentBack() {
    const {agentlock} = this.props;
    if (!agentlock) {
      missionActions.agentIsBackFromTask();
      missionActions.clearTabletop();
    }
  }

  render() {
    return (
      <button
        className='backtomission-button'
        onClick={this.agentBack.bind(this)}
        >
        {msg('mission.buttons.backtomission')}
      </button>
    );
  }
}

BackToMission.propTypes = {
  agentlock: React.PropTypes.bool
};

export default BackToMission;
