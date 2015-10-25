import './actionbutton.styl';
import * as dicesActions from '../../dice/actions';
import * as missionActions from '../../../actions';
import Component from '../../../../components/component.react.js';
import React from 'react';

class ActionButton extends Component {
  action() {
    const {diceslock, missionStarted} = this.props;
    if (!missionStarted)
      missionActions.start();

    if (!diceslock && missionStarted)
      dicesActions.rollAll();
  }

  render() {
    const {missionStarted} = this.props;
    return (
      <input
        className='action-button'
        onClick={this.action.bind(this)}
        type='button'
        value={missionStarted ? 'Action - Dice Throw' : 'Start Mission' }
        />
    );
  }
}

ActionButton.propTypes = {
  diceslock: React.PropTypes.bool
};

export default ActionButton;