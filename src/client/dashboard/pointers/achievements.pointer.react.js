import './achievements.pointer.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';

// TODO: consider writing pointers as one component
class AchievementsPointer extends Component {
  pointerChange() {
    dashboardActions.pointerChange('achievements');
  }

  render() {
    return (
      <div
        className='dashboardscreen-pointer'
        id='ToAchievements'
        onClick={this.pointerChange}
        >
        Achievements
      </div>
    );
  }
}

export default AchievementsPointer;
