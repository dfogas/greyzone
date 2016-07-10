import './statuses.intro.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import {msg} from '../../intl/store';

class StatusIntro extends Component {
  render() {
    return (
      <div id='StatusesIntro'>
        {msg('dashboard.statuses.intro.textHtml')}
        <button
          id='StatusesIntroShownButton'
          onClick={(e) => dashboardActions.statusesIntroToggle()}>That's what I'll do.</button>
      </div>
    );
  }
}

export default StatusIntro;
