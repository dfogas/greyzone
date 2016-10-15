import './agentscrollbar.styl';
import * as agentActions from '../actions';
// import * as scrollbarActions from './actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import classnames from 'classnames/dedupe';
import uuid from '../../lib/guid';
// import {msg} from '../../intl/store';

import AgentCard from '../agentcard/agent.card.react';

class AgentScrollBar extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault(ev);

    const {jsonapi} = this.props;
    const data = ev.dataTransfer.getData('text');
    const transferredAgent = jsonapi.getIn(['activemission', 'agentsonmission']).find(agent => agent.get('name') === data);

    /* agentscrollbar drop logic */
    if (jsonapi.getIn(['activemission', 'missionstarted']))
      return;
    else if (jsonapi.getIn(['agentinarmory', 'name']) === data)
      agentActions.backFromArmory(jsonapi.get('agentinarmory'));
    else if (transferredAgent)
      agentActions.toRoster(transferredAgent);

  }

  render() {
    const {agents, game, isMission, jsonapi, style} = this.props;
    const tutorial = jsonapi.getIn(['options', 'tutorial']);

    if (!agents.size && tutorial)
      return (
        <span id='AgentListPlaceholder'>No agents are present.</span>
      );

    else if (!agents.size)
      return (
        <div></div>
      );

    return (
      <ul
        className={isMission ? ' on-mission' : ''}
        id='AgentList'
        isMission={isMission}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        style={style}
      >
        {agents
          .filter(agent => agent !== null)
          .filter(agent => !agent.get('prison'))
          .filter(agent => !agent.get('KIA'))
          .map((agent, i) => {
            return (
              <AgentCard
                agent={agent}
                agentindex={i}
                draggable="true"
                game={game}
                isAgents={this.props.isAgents}
                jsonapi={jsonapi}
                key={uuid() + agent.name}
              />
            );
          })}
      </ul>
    );
  }
}

AgentScrollBar.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map),
  agents: React.PropTypes.instanceOf(immutable.List),
  data: React.PropTypes.array,
  game: React.PropTypes.instanceOf(immutable.Map),
  isAgents: React.PropTypes.bool,
  isBriefing: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  style: React.PropTypes.object
};

export default AgentScrollBar;
