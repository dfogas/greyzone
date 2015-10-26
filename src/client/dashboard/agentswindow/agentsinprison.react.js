import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AgentsInPrison extends Component {

  render() {
    const {agentsinprison} = this.props;

    return (
      <div id='AgentsInPrison'>
        Agents imprisoned
        <br />
        {'Agent ' + agentsinprison.getIn([0, 'name'])}
      </div>
    );
  }
}

AgentsInPrison.propTypes = {
  agentsinprison: React.PropTypes.instanceOf(immutable.List)
};

export default AgentsInPrison;
