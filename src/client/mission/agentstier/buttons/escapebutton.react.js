import './escapebutton.styl';
import * as missionActions from '../../actions';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

class EscapeButton extends Component {
  missionFail() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    missionActions.checkFatalities(activemission.get('losses') || immutable.fromJS({}));
    missionActions.agentMissionDone(activemission.getIn(['mission', 'currenttask', 'agentontask']));
    for (var i = 0; i < activemission.get('agentsonmission').size; i += 1)
      missionActions.agentMissionDone(activemission.get('agentsonmission').get(i));
    missionActions.bookLosses(activemission);
    missionActions.agentIsBackFromTask();
    missionActions.fail();
    missionActions.organizationMissionDone();
    socket.emit('mission', jsonapi.get('activemission').toJS()); // eslint-disable-line no-undef
  }

  render() {
    return (
      <button
        className='escape-button'
        onClick={this.missionFail.bind(this)}>{msg('mission.buttons.escapesequence')}</button>
    );
  }
}

EscapeButton.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default EscapeButton;
