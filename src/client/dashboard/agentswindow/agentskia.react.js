import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AgentsKia extends Component {

  render() {
    const {agentskia} = this.props;

    return (
      <div id='AgentsKia'>
        Agents memorial wall
        <br />
        {'Agent ' + agentskia.getIn([0, 'name'])}
      </div>
    );
  }
}

AgentsKia.propTypes = {
  agentskia: React.PropTypes.instanceOf(immutable.List)
};

export default AgentsKia;
