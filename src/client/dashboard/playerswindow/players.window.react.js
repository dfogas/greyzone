import './players.window.styl';
// import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import uuid from '../../lib/guid';
import allAgents from '../../lib/bml/allagents';
import $ from 'jquery';
import {msg} from '../../intl/store';
import determiningIcon from '../../lib/bml/determiningicon';
// import selfIsDisplayed from '../../lib/selfisdisplayed';

import AgentCard from '../../agents/agentcard/agent.card.react';
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

  // playerDoesNotGoOnMissions() {
  //   const {jsonapi} = this.props;
  //   const agents = jsonapi.get('agents');
  //   const agentondisplay = jsonapi.getIn(['dashboard', 'agentondisplay']);
  //   dashboardActions.selectAgent(agents.find(agent => agent.get('id') !== agentondisplay.get('id')));
  //   dashboardActions.playerDoesNotGoOnMissions();
  // }
  //
  // playerGoesOnMissions() {
  //   dashboardActions.playerGoesOnMissions();
  // }

  render() {
    const {game, jsonapi} = this.props;
    const self = jsonapi.get('self');
    const playerAgentIsActive = allAgents(jsonapi).find(agent => agent.get('id') === self.get('id'));
    const tutorial = jsonapi.getIn(['options', 'tutorial']);
    return (
      <div id='PlayersWindow'>
        {!playerAgentIsActive &&
          <div id='PlayerAgentCard'>
            <AgentCard
              agent={self}
              equipments={self.get('equipments')}
              game={game}
              jsonapi={jsonapi}
              key={uuid() + 'playeragent'}
              />
          </div>}
        <div id='PlayerLiquidResources'>
          <span className='gameCash-counter'>
            {determiningIcon('gameCash')}{formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
          </span>
          <br />
          <span className='gameContacts-counter'>
            {determiningIcon('gameContacts')}{jsonapi.get('gameContacts')}
          </span>
        </div>
        <PlayerOperationsCapability
          jsonapi={jsonapi} />
        <PlayerAgentsLeadership
          jsonapi={jsonapi} />
        {tutorial && <div id='PlayerHelpHint'>
          Click items to interact
          <br />
          Press 'h' for help
        </div>}
      </div>
    );
  }
}

PlayersWindow.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default PlayersWindow;
