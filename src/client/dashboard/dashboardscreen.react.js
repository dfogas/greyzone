/* Smart */
import './dashboardscreen.styl';
// import * as dashboardActions from './actions';
// import * as missionActions from '../mission/actions';
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
import DashboardToIntro from '../navs/dashboardtointro.react';
import DashboardToMission from '../navs/dashboardtomission.react';
import Logout from '../auth/logout.react';
import LanguageSelect from '../app/language.select.react';

// pointers
import AchievementPointer from './pointers/achievements.pointer.react';
import ContestPointer from './pointers/contest.pointer.react';
import EnhancementsPointer from './pointers/enhancements.pointer.react';
import LogPointer from './pointers/log.pointer.react';
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

    const allagents = jsonapi.get('agents').concat(jsonapi.getIn(['activemission', 'agentsonmission']));
    const agentinarmory = jsonapi.get('agentinarmory');
    const countrystats = jsonapi.get('countrystats');
    const dashboard = jsonapi.get('dashboard');
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']);
    const enhancementsowned = jsonapi.get('enhancements');
    const isLoggedIn = !!this.props.viewer;
    const missions = jsonapi.get('missions');
    const options = jsonapi.get('options');
    const statusesowned = jsonapi.get('statuses');
    const totalagents = agentinarmory ? allagents.unshift(agentinarmory) : allagents;

    return (
      <div id='DashboardScreen'>
        {!jsonapi.getIn(['activemission', 'started']) &&
          <DashboardToBriefing />}
        <DashboardToCommand />
        <DashboardToIntro />
        {jsonapi.getIn(['activemission', 'started']) &&
          <DashboardToMission />}
        <AchievementPointer />
        <ContestPointer />
        <EnhancementsPointer />
        <LogPointer />
        <OptionsPointer />
        <StatusesPointer />
        <StrategicalPointer />
        {isLoggedIn &&
          <Logout />}
        {dashPointer === 'options' &&
          <LanguageSelect locales={this.props.locales}/>}
        <div id='DashboardContent'>
          {(dashPointer === 'strategical' || dashPointer === 'enhancements' ||
            dashPointer === 'statuses' || dashPointer === 'achievements' ||
            dashPointer === 'options') &&
            <PlayersWindow
              enhancements={enhancementsowned}
              gameCash={jsonapi.get('gameCash')}
              gameContacts={jsonapi.get('gameContacts')}
              name={jsonapi.get('name')}
            />}
          {dashPointer === 'strategical' &&
            <MissionsWindow
              agentbeingsaved={jsonapi.get('agentbeingsaved')}
              dashboard={dashboard}
              enhancements={enhancementsowned}
              missionlog={jsonapi.getIn(['dashboard', 'missionswindow', 'message'])}
              missions={missions}
              missionspricelist={missionspricelist}
            />}
          {dashPointer === 'strategical' &&
            <AgentsWindow
              agentbeingsaved={jsonapi.get('agentbeingsaved')}
              agenthire={jsonapi.getIn(['dashboard', 'strategical', 'agenthire'])}
              agentlog={jsonapi.getIn(['dashboard', 'agentswindow', 'message'])}
              agents={totalagents}
              agentspricelist={agentspricelist}
              dashboard={dashboard}
              options={options}
            />}
          {dashPointer === 'log' &&
            <LogWindow
              log={jsonapi.get('log')}
              />}
          {dashPointer === 'options' &&
            <OptionsWindow
              options={options}
              />}
          {dashPointer === 'strategical' &&
            <CountryStatsWindow
              countrystats={countrystats}
            />}
          {dashPointer === 'contest' &&
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
