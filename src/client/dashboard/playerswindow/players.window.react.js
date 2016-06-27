import './players.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import uuid from '../../lib/guid';
import allAgents from '../../lib/allagents';
import $ from 'jquery';
import {msg} from '../../intl/store';

import AgentCard from '../../agents/agentcard/agentcard.react';
import PlayerAgentsLeadership from './player.agents.leadership.react';
import PlayerOperationsCapability from './player.operations.capability.react';

class PlayersWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.showHelpMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.showHelpMessage(e));
  }

  showHelpMessage(e) {
    if (e.keyCode === 72 && $('#DashboardTutorial').html())
      $('#DashboardTutorial').remove();
    else if (e.keyCode === 72)
      $('#DashboardScreen').append(msg('tutorial.dashboardScreen'));
  }

  playerDoesNotGoOnMissions() {
    dashboardActions.playerDoesNotGoOnMissions(); //
  }

  playerGoesOnMissions() {
    dashboardActions.playerGoesOnMissions();
  }

  render() {
    const {jsonapi} = this.props;
    const self = jsonapi.get('self');
    const playerAgentIsActive = self ? allAgents(jsonapi).find(agent => agent.get('id') === self.get('id')) : false;
    return (
      <div id='PlayersWindow'>
        <div id='PlayerLabel'>
          <div id='PlayerName'>
            {jsonapi.get('name')}
          </div>
        </div>
        <div id='PlayerAgentCard'>
          {self &&
            <AgentCard
              agent={self}
              equipments={self.get('equipments')}
              key={uuid() + 'playeragent'}
            />}
        </div>
        {!playerAgentIsActive &&
          <button
            id='PlayerAgentActionableButton'
            onClick={this.playerGoesOnMissions}
            >Go on Missions</button>}
        {(self ? jsonapi.get('agents').find(agent => agent.get('id') === self.get('id')) : false) &&
          <button
            id='PlayerAgentActionableButton'
            onClick={this.playerDoesNotGoOnMissions}
            >Dont go on Missions</button>}
        <div id='PlayerLiquidResources'>
          <span className='gameCash-counter'>
            Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
          </span>
          <br />
          <span className='gameContacts-counter'>
            Contacts: {jsonapi.get('gameContacts')}
          </span>
        </div>
        <PlayerOperationsCapability
          jsonapi={jsonapi} />
        <PlayerAgentsLeadership
          jsonapi={jsonapi} />
        <div id='PlayerHelpHint'>
          Click items to interact
          <br />
          Press 'h' for help
        </div>
      </div>
    );
  }
}

PlayersWindow.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayersWindow;
