import './strategical.window.styl'; //
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import {msg} from '../../intl/store';
import allAgents from '../../lib/bml/allagents';
import topLevelTraining from '../../lib/bml/topleveltraining';

import DashboardToBriefing from '../../navs/dashboardtobriefing.react';
import DashboardToCommand from '../../navs/dashboardtocommand.react';
// import DashboardToTalk from '../../navs/dashboardtotalk.react';
import Logout from '../../auth/logout.react';

import AgentsWindow from '../agentswindow/agents.window.react';
import CountryStateOverview from '../country.state.overview.react';
import CountryStatsWindow from '../countrieswindow/countrystats.window.react';
import IntermediateGoal from '../../gameflow/intermediate.goal.react';
import MissionsWindow from '../missionswindow/missions.window.react';
import PlayersWindow from '../playerswindow/players.window.react';
import Pointer from '../pointer.react';
import GoalsHint from '../../tutorial/hints/goals.hint.react';
import UpgradeTrainingHint from '../../tutorial/hints/upgrade.training.hint.react';

class StrategicalWindow extends Component {
  render() {
    const {game, isLoggedIn, jsonapi} = this.props;
    const allagents = allAgents(jsonapi);

    return (
      <div id='StrategicalWindow'>
        <CountryStateOverview
          game={game}
          jsonapi={jsonapi}
          />
        <PlayersWindow
          game={game}
          isLoggedIn={isLoggedIn}
          jsonapi={jsonapi}
        />
        <MissionsWindow
          agentbeingsaved={jsonapi.get('agentbeingsaved')}
          enhancements={jsonapi.get('enhancements')}
          game={game}
          jsonapi={jsonapi}
          missions={jsonapi.get('missions')}
          missionspricelist={game.getIn(['globals', 'constants', 'missionsPriceList'])}
        />
        <AgentsWindow
          agenthire={jsonapi.getIn(['dashboard', 'strategical', 'agenthire'])}
          agents={allagents}
          dashboard={jsonapi.get('dashboard')}
          game={game}
          jsonapi={jsonapi}
        />
        <Pointer pointsto='contest' />
        <Pointer pointsto='log' />
        <Pointer pointsto='options' />
        <Logout />
        {!jsonapi.getIn(['options', 'debug']) && !jsonapi.getIn(['dashboard', 'intermediategoal']) &&
          <div
            id='IntermediateGoalButton'
            onClick={(e) => dashboardActions.intermediateGoalToggle()}>Goals</div>}
        {jsonapi.getIn(['dashboard', 'intermediategoal']) && <IntermediateGoal jsonapi={jsonapi} />}
        {/*jsonapi.getIn(['options', 'multiplayer'])*/true && <DashboardToCommand />}
        {!jsonapi.getIn(['activemission', 'started']) && <DashboardToBriefing />}
        {/*!jsonapi.getIn(['activemission', 'started']) && <DashboardToTalk />*/}
        {jsonapi.getIn(['options', 'debug']) && <Pointer pointsto='enhancements' />}
        {jsonapi.getIn(['campaigns', 'campaigns', 'dolcevita']) && <Pointer pointsto='statuses' />}
        {jsonapi.getIn(['campaigns', 'campaigns', 'collector', 'selected']) && <Pointer pointsto='collection' />}
        {allAgents(jsonapi).filter(agent => agent.get('rank') >= 4).size === 0
          && allAgents(jsonapi).filter(agent => agent.get('experience') >= 210).size >= 1
          && topLevelTraining(jsonapi.get('enhancements')) === 'Basic Training'
          && jsonapi.getIn(['options', 'tutorial'])
          && <UpgradeTrainingHint />}
        {!jsonapi.getIn(['options', 'debug'])
          && !jsonapi.getIn(['dashboard', 'intermediategoal'])
          && allAgents(jsonapi).filter(agent => agent.get('rank') >= 4).size === 0
          && <GoalsHint />}
        {false &&
          <CountryStatsWindow countrystats={jsonapi.get('countrystats')} />}
      </div>
    );
  }
}

StrategicalWindow.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  isLoggedIn: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default StrategicalWindow;
