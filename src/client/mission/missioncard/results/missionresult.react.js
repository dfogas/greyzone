import Component from '../../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

class MissionResult extends Component {
  render() {
    const {losses, rewards} = this.props;
    let missionrewards = '', missionlosses = '';

    if (losses)
        missionlosses += losses;

    if (rewards)
       missionrewards += rewards;

    var classString = '';
    if (this.props.isLoss)
      classString += ' loss';
    if (this.props.isReward)
      classString += ' reward';
    if (this.props.isBriefing)
      classString += ' briefing';
    if (this.props.isSpecial)
      classString += ' special';

    return (
      <div className={'mission-result actual' + classString}>
        {this.props.losses ? missionlosses : missionrewards}
      </div>
    );
  }
}

MissionResult.propTypes = {
  isBriefing: React.PropTypes.bool,
  isLoss: React.PropTypes.bool,
  isReward: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  losses: React.PropTypes.instanceOf(immutable.Map),
  rewards: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResult;
