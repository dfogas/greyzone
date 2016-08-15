import './strategical.window.styl'; //
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import {msg} from '../../intl/store';
import allAgents from '../../lib/bml/allagents';

import DashboardToBriefing from '../../navs/dashboardtobriefing.react';
import DashboardToCommand from '../../navs/dashboardtocommand.react';

import AgentsWindow from '../agentswindow/agents.window.react';
import CountryStatsWindow from '../countrieswindow/countrystats.window.react';
import IntermediateGoal from '../../gameflow/intermediate.goal.react';
import MissionsWindow from '../missionswindow/missions.window.react';
import PlayersWindow from '../playerswindow/players.window.react';

class StrategicalWindow extends Component {
  render() {
    const {game, jsonapi} = this.props;
    const allagents = allAgents(jsonapi);
    return (
      <div id='StrategicalWindow'>
        <PlayersWindow
          game={game}
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
        {!jsonapi.getIn(['options', 'debug']) && !jsonapi.getIn(['dashboard', 'intermediategoal']) &&
          <button
            id='IntermediateGoalButton'
            onClick={(e) => dashboardActions.intermediateGoalToggle()}>Goals</button>}
        {jsonapi.getIn(['dashboard', 'intermediategoal']) && <IntermediateGoal jsonapi={jsonapi} />}
        {jsonapi.getIn(['options', 'multiplayer']) && <DashboardToCommand />}
        {!jsonapi.getIn(['activemission', 'started']) && <DashboardToBriefing />}
        {false &&
          <CountryStatsWindow
            countrystats={jsonapi.get('countrystats')}
          />}
      </div>
    );
  }
}

StrategicalWindow.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default StrategicalWindow;
