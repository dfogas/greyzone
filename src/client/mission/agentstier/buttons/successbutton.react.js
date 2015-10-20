import './successbutton.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class SuccessButton extends Component {
  missionSuccess() {
    const {activemission} = this.props;
    const tasks = activemission.get('tasks');
    const taskscompleted = activemission.get('taskscompleted');

    if (tasks.size === taskscompleted.size)
      missionActions.success(activemission);
  }

  render() {
    return (
      <input id='SuccessButton' onClick={this.missionSuccess.bind(this)} type='button' value='Mission Accomplished!' />
    );
  }
}

SuccessButton.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default SuccessButton;
