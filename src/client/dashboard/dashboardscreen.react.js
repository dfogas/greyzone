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
import CountryStatsWindow from './countrieswindow/countrieswindow.react';
import ContestWindow from './contestwindow/contestwindow.react';
import DashboardToBriefing from '../navs/dashboardtobriefing.react';
import DashboardToCommand from '../navs/dashboardtocommand.react';
import Logout from '../auth/logout.react';
import LanguageSelect from '../app/language.select.react';

class DashboardScreen extends Component {
  render() {
    const {contest, jsonapi} = this.props;
    const countrystats = jsonapi.get('countrystats');
    const isLoggedIn = !!this.props.viewer;

    return (
      <div id='DashboardScreen'>
        <DashboardToBriefing />
        <DashboardToCommand />
        {isLoggedIn &&
          <Logout
            id='DashboardScreenLogout'
            />}
        <LanguageSelect locales={this.props.locales}/>
        <div id='DashboardContent'>
          <PlayersWindow
            gameCash={jsonapi.get('gameCash')}
            gameContacts={jsonapi.get('gameContacts')}
            name={jsonapi.get('name')}
            />
          <MissionsWindow
            countrystats={countrystats}
            missiontoaccept={jsonapi.get('missiontoaccept')}
            />
          <AgentsWindow
            agentforhire={jsonapi.get('agentforhire')}
            agents={jsonapi.get('agents')}
            cash={jsonapi.get('gameCash')}
            />
          <CountryStatsWindow
            countrystats={countrystats}
            />
          <ContestWindow
            contest={contest}
            />
        </div>
      </div>
    );
  }
}

DashboardScreen.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default DashboardScreen;
