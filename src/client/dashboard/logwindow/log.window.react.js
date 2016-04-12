import './log.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

class LogWindow extends Component {
  clearLog() {
    dashboardActions.clearLog();
  }

  loadLog() {
    dashboardActions.loadLog();
  }

  saveLog() {
    dashboardActions.saveLog();
  }

  render() {
    const {log} = this.props;
    return (
      <div
        id="LogWindow">
        {log.map(record => {
          return (
            <div className='log-record'>
              {record}
            </div>
          );
        })}
        <button
          id='SaveLogButton'
          onClick={this.saveLog}>Save Log</button>
        <button
          id='LoadLogButton'
          onClick={this.loadLog}>Load Log</button>
        <button
          id='ClearLogButton'
          onClick={this.clearLog}>Clear Log</button>
      </div>
    );
  }
}

LogWindow.propTypes = {
  log: React.PropTypes.instanceOf(immutable.List)
};

export default LogWindow;
