/* Smart */
import './dashboard.screen.styl';
import * as dashboardActions from './actions';
import * as endGameActions from './endgame/actions';
// import * as missionActions from '../mission/actions';
import * as tutorialActions from '../tutorial/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import badEndsCheck from '../lib/bml/badendscheck';

import CampaignIntro from '../tutorial/campaign.intro.react';
import DashboardContent from './dashboard.content.react';
import EndGameWindow from './endgame.window.react';
import EnhancementTalk from './talk/enhancement.talk.react';
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
import Logout from '../auth/logout.react';
import LanguageSelect from '../app/language.select.react';

// pointers
import ContestPointer from './pointers/contest.pointer.react';
import EnhancementsPointer from './pointers/enhancements.pointer.react';
import LogPointer from './pointers/log.pointer.react';
import OptionsPointer from './pointers/options.pointer.react';
import StatusesPointer from './pointers/statuses.pointer.react';
import StrategicalPointer from './pointers/strategical.pointer.react';
import IntermediateGoal from '../gameflow/intermediate.goal.react'; //

class DashboardScreen extends Component {
  componentDidMount() {
    const {jsonapi} = this.props;
    // checky na zabitého či uvězněného/objeveného hráče enda
    if (badEndsCheck(jsonapi) === 'Killed') // player's agent is in agents roster and has KIA status true
      endGameActions.badEndKilled();
    else if (badEndsCheck(jsonapi) === 'LeftInPrison') // neplatící hráč nemá šanci se osvobodit, když má loayálního agenta
      endGameActions.badEndLeftInPrison();
    else if (badEndsCheck(jsonapi) === 'Discovered')
      endGameActions.badEndDiscovered();
  }

  componentWillReceiveProps() {
    const {jsonapi} = this.props;
    // poté co je vybrána kampaň a první mise ještě neproběhla
    if (jsonapi.getIn(['campaigns', 'selection', 'done']) && !jsonapi.getIn(['tutorial', 'firstmission', 'done']))
      tutorialActions.firstMissionSetup();
  }

  render() {
    const {contest, game, jsonapi} = this.props;
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']) || 'default';
    const isLoggedIn = !!this.props.viewer;
    const orgname = jsonapi.get('name');

    return (
      <div id='DashboardScreen'>
        <div
          id='DashboardScreenLabel'
          >{`${msg('dashboard.screen.label.' + dashPointer)} ` + orgname}</div>
        <DashboardContent
          contest={contest}
          game={game}
          jsonapi={jsonapi}
          />
        <ContestPointer />
        <LogPointer />
        <OptionsPointer />
        <StrategicalPointer />
        <a
          download='playerlog.txt'
          id='DownloadLogLink'
          style={{display: 'none'}}>Log download</a>
        {dashPointer === 'strategical' &&
          <button
            id='IntermediateGoalButton'
            onClick={(e) => dashboardActions.intermediateGoalToggle()}>Goals</button>}
        {jsonapi.getIn(['dashboard', 'intermediategoal']) && dashPointer === 'strategical' &&
          <IntermediateGoal jsonapi={jsonapi} />}
        {dashPointer === 'strategical' && jsonapi.getIn(['options', 'multiplayer']) &&
          <DashboardToCommand />}
        {dashPointer === 'options' &&
          <DashboardToIntro />}
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
        {(jsonapi.get('self').get('name') === 'Default Self' || !jsonapi.getIn(['campaigns', 'selection', 'done'])) &&
          <ScreenPlastic />}
        {jsonapi.get('self').get('name') === 'Default Self' &&
          <PlayerAgentChoose
            game={game}
            jsonapi={jsonapi}
            />}
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
        {(!jsonapi.getIn(['activemission', 'started']) && dashPointer === 'strategical') &&
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
