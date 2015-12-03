/*
  Dumb Component
*/
import './dashboard.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import PlayersWindow from './playerswindow/playerswindow.react';
import AgentsWindow from './agentswindow/agentswindow.react';
import MissionsWindow from './missionswindow/missionswindow.react';
import CountriesWindow from './countrieswindow/countrieswindow.react';
import ContestWindow from './contestwindow/contestwindow.react';

class CommandDashboardScreen extends Component {
  render() {
    const {contest, jsonapi} = this.props;
    const countries = jsonapi.get('countries');

    return (
      <div id='CommandDashboardScreen'>
        <div id='DashboardContent'>
          <PlayersWindow
            gameCash={jsonapi.get('gameCash')}
            gameContacts={jsonapi.get('gameContacts')}
            name={jsonapi.get('name')}
            />
          <MissionsWindow
            countries={countries}
            missiontoaccept={jsonapi.get('missiontoaccept')}
            />
          <AgentsWindow
            agentforhire={jsonapi.get('agentforhire')}
            agents={jsonapi.get('agents')}
            />
          <CountriesWindow
            countries={countries}
            />
          <ContestWindow
            contest={contest}
            />
        </div>
      </div>
    );
  }
}

CommandDashboardScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default CommandDashboardScreen;
