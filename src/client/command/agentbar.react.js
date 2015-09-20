import Component from '../components/component.react';
import React from 'react';
import AgentIcon from './agenticon.react';

class AgentBar extends Component {
  render() {
    return (
      <div id='AgentBar'>
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
        <AgentIcon />
      </div>
    );
  }
}

export default AgentBar;
