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

import CampaignIntro from '../tutorial/campaign.intro.react';
import DashboardContent from './dashboard.content.react';
import EndGameWindow from './endgame.window.react';
import EnhancementTalk from '../agents/agenttalk/enhancement.talk.react';
import OperationsUpgradeDialog from './playerswindow/operations.upgrade.dialog.react';
import PlayerAgentChoose from '../tutorial/choose.class.react';
import PlayerCampaignChoose from '../tutorial/choose.campaign.react';
import ScreenPlastic from '../tutorial/screen.plastic.react';
import StrategicalIntro from './strategical.intro.react';
import TrainingUpgradeDialog from './playerswindow/training.upgrade.dialog.react';

// buttons, selects
import DashboardToBriefing from '../navs/dashboardtobriefing.react';
import DashboardToCommand from '../navs/dashboardtocommand.react';
import DashboardToIntro from '../navs/dashboardtointro.react';
import DashboardToMission from '../navs/dashboardtomission.react';
import Logout from '../auth/logout.react';
import LanguageSelect from '../app/language.select.react';

// pointers
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
    socket.on('check discovered', (discovered) => { // eslint-disable-line no-undef
      console.log(countrystats.toJS());
      if (countrystats.filter(cs => cs.get('obscurity') === 0).size > 2)
        this.badEndDiscovered();
    });
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
    const allagents = jsonapi.get('agents').concat(jsonapi.getIn(['activemission', 'agentsonmission']));
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']);
    const isLoggedIn = !!this.props.viewer;

    return (
      <div id='DashboardScreen'>
        <div
          id='DashboardScreenLabel'
          >{msg('dashboard.screen.label')}</div>
        <DashboardContent
          contest={contest}
          game={game}
          jsonapi={jsonapi}
          />
        <DashboardToCommand />
        <DashboardToIntro />
        <ContestPointer />
        <LogPointer />
        <OptionsPointer />
        <StrategicalPointer />
        {jsonapi.getIn(['dashboard', 'enhancementtalk']) &&
          <EnhancementTalk
            jsonapi={jsonapi} />}
        {jsonapi.getIn(['dashboard', 'operationsUpgradeDialog']) &&
          <OperationsUpgradeDialog
            enhancements={jsonapi.get('enhancements')}
            list={game.getIn(['globals', 'enhancements'])}
            />}
        {jsonapi.getIn(['dashboard', 'trainingUpgradeDialog']) &&
          <TrainingUpgradeDialog
            enhancements={jsonapi.get('enhancements')}
            list={game.getIn(['globals', 'enhancements'])}
            />}
        {(!jsonapi.get('self') || !jsonapi.getIn(['campaigns', 'selection', 'done'])) &&
          <ScreenPlastic />}
        {!jsonapi.get('self') &&
          <PlayerAgentChoose />}
        {!jsonapi.getIn(['campaigns', 'selection', 'done']) &&
          <PlayerCampaignChoose
            campaigns={jsonapi.getIn(['campaigns', 'campaigns'])}
            paying={jsonapi.get('paying')}
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
        {jsonapi.get('gameend') &&
          <EndGameWindow jsonapi={jsonapi} />}
        {!jsonapi.getIn(['activemission', 'started']) &&
          <DashboardToBriefing />}
        {!jsonapi.get('dashboard').getIn(['strategical', 'intro']) &&
          <StrategicalIntro jsonapi={jsonapi}/>}
        {isLoggedIn && <Logout />}
        {jsonapi.getIn(['options', 'debug']) && <EnhancementsPointer />}
        {jsonapi.getIn(['campaigns', 'campaigns', 'dolcevita']) &&
          <StatusesPointer />}
        {dashPointer === 'options' &&
          <LanguageSelect locales={this.props.locales}/>}
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
