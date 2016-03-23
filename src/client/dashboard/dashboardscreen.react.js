/* Smart */
import './dashboardscreen.styl';
// import * as dashboardActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import animate from '../lib/animate';

import PlayersWindow from './playerswindow/playerswindow.react';
import AgentsWindow from './agentswindow/agentswindow.react';
import StatusesWindow from './statuseswindow/statuses.window.react';
import OptionsWindow from './optionswindow/options.window.react';
import MissionsWindow from './missionswindow/missionswindow.react';
import CountryStatsWindow from './countrieswindow/countrystatswindow.react';
import ContestWindow from './contestwindow/contestwindow.react';
import EnhancementsWindow from './enhancementswindow/enhancements.window.react';
import AchievementsWindow from './achievementswindow/achievements.window.react';
import LogWindow from './logwindow/log.window.react.js';

// buttons, selects
import DashboardToBriefing from '../navs/dashboardtobriefing.react';
import DashboardToCommand from '../navs/dashboardtocommand.react';
import DashboardToHelp from '../navs/dashboardtohelp.react';
import DashboardToMission from '../navs/dashboardtomission.react';
import Logout from '../auth/logout.react';
import LanguageSelect from '../app/language.select.react';

// pointers
import AchievementPointer from './pointers/achievements.pointer.react';
// import ContestPointer from './pointers/contest.pointer.react';
import EnhancementsPointer from './pointers/enhancements.pointer.react';
import OptionsPointer from './pointers/options.pointer.react';
import StatusesPointer from './pointers/statuses.pointer.react';
import StrategicalPointer from './pointers/strategical.pointer.react';

class DashboardScreen extends Component {
  hidePlayersWindow() {
    /* ANTIPATTERN: direct DOM manipulation*/
    const playerWindowDiv = document.querySelector('#PlayersWindow');
    if (playerWindowDiv.style.top === '0px' || playerWindowDiv.style.top === '')
      animate(playerWindowDiv, 'top', 'px', 0, -150, 500);
    if (playerWindowDiv.style.top === '-150px')
      animate(playerWindowDiv, 'top', 'px', -150, 0, 500);
  }

  render() {
    const {contest, game, jsonapi} = this.props;
    const achievements = game.getIn(['globals', 'achievements']);
    const agentspricelist = game.getIn(['globals', 'constants', 'agentsPriceList']);
    const enhancementstotal = game.getIn(['globals', 'enhancements']);
    const statusestotal = game.getIn(['globals', 'statuses']);
    const missionspricelist = game.getIn(['globals', 'constants', 'missionsPriceList']);

    const countrystats = jsonapi.get('countrystats');
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']);
    const enhancementsowned = jsonapi.get('enhancements');
    const isLoggedIn = !!this.props.viewer;
    const options = jsonapi.get('options');
    const statusesowned = jsonapi.get('statuses');

    return (
      <div id='DashboardScreen'>
        {!jsonapi.getIn(['activemission', 'started']) &&
          <DashboardToBriefing />}
        <DashboardToCommand />
        <DashboardToHelp />
        {jsonapi.getIn(['activemission', 'agentsonmission']) ? (!!jsonapi.getIn(['activemission', 'agentsonmission']) > 0 ||
          !!jsonapi.getIn(['activemission', 'mission', 'currenttask', 'agentontask'])) &&
          <DashboardToMission /> : <DashboardToMission />}
        <AchievementPointer />
        {/*<ContestPointer />*/}
        <EnhancementsPointer />
        <OptionsPointer />
        <StatusesPointer />
        <StrategicalPointer />
        {isLoggedIn &&
          <Logout />}
        {/*<LanguageSelect locales={this.props.locales}/>*/}
        <div id='DashboardContent'>
          {dashPointer === 'strategical' &&
            <PlayersWindow
              gameCash={jsonapi.get('gameCash')}
              gameContacts={jsonapi.get('gameContacts')}
              name={jsonapi.get('name')}
            />}
          {dashPointer === 'strategical' &&
            <MissionsWindow
              enhancements={enhancementsowned}
              missionspricelist={missionspricelist}
            />}
          {dashPointer === 'strategical' &&
            <AgentsWindow
              agenthire={jsonapi.getIn(['dashboard', 'strategical', 'agenthire'])}
              agents={jsonapi.get('agents')}
              agentspricelist={agentspricelist}
              cash={jsonapi.get('gameCash')}
              log={jsonapi.getIn(['dashboard', 'agentswindow', 'message'])}
            />}
          {dashPointer === 'strategical' &&
            <LogWindow
              log={jsonapi.get('log')}
              />}
          {/*dashPointer === 'options' &&
            <OptionsWindow
              options={options}
              />*/}
          {dashPointer === 'strategical' &&
            <CountryStatsWindow
              countrystats={countrystats}
            />}
          {(dashPointer === 'contest' || dashPointer === 'strategical') &&
            <ContestWindow
              contest={contest}
            />}
          {dashPointer === 'statuses' &&
            <StatusesWindow
              owned={statusesowned}
              statuses={statusestotal}
            />}
          {(dashPointer === 'enhancements') &&
            <EnhancementsWindow
              enhancements={enhancementstotal}
              owned={enhancementsowned}
              />}
          {(dashPointer === 'achievements') &&
            <AchievementsWindow
              achievements={achievements}
              />}
          {/*<button
            className='hide-show-button'
            onClick={this.hidePlayersWindow}
            >hide/show</button>*/}
        </div>
      </div>
    );
  }
}

DashboardScreen.propTypes = {
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  contest: React.PropTypes.instanceOf(immutable.List),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  locales: React.PropTypes.string,
  viewer: React.PropTypes.object
};

export default DashboardScreen;
