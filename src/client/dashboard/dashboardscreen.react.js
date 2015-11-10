// static components own
import './dashboard.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
// static components reusable

import PlayersWindow from './playerswindow/playerswindow.react';
import AgentsWindow from './agentswindow/agentswindow.react';
import MissionsWindow from './missionswindow/missionswindow.react';
import CountriesWindow from './countrieswindow/countrieswindow.react';

class CommandDashboardScreen extends Component {

  render() {
    const {jsonapi, pendingActions} = this.props;
    const agentforhire = jsonapi.get('agentforhire');
    const agents = jsonapi.get('agents');
    const gameCash = jsonapi.get('gameCash');
    const gameContacts = jsonapi.get('gameContacts');
    const name = jsonapi.get('name');
    const missiontoaccept = jsonapi.get('missiontoaccept');
    const countries = jsonapi.get('countries');

    return (
      <div id='CommandDashboardScreen'>
        <div id='DashboardContent'>
          <PlayersWindow
            gameCash={gameCash}
            gameContacts={gameContacts}
            name={name}
            />
          <MissionsWindow
            countries={countries}
            missiontoaccept={missiontoaccept}
            />
          <AgentsWindow
            agentforhire={agentforhire}
            agents={agents}
            />
          <CountriesWindow
            countries={jsonapi.get('countries')}
            />
        </div>
      </div>
    );
  }
}

CommandDashboardScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default CommandDashboardScreen;
