import Component from '../../components/component.react';
import React from 'react';

import * as missionActions from '../actions';

class MissionTestButton extends Component {
  starttest() {
    missionActions.test();
  }

  render() {
    return (
      <input
        id='TestButton'
        onClick={this.starttest}
        type='button'
        value='Test Mission'
        />
    );
  }
}

export default MissionTestButton;
