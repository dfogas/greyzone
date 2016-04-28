import './statistics.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class StatisticsWindow extends Component {
  render() {
    // TODO: after statistics are displayed do the displaying of them
    const {countrystats, name, started, statistics, userId} = this.props;
    return (
      <div id="StatisticsWindow">
        <div>Started playing on: {JSON.stringify(new Date(started))}</div>
        <div id='MissionStatistics'>
          <div>Missions Done: {statistics.get('missions').size}</div>
          <div>Success: {statistics.get('missions').filter(mission => mission.get('result') === 'success').size}</div>
          <div>Fail: {statistics.get('missions').filter(mission => mission.get('result') === 'fail').size}</div>
        </div>
        <div id='AgentsStatistics'>
          <div>Agents Recruited: {statistics.get('agentsall').size}</div>
          <div>Killed: {statistics.get('agentskilled') ? statistics.get('agentskilled').size : 0}</div>
          <div>Left in prison: {statistics.get('agentsleft') ? statistics.get('agentsleft').size : 0}</div>
        </div>
      </div>
    );
  }
}

StatisticsWindow.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.Map),
  name: React.PropTypes.string,
  started: React.PropTypes.number,
  statistics: React.PropTypes.instanceOf(immutable.Map),
  userId: React.PropTypes.string
};

export default StatisticsWindow;
