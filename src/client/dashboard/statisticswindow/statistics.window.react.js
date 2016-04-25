import './statistics.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class StatisticsWindow extends Component {
  render() {
    // TODO: after statistics are displayed do the displaying of them
    const {countrystats, name, started, userId} = this.props;
    return (
      <div id="StatisticsWindow">
        <div>Started playing on: {JSON.stringify(new Date(started))}</div>
        <div id='MissionStatistics'>Missions Accepted:
          <div>Success:</div>
          <div>Fail:</div>
          <div>Passed and Expired:</div>
        </div>
        <div id='AgentsStatistics'>
          <div>Recruited:</div>
          <div>Killed:</div>
          <div>Left in prison:</div>
        </div>
      </div>
    );
  }
}

StatisticsWindow.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.Map),
  name: React.PropTypes.string,
  started: React.PropTypes.number,
  userId: React.PropTypes.string
};

export default StatisticsWindow;
