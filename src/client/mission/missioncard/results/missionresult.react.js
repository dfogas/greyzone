import './missionresult.styl';
import Component from '../../../components/component.react.js';
import React from 'react';

function determiningIcon(resultkey) {
  if (resultkey === 'reputation')
    return '\u{1f3c6}';
  if (resultkey === 'gameCash')
    return '\u{1f4b0}';
  if (resultkey === 'gameContacts')
    return '\u{1f575}';
  if (resultkey === 'obscurity')
    return '\u{1f441}';
  else
    return '\u{1f631}';
}

class MissionResult extends Component {
  render() {
    const {loss, losskey, reward, rewardkey} = this.props;
    let classString = '';
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
      <div className={'mission-result' + classString}>
        {loss && determiningIcon(losskey) + ' : ' + loss}
        {reward && determiningIcon(rewardkey) + ' : ' + reward}
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
  loss: React.PropTypes.string,
  losskey: React.PropTypes.string,
  reward: React.PropTypes.string,
  rewardkey: React.PropTypes.string
};

export default MissionResult;
