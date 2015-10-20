// static components own
import './dashboard.css';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
// static components reusable
import Logout from '../auth/logout.react';
import AgentsWindow from './agentswindow.react';
import MissionsWindow from './missionswindow/missionswindow.react';

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

    let countriesstats = countries.map(country => {
      return (
        <p
          className='country-stat'
        >
          <span className='country-name-dashboard'>{country.get('name')}&nbsp;</span>
          <span className='country-stat-reputation-dashboard'>Reputation: { country.get('reputation')}&nbsp;</span>
          <span className='country-stat-obscurity-dashboard'>Obscurity: {country.get('obscurity')}&nbsp;</span>
        </p>
      );
    });

    return (
      <div id='CommandDashboardScreen'>
        <div id='DashboardContent'>
          <div id='PlayerStrip'>
            <div id='PlayerPicture'>
            </div>
            <div id='PlayerLabel'>
              <div id='PlayerName'>{name}</div>
              <Logout />
            </div>
            <div id='PlayerLiquidResources'>
              <span>Cash: {gameCash}</span>
              <br />
              <span>Contacts: {gameContacts}</span>
            </div>
          </div>
          <MissionsWindow
            missiontoaccept={missiontoaccept}
            />
          <AgentsWindow
            agentforhire={agentforhire}
            agents={agents}
            />
          <div id='CountryStatsOverview'>
            {countriesstats}
          </div>
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
