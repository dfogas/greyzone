import './log.window.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

class LogWindow extends Component {
  render() {
    const {log} = this.props;
    return (
      <div id="LogWindow">
        {log.map(record => {
          return (
            <div className='log-record'>
              {record}
            </div>
          );
        })}
      </div>
    );
  }
}

export default LogWindow;
