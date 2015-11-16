import './missionresult.styl';
import Component from '../../../components/component.react.js';
import React from 'react';

class MissionResult extends Component {
  render() {
    const {loss, losskey, reward, rewardkey} = this.props;
    var classString = '';
    if (this.props.isActual)
      classString += ' actual';
    if (this.props.isBriefing)
      classString += ' briefing';
    if (this.props.isLoss)
      classString += ' loss';
    if (this.props.isReward)
      classString += ' reward';
    if (this.props.isSpecial)
      classString += ' special';
    if (this.props.isTask)
      classString += ' task';

    return (
      <li className={'mission-result' + classString}>
        {loss ? losskey + ' : ' + loss : rewardkey + ' : ' + reward}
      </li>
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
  loss: React.PropTypes.string,
  losskey: React.PropTypes.string,
  reward: React.PropTypes.string,
  rewardkey: React.PropTypes.string
};

export default MissionResult;
