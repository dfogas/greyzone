import './missionresult.styl';
import Component from '../../../components/component.react.js';
import React from 'react';
import classnames from 'classnames';
import determiningIcon from '../../../lib/determiningicon';

class MissionResult extends Component {
  render() {
    const {loss, losskey, reward, rewardkey} = this.props;
    const classString = classnames('mission-result', {
      'actual': this.props.isActual,
      'briefing': this.props.isBriefing,
      'loss': this.props.isLoss,
      'reward': this.props.isReward,
      'special': this.props.isSpecial,
      'task': this.props.isTask
    });

    return (
      <div className={classString}>
        {loss && (determiningIcon(losskey)) + String(loss).replace(/000000$/, 'M').replace(/000$/, 'k').replace("true", '')}
        {reward && (determiningIcon(rewardkey)) + String(reward).replace(/000000$/, 'M').replace(/000$/, 'k').replace("true", '')}
      </div>
    );
  }
}

MissionResult.propTypes = {
  isActual: React.PropTypes.bool,
  isBriefing: React.PropTypes.bool,
  isLoss: React.PropTypes.bool,
  isReward: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  isTask: React.PropTypes.bool,
  loss: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  losskey: React.PropTypes.string,
  reward: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  rewardkey: React.PropTypes.string
};

export default MissionResult;
