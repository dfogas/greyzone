/* Smart */
import './dashboard.screen.styl';
import * as componentsActions from '../components/actions';
import * as endGameActions from './endgame/actions';
import * as tutorialActions from '../tutorial/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import badEndsCheck from '../lib/bml/badendscheck';

// import StrategicalIntro from './strategical.intro.react';
import DashboardContent from './dashboard.content.react';
import EndGameWindow from './endgame/endgame.window.react';
import LanguageSelect from '../app/language.select.react';
import OperationsUpgradeDialog from './playerswindow/operations.upgrade.dialog.react';
import PlayerCampaignChoose from '../tutorial/choose.campaign.react';
import ScreenHelp from '../tutorial/screen.help.react';
import ScreenPlastic from '../tutorial/screen.plastic.react';
import TrainingUpgradeDialog from './playerswindow/training.upgrade.dialog.react';

class DashboardScreen extends Component {
  componentDidMount() {
    const {jsonapi} = this.props;
    window.addEventListener('keydown', this.helpMessage);
    // checky na zabitého či uvězněného/objeveného hráče enda
    if (badEndsCheck(jsonapi) === 'Killed') // player's agent is in agents roster and has KIA status true
      endGameActions.badEndKilled();
    else if (badEndsCheck(jsonapi) === 'LeftInPrison') // neplatící hráč nemá šanci se osvobodit, když má loayálního agenta
      endGameActions.badEndLeftInPrison();
    else if (badEndsCheck(jsonapi) === 'Discovered')
      endGameActions.badEndDiscovered();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.helpMessage);
  }


  componentWillReceiveProps() {
    const {jsonapi} = this.props;
    if (!jsonapi.getIn(['tutorial', 'firstmission', 'done']))
      tutorialActions.firstMissionSetup();
  }

  helpMessage(e) {
    if (e.keyCode === 72)
      componentsActions.screenHelpToggle('dashboard');
  }

  render() {
    const {contest, game, i18n, jsonapi} = this.props;
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']) || 'default';
    const isLoggedIn = !!this.props.viewer;
    const orgname = jsonapi.get('name');

    return (
      <div id='DashboardScreen'>
        {<div
          id='DashboardScreenLabel'
          >{`${msg('dashboard.screen.label.' + dashPointer)} ` + orgname}</div>}
        <DashboardContent
          contest={contest}
          game={game}
          isLoggedIn={isLoggedIn}
          jsonapi={jsonapi}
          />
        <a
          download='playerlog.txt'
          id='DownloadLogLink'
          style={{display: 'none'}}>Log download</a>
        {jsonapi.getIn(['components', 'screenhelp', 'dashboard']) &&
          <ScreenHelp context='dashboard' />}
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
        {/* start game */}
        {false &&
          <ScreenPlastic />}
        {!jsonapi.getIn(['campaigns', 'selection', 'done']) &&
          <PlayerCampaignChoose
            campaigns={jsonapi.getIn(['campaigns', 'campaigns'])}
            paying={jsonapi.get('paying')}
            />}
        {/*!jsonapi.get('dashboard').getIn(['strategical', 'intro']) && <StrategicalIntro jsonapi={jsonapi}/>*/}
        {/* end of start game */}
        {dashPointer === 'options' && <LanguageSelect i18n={i18n}/>}
        {jsonapi.get('gameend') && <EndGameWindow jsonapi={jsonapi} />}
      </div>
    );
  }
}

DashboardScreen.propTypes = {
  agentspricelist: React.PropTypes.instanceOf(immutable.Map),
  contest: React.PropTypes.instanceOf(immutable.List),
  game: React.PropTypes.instanceOf(immutable.Map),
  i18n: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  locales: React.PropTypes.string,
  viewer: React.PropTypes.string
};

export default DashboardScreen;
