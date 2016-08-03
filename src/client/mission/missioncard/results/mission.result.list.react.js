import './mission.result.list.styl';
import Component from '../../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames';
import uuid from '../../../lib/guid';

// import classnames from 'classnames';
import MissionResult from './mission.result.react';

class MissionResultList extends Component {
  render() {
    const {losses, rewards} = this.props;
    const classString = classnames('mission-result-list', {
      'actual': this.props.isActual,
      'loss': this.props.isLoss,
      'reward': this.props.isReward,
      'task': this.props.isTask
    });
    let losseskeys, rewardskeys;
    if (losses)
      losseskeys = Object.keys(losses.toJS());
    if (rewards)
      rewardskeys = Object.keys(rewards.toJS());

    return (
      <div className={classString}>
        {
          this.props.losses ?
            losseskeys.map((losskey, i) => {
              return (
                <MissionResult
                  isActual={this.props.isActual}
                  isLoss={true}
                  isTask={this.props.isTask}
                  key={uuid() + 'loss'}
                  loss={losses.get(losskey)}
                  losskey={losskey}
                />
              );
            }) : this.props.rewards ?
            rewardskeys.map((rewardkey, i) => {
              return (<MissionResult
                  isActual={this.props.isActual}
                  isReward={this.props.isReward}
                  isTask={this.props.isTask}
                  key={uuid() + 'reward'}
                  reward={rewards.get(rewardkey)}
                  rewardkey={rewardkey}
                />);
            }) : null
          }
      </div>
    );
  }
}

MissionResultList.propTypes = {
  isActual: React.PropTypes.bool,
  isLoss: React.PropTypes.bool,
  isReward: React.PropTypes.bool,
  isTask: React.PropTypes.bool,
  losses: React.PropTypes.instanceOf(immutable.Map),
  rewards: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultList;
