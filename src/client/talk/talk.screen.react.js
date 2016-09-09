import './talk.screen.styl';
// import talkEnhancementsActions from './actions';
import * as talkActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import immutable from 'immutable';
import allAgents from '../lib/bml/allagents';

import AgentToTalkTo from './agent.to.talk.to.react';
import EnhancementTalk from './enhancements/enhancement.talk.react';
import PartyOfAgents from './party.of.agents.react';

class TalkScreen extends Component {
  render() {
    const {game, jsonapi} = this.props;
    return (
      <div id='TalkScreen'>
        <PartyOfAgents
          game={game}
          jsonapi={jsonapi}
          />
        <AgentToTalkTo
          agentid={jsonapi.getIn(['talk', 'participants', 0])}
          jsonapi={jsonapi}
          />
        {jsonapi.getIn(['dashboard', 'enhancementtalk']) &&
          <EnhancementTalk jsonapi={jsonapi} />}
        <Link to='dashboard'>
          <button
            id='TalkToDashboard'
            onClick={(e) => talkActions.endConversation()}>Finish Conversation</button>
        </Link>
      </div>
    );
  }
}

TalkScreen.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default TalkScreen;
