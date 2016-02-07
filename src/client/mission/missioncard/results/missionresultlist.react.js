import './missionresultlist.styl';
import Component from '../../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames';

// import classnames from 'classnames';
import MissionResult from './missionresult.react';

class MissionResultList extends Component {
  render() {
    const {losses, rewards} = this.props;
    const classString = classnames('mission-result-list', {
      'actual': this.props.isActual,
      'briefing': this.props.isBriefing,
      'loss': this.props.isLoss,
      'reward': this.props.isReward,
      'special': this.props.isSpecial,
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
                  isBriefing={this.props.isBriefing}
                  isLoss={true}
                  isSpecial={this.props.isSpecial}
                  isTask={this.props.isTask}
                  loss={losses.get(losskey)}
                  losskey={losskey}
                />
              );
            }) : this.props.rewards ?
            rewardskeys.map((rewardkey, i) => {
              return (<MissionResult
                  isActual={this.props.isActual}
                  isBriefing={this.props.isBriefing}
                  isReward={this.props.isReward}
                  isSpecial={this.props.isSpecial}
                  isTask={this.props.isTask}
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
  isBriefing: React.PropTypes.bool,
  isLoss: React.PropTypes.bool,
  isReward: React.PropTypes.bool,
  isSpecial: React.PropTypes.bool,
  isTask: React.PropTypes.bool,
  losses: React.PropTypes.instanceOf(immutable.Map),
  rewards: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultList;
