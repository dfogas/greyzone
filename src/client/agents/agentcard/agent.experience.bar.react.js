import './agent.experience.bar.styl';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';

class AgentExperienceBar extends Component {
  render() {
    const {agent, game, isShowcased} = this.props;
    const classStringOne = classnames('agent-experience-bar', {
      'showcased': isShowcased
    });
    const classStringTwo = classnames('rankup-progress-bar', {
      'showcased': isShowcased
    });

    const computeStyle = function(agenttorank, trainingtable) {
      const expcurr = trainingtable.getIn([agent.get('rank') - 1, 'xp']);
      const expnext = trainingtable.getIn([agent.get('rank'), 'xp']);

      if (agenttorank.get('experience') >= expnext)
        return '100%';
      else
        return ((agent.get('experience') - expcurr) * 100 / (expnext - expcurr) + '%');
    };

    return (
      <div className={classStringOne}>
        <div
          className={classStringTwo}
          style={{width: computeStyle(agent, game.getIn(['globals', 'trainingtable']))}}
          ></div>
      </div>
    );
  }
}

AgentExperienceBar.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  game: React.PropTypes.instanceOf(immutable.Map),
  isShowcased: React.PropTypes.bool
};

export default AgentExperienceBar;
