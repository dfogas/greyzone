import './agentinarmory.styl';
import * as agentActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import AgentCard from './agentcard/agent.card.react';
import immutable from 'immutable';
import {msg} from '../intl/store';

class AgentInArmory extends Component {

  drop(ev) {
    ev.preventDefault();
    const {jsonapi} = this.props;

    if (!jsonapi.get('agentinarmory'))
      agentActions.toArmory(jsonapi.get('agents').find(agent => agent.get('name') === ev.dataTransfer.getData('text')));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  render() {
    const {game, jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');
    const tutorial = jsonapi.getIn(['options', 'tutorial']);

    return (
      <div
        id="AgentInArmory"
        onDragOver={this.allowDrop.bind(this)}
        onDrop={this.drop.bind(this)}>
        {agentinarmory &&
          <AgentCard
            agent={agentinarmory}
            equipments={jsonapi.get('equipments')}
            game={game}
            isShowcased={true}
            jsonapi={jsonapi}
          />}
        {!agentinarmory && tutorial &&
          <div id='AgentInArmoryStatus'>{msg('tutorial.agentinarmory')}</div>}
      </div>
    );
  }
}

AgentInArmory.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentInArmory;
