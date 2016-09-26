import './successbutton.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

class SuccessButton extends Component {
  missionSuccess() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    missionActions.checkFatalities(activemission.get('rewards') || immutable.fromJS({}));
    missionActions.bookRewards(activemission);
    missionActions.success();
    for (var i = 0; i < activemission.get('agentsonmission').size; i += 1)
      missionActions.agentMissionDone(activemission.get('agentsonmission').get(i));
    socket.emit('mission', jsonapi.get('activemission').toJS()); // eslint-disable-line no-undef
    missionActions.organizationMissionDone();
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
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default SuccessButton;
