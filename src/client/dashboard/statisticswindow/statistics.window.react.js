import './statistics.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class StatisticsWindow extends Component {
  render() {
    // TODO: after statistics are displayed do the displaying of them
    const {countrystats, name, started, statistics, userId} = this.props;
    console.log(typeof started === 'number');
    return (
      <div id="StatisticsWindow">
        <div>Started playing on: {JSON.stringify(new Date(started))}</div>
        <div>Missions Accepted:
          <div>Success:</div>
          <div>Fail:</div>
          <div>Passed and Expired:</div>
        </div>
      </div>
    );
  }
}

export default StatisticsWindow;
