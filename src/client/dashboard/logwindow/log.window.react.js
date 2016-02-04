import './log.window.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

class LogWindow extends Component {
  render() {
    return (
      <div id="LogWindow">
        Logging actions ...
      </div>
    );
  }
}

export default LogWindow;
