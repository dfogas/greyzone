import './agent.experience.bar.styl';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';

class AgentExperienceBar extends Component {
  render() {
    const {agent, game, isShowcased} = this.props;
    const trainingtable = game.getIn(['globals', 'trainingtable']);
    const expcurr = trainingtable ? trainingtable.getIn([agent.get('rank') - 1, 'xp']) : '';
    const expnext = trainingtable ? trainingtable.getIn([agent.get('rank'), 'xp']) : '';
    const classStringOne = classnames('agent-experience-bar', {
      'showcased': isShowcased
    });
    const classStringTwo = classnames('rankup-progress-bar', {
      'showcased': isShowcased
    });

    return (
      <div className={classStringOne}>
        <div
          className={classStringTwo}
          style={{width: ((agent.get('experience') - expcurr) * 100 / (expnext - expcurr) + '%')}}
          ></div>
      </div>
    );
  }
}

export default AgentExperienceBar;
