import './successbutton.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

class SuccessButton extends Component {
  missionSuccess() {
    const {activemission} = this.props;
    const tasks = activemission.get('tasks');
    const taskscompleted = activemission.get('taskscompleted');

    if (tasks.size === taskscompleted.size) {
      missionActions.bookRewards();
      missionActions.success();
    }
  }

  render() {
    return (
      <input
        id='SuccessButton'
        onClick={this.missionSuccess.bind(this)}
        type='button'
        value={msg('mission.buttons.success')}
        />
    );
  }
}

SuccessButton.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default SuccessButton;
