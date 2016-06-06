/* Smart */
import './dashboard.screen.styl';
import * as dashboardActions from './actions';
// import * as missionActions from '../mission/actions';
import * as tutorialActions from '../tutorial/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import allAgents from '../lib/allagents';
import {Link} from 'react-router';

import PlayersWindow from './playerswindow/players.window.react';
import AgentsWindow from './agentswindow/agentswindow.react';
import StatusesWindow from './statuseswindow/statuses.window.react';
import OptionsWindow from './optionswindow/options.window.react';
import MissionsWindow from './missionswindow/missionswindow.react';
import CountryStatsWindow from './countrieswindow/countrystatswindow.react';
import ContestWindow from './contestwindow/contestwindow.react';
import EnhancementsWindow from './enhancementswindow/enhancements.window.react';
import AchievementsWindow from './achievementswindow/achievements.window.react';
import LogWindow from './logwindow/log.window.react';
import EndGameWindow from './endgame.window.react';
import ScreenPlastic from '../tutorial/screen.plastic.react';
import PlayerAgentChoose from '../tutorial/choose.class.react';
import PlayerCampaignChoose from '../tutorial/choose.campaign.react';
import CampaignIntro from '../tutorial/campaign.intro.react';

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

  componentDidMount() {
    const {jsonapi} = this.props;
    const countrystats = jsonapi.get('countrystats');
    const paying = jsonapi.get('paying');
    const isPaying = paying ?
      Object.keys(paying).reduce((prev, curr, index, array) => {
        return paying[curr] || prev;
      }, false) : false;

    // checky na zabitého či uvězněného hráče enda
    if (jsonapi.get('agents').filter(agent => agent.get('prison') && agent.get('id') === jsonapi.getIn(['self', 'id'])).size !== 0 && !isPaying) // neplatící hráč nemá šanci se osvobodit, i když má loayálního agenta
      this.badEndLeftInPrison();
    if (
      jsonapi.get('agents').filter(
        agent => agent.get('prison') && agent.get('id') === jsonapi.getIn(['self', 'id'])).size !== 0 &&  // player's agent is in agent's roster and has prison status true
          allAgents(jsonapi).filter(agent => agent.get('loyalty') === 'loyal').size === 0 // no agent of organization is loyal
    )
      dashboardActions.badEndLeftInPrison();

    if (jsonapi.get('agents').filter(agent => agent.get('KIA') && agent.get('id') === jsonapi.getIn(['self', 'id'])).size !== 0) // player's agent is in agents roster and has KIA status true
      dashboardActions.badEndKilled();

    setInterval(() => {
      console.log('checking for discovered');
      if (countrystats.filter(cs => cs.get('obscurity') === 0).size > 3)
        dashboardActions.badEndDiscovered();
    }, 12 * 60 * 1000);
    // TODO: I met some unexpected behaviour, read how exactly websockets work
    // socket.on('check discovered', (discovered) => { // eslint-disable-line no-undef
    //   console.log(countrystats.toJS());
    //   if (countrystats.filter(cs => cs.get('obscurity') === 0).size > 2)
    //     this.badEndDiscovered();
    // });
  }

  componentWillReceiveProps() {
    const {jsonapi} = this.props;

    if (jsonapi.getIn(['campaigns', 'selection', 'done']) && !jsonapi.getIn(['tutorial', 'firstmission', 'done']))
      tutorialActions.firstMissionSetup();
    // else
    //   // just placeholder
    //   console.log('selection of campaigns not done yet.'); 
  }

  render() {
    const {contest, game, jsonapi} = this.props;
    const achievements = game.getIn(['globals', 'achievements']);
    const agentspricelist = game.getIn(['globals', 'constants', 'agentsPriceList']);
    const enhancementstotal = game.getIn(['globals', 'enhancements']);
    const statusestotal = game.getIn(['globals', 'statuses']);
    const missionspricelist = game.getIn(['globals', 'constants', 'missionsPriceList']);

    const agentsinroster = jsonapi.get('agents');
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
        {(!jsonapi.get('self') || !jsonapi.getIn(['campaigns', 'selection', 'done'])) &&
          <ScreenPlastic />}
        {!jsonapi.get('self') &&
          <PlayerAgentChoose />}
        {!jsonapi.getIn(['campaigns', 'selection', 'done']) &&
          <PlayerCampaignChoose
            campaigns={jsonapi.getIn(['campaigns', 'campaigns'])}
            />}
        {(jsonapi.getIn(['campaigns', 'campaigns']) && (typeof jsonapi.getIn(['campaigns', 'campaigns']).toJS()) === 'object') &&
          Object.keys(jsonapi.getIn(['campaigns', 'campaigns']).toJS()).map(campaign => {
            if (!jsonapi.getIn(['campaigns', 'campaigns', campaign, 'intro', 'viewed']) && jsonapi.getIn(['campaigns', 'campaigns', campaign, 'selected']))
              return (
                <CampaignIntro
                  campaign={jsonapi.getIn(['campaigns', 'campaigns', campaign])}
                  />
              );
          })}
        <div
          id='DashboardScreenLabel'
          >{msg('dashboard.screen.label')}</div>
        {jsonapi.get('gameend') &&
          <EndGameWindow
            countrystats={jsonapi.get('countrystats')}
            gameend={jsonapi.get('gameend')}
            name={jsonapi.get('name')}
            options={jsonapi.get('options')}
            started={jsonapi.get('started')}
            statistics={jsonapi.get('statistics')}
            userId={jsonapi.get('_id')}
            />}
        {!jsonapi.getIn(['activemission', 'started']) &&
          <DashboardToBriefing />}
        <DashboardToCommand />
        <DashboardToIntro />
        {jsonapi.getIn(['activemission', 'started']) &&
          <DashboardToMission />}
        {/*<AchievementPointer />*/}
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
              jsonapi={jsonapi}
              name={jsonapi.get('name')}
              self={jsonapi.get('self')}
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
              agentsinroster={agentsinroster}
              agentspricelist={agentspricelist}
              dashboard={dashboard}
              options={options}
              self={jsonapi.get('self')}
            />}
          {dashPointer === 'log' &&
            <LogWindow
              log={jsonapi.get('log')}
              />}
          {dashPointer === 'options' &&
            <OptionsWindow
              jsonapi={jsonapi}
              options={options}
              />}
          {dashPointer === 'strategical' &&
            <CountryStatsWindow
              countrystats={countrystats}
            />}
          {dashPointer === 'options' &&
            <Link to='payments'><button id='ToPayments'>Buy</button></Link>}
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
              paying={jsonapi.get('paying')}
              />}
          {(dashPointer === 'achievements') &&
            <AchievementsWindow
              achievements={achievements}
              />}
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
  viewer: React.PropTypes.string
};

export default DashboardScreen;
