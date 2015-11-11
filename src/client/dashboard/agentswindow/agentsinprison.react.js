import './agentsinprison.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AgentsInPrison extends Component {

  render() {
    const {agentsinprison} = this.props;
    const prisonlist = agentsinprison.map((agentinprison, i) => {
      return (
        <li className='agent-in-prison'>
          {'Agent ' + agentinprison.get('name')}
          <button
            children={'Free'}
            >
          </button>
        </li>
      );
    });

    return (
      <ul id='AgentsInPrison'>
        Agents imprisoned
        {prisonlist}
      </ul>
    );
  }
}

AgentsInPrison.propTypes = {
  agentsinprison: React.PropTypes.instanceOf(immutable.List)
};

export default AgentsInPrison;
