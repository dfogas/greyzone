import Component from '../../components/component.react';
import React from 'react';

class AgentStatCounter extends Component {
  getStat() {
    const {skill, skillname} = this.props;
  }

  render() {
    const {skill, skillname} = this.props;

    var classString = '';
    if (this.props.isShowcased)
      classString = ' showcased';
    return (
      <div
        className={'agent-stat-counter ' + skillname + classString }
        onClick={this.getStat.bind(this)}
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
