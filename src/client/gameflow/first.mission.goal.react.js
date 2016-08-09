import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

class FirstMissionGoal extends Component {
  render() {
    const {firstmission} = this.props;

    return (
      <div
        className={firstmission ? 'done' : ''}
        id='FirstMissionGoal'>
        {msg('tutorial.goals.firstmission')}
      </div>
    );
  }
}

FirstMissionGoal.propTypes = {
  firstmission: React.PropTypes.bool
};

export default FirstMissionGoal;
