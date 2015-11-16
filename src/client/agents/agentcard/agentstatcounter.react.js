/*
  Dumb Component
*/
import './agentstatcounter.styl';
import Component from '../../components/component.react';
import React from 'react';

class AgentStatCounter extends Component {
  render() {
    const {skill, skillname} = this.props;

    var classString = '';
    if (this.props.isShowcased)
      classString = ' showcased';
    return (
      <div
        className={'agent-stat-counter ' + skillname + classString }
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
