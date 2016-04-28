import './log.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import uuid from '../../lib/guid';

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
            <div
              className='log-record'
              key={uuid() + 'logrecord'}
              >
              {record}
            </div>
          );
        })}
        <button
          id='SaveLogButton'
          onClick={this.saveLog}>{msg('dashboard.strategical.log.save')}</button>
        <button
          id='LoadLogButton'
          onClick={this.loadLog}>{msg('dashboard.strategical.log.load')}</button>
        <button
          id='ClearLogButton'
          onClick={this.clearLog}>{msg('dashboard.strategical.log.clear')}</button>
      </div>
    );
  }
}

LogWindow.propTypes = {
  log: React.PropTypes.instanceOf(immutable.List)
};

export default LogWindow;
