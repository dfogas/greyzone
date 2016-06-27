import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {Link} from 'react-router';
import allAgents from '../lib/allagents';

import PlayersWindow from './playerswindow/players.window.react';
import AgentsWindow from './agentswindow/agents.window.react';
import StatusesWindow from './statuseswindow/statuses.window.react';
import OptionsWindow from './optionswindow/options.window.react';
import MissionsWindow from './missionswindow/missions.window.react';
import CountryStatsWindow from './countrieswindow/countrystats.window.react';
import ContestWindow from './contestwindow/contest.window.react';
import EnhancementsWindow from './enhancementswindow/enhancements.window.react';
import AchievementsWindow from './achievementswindow/achievements.window.react';
import LogWindow from './logwindow/log.window.react';

class DashboardContent extends Component {
  render() {
    const {contest, game, jsonapi} = this.props;
    const allagents = allAgents(jsonapi);
    const dashPointer = jsonapi.getIn(['components', 'dashboard', 'index']);
    return (
      <div id='DashboardContent'>
        {['strategical', 'enhancements', 'statuses', 'achievements', 'options'].indexOf(dashPointer) !== -1 &&
          <PlayersWindow
            jsonapi={jsonapi}
          />}
        {dashPointer === 'strategical' &&
          <MissionsWindow
            agentbeingsaved={jsonapi.get('agentbeingsaved')}
            enhancements={jsonapi.get('enhancements')}
            jsonapi={jsonapi}
            missions={jsonapi.get('missions')}
            missionspricelist={game.getIn(['globals', 'constants', 'missionsPriceList'])}
          />}
        {dashPointer === 'strategical' &&
          <AgentsWindow
            jsonapi={jsonapi}
            agenthire={jsonapi.getIn(['dashboard', 'strategical', 'agenthire'])}
            agents={allagents}
            agentspricelist={game.getIn(['globals', 'constants', 'agentsPriceList'])}
            dashboard={jsonapi.get('dashboard')}
            options={jsonapi.get('options')}
            self={jsonapi.get('self')}
          />}
        {dashPointer === 'log' &&
          <LogWindow
            log={jsonapi.get('log')}
            />}
        {dashPointer === 'options' &&
          <OptionsWindow
            jsonapi={jsonapi}
            options={jsonapi.get('options')}
            />}
        {dashPointer === 'strategical' &&
          <CountryStatsWindow
            countrystats={jsonapi.get('countrystats')}
          />}
        {dashPointer === 'options' &&
          <Link to='payments'><button id='ToPayments'>Buy</button></Link>}
        {dashPointer === 'contest' &&
          <ContestWindow
            contest={contest}
          />}
        {dashPointer === 'statuses' && jsonapi.getIn(['campaigns', 'campaigns', 'dolcevita']) &&
          <StatusesWindow
            dashboard={jsonapi.get('dashboard')}
            owned={jsonapi.get('statuses')}
            statuses={game.getIn(['globals', 'statuses'])}
          />}
        {(dashPointer === 'enhancements') &&
          <EnhancementsWindow
            enhancements={game.getIn(['globals', 'enhancements'])}
            owned={jsonapi.get('enhancements')}
            paying={jsonapi.get('paying')}
            />}
        {(dashPointer === 'achievements') &&
          <AchievementsWindow
            achievements={game.getIn(['globals', 'achievements'])}
            />}
      </div>
    );
  }
}

DashboardContent.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.Map),
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default DashboardContent;
