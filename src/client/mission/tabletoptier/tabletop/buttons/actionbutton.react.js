import './actionbutton.styl';
import * as dicesActions from '../../dice/actions';
import * as missionActions from '../../../actions';
import Component from '../../../../components/component.react.js';
import React from 'react';

class ActionButton extends Component {
  action() {
    const {agentlock, diceslock, missionStarted} = this.props;
    if (!missionStarted) {
      missionActions.start();
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
