import './successbutton.styl'; //
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

class SuccessButton extends Component {
  missionSuccess() {
    const {activemission} = this.props;
    const agentsonmission = activemission.get('agentsonmission');
    const tasks = activemission.get('tasks');
    const taskscompleted = activemission.get('taskscompleted');

    if (tasks.size <= taskscompleted.size) {
      missionActions.checkFatalities(activemission.get('rewards').toJS());
      missionActions.bookRewards(activemission);
      missionActions.success();
      for (var i = 0; i < agentsonmission.size; i += 1)
        missionActions.agentMissionDone(agentsonmission.get(i));
      missionActions.organizationMissionDone();
    }
  }

  render() {
    return (
      <button
        id='SuccessButton'
        onClick={this.missionSuccess.bind(this)}>{msg('mission.buttons.success')}</button>
    );
  }
}

SuccessButton.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default SuccessButton;
