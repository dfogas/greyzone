import './party.of.agents.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import AgentToken from '../briefing/agent.token.react';

class PartyOfAgents extends Component {
  render() {
    const {/*game,*/ jsonapi} = this.props;
    return (
      <div id='PartyOfAgents'>
        {jsonapi.get('agents').map(agent => {
          return (
            <AgentToken
              agent={agent}
              jsonapi={jsonapi}
              />
          );
        })}
      </div>
    );
  }
}

PartyOfAgents.propTypes = {
  // game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default PartyOfAgents;
