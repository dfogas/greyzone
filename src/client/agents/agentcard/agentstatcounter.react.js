/*
  Dumb Component
*/
import './agentstatcounter.styl';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';

class AgentStatCounter extends Component {
  render() {
    const {skill, skillname} = this.props;

    const classString = classnames('agent-stat-counter', skillname, {
      'showcased': this.props.isShowcased
    });
    return (
      <div
        className={classString}
        >
        {skill}
      </div>
    );
  }
}

AgentStatCounter.propTypes = {
  count: React.PropTypes.number,
  isShowcased: React.PropTypes.bool,
  skill: React.PropTypes.number,
  skillname: React.PropTypes.string
};

export default AgentStatCounter;
