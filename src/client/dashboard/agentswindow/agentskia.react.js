import './agentskia.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AgentsKia extends Component {

  render() {
    const {agentskia} = this.props;
    const kialist = agentskia.map((agentkia, i) => {
      return (
        <li className='agent-kia'>
          {'Agent ' + agentkia.get('name') + ' Rank ' + agentkia.get('rank')}
        </li>
      );
    });

    return (
      <div id='AgentsKia'>
        Agents memorial wall
        <br />
        {kialist}
      </div>
    );
  }
}

AgentsKia.propTypes = {
  agentskia: React.PropTypes.instanceOf(immutable.List)
};

export default AgentsKia;
