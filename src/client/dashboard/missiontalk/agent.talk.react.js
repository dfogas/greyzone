import Component from '../../components/component.react';
import React from 'react';

class AgentTalk extends Component {
  render() {
    const {agent, talk} = this.props;
    return (
      <div className='agent-talk'>
        <img src={agent.get('imgsrc')} />
        <div>{talk}</div>
      </div>
    );
  }
}

export default AgentTalk;
