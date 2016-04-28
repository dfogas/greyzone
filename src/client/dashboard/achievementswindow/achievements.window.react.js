import './achievements.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../lib/guid';

class AchievementsWindow extends Component {
  render() {
    const {achievements} = this.props;
    return (
      <div id='AchievementsWindow'>
        {achievements.map(achievement => {
          return (
            <div
              className='achievement-card'
              key={uuid() + 'achievement'}
              >
              {achievement.get('name')}
            </div>
          );
        })}
      </div>
    );
  }
}

AchievementsWindow.propTypes = {
  achievements: React.PropTypes.instanceOf(immutable.List)
};

export default AchievementsWindow;
