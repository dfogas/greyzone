import './missionendbutton.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../../intl/store';

import * as missionsActions from '../../actions';

class MissionEndButton extends Component {
  end() {
    const {activemission} = this.props;
    missionsActions.end(activemission);
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
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionEndButton;
