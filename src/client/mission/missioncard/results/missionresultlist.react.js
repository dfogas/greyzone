import './missionresultlist.styl';
import Component from '../../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

import classnames from 'classnames';
import MissionResult from './missionresult.react';

class MissionResultList extends Component {
  render() {
    const {activemissiontitle, losses, rewards} = this.props;
    const isDefaultMission = activemissiontitle === 'Default Mission';
    let losseskeys, rewardskeys;
    if (losses)
      losseskeys = Object.keys(losses.toJS());
    if (rewards)
      rewardskeys = Object.keys(rewards.toJS());

    var classString = '';
    if (this.props.isActual)
      classString += ' actual';
    if (this.props.isLoss)
      classString += ' loss';
    if (this.props.isReward)
      classString += ' reward';
    if (this.props.isBriefing)
      classString += ' briefing';
    if (this.props.isSpecial)
      classString += ' special';
    if (this.props.isTask)
      classString += ' task';

    return (
      <ul className={'mission-result-list' + classString}>
        {!isDefaultMission &&
          this.props.losses ?
            losseskeys.map((losskey, i) => {
              return (<MissionResult
                  isActual={this.props.isActual}
                  isBriefing={this.props.isBriefing}
                  isLoss={true}
                  isSpecial={this.props.isSpecial}
                  isTask={this.props.isTask}
                  loss={losses.get(losskey)}
                  losskey={losskey}
                />);
            }) :
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
            })
          }
      </ul>
    );
  }
}

MissionResultList.propTypes = {
  activemissiontitle: React.PropTypes.string,
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
