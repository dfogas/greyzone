import './achievements.window.styl';
import Component from '../../components/component.react';
import React from 'react';

class AchievementsWindow extends Component {
  render() {
    const {achievements} = this.props;
    return (
      <div id='AchievementsWindow'>
        {achievements.map(achievement => {
          return (
            <div className='achievement-card'>
              {achievement.get('name')}
            </div>
          );
        })}
      </div>
    );
  }
}

export default AchievementsWindow;
