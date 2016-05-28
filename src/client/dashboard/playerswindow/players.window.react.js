import './players.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import topLevelOps from '../../lib/toplevelops';
import topLevelTraining from '../../lib/topleveltraining';
import uuid from '../../lib/guid';
import allAgents from '../../lib/allagents';

import AgentCard from '../../agents/agentcard/agentcard.react';

class PlayersWindow extends Component {
  playerDoesNotGoOnMissions() {
    dashboardActions.playerDoesNotGoOnMissions(); //
  }

  playerGoesOnMissions() {
    dashboardActions.playerGoesOnMissions();
  }

  render() {
    const {gameCash, gameContacts, enhancements, jsonapi, name, self} = this.props;
    const playerAgentIsActive = self ? allAgents(jsonapi).find(agent => agent.get('id') === self.get('id')) : false;
    return (
      <div id='PlayersWindow'>
        <div id='PlayerLabel'>
          <div id='PlayerName'>
            {name}
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
            Cash: {formatMoney(gameCash, 0, '.', ',')}$
          </span>
          <br />
          <span className='gameContacts-counter'>
            Contacts: {gameContacts}
          </span>
        </div>
        <div id='PlayerOperationsCapability'>
          Operations: {topLevelOps(enhancements)}
        </div>
        <div id='PlayerAgentsLeadership'>
          Agents: {topLevelTraining(enhancements)}
        </div>
      </div>
    );
  }
}

PlayersWindow.propTypes = {
  enhancements: React.PropTypes.object,
  gameCash: React.PropTypes.number,
  gameContacts: React.PropTypes.number,
  name: React.PropTypes.string
};

export default PlayersWindow;
