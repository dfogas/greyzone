import './statuses.intro.styl';
import * as statusesActions from './actions';
import Component from '../../components/component.react.js';
import React from 'react';
import {msg} from '../../intl/store';
import $ from 'jquery';

class StatusIntro extends Component {

  componentDidMount() {
    $(React.findDOMNode(this)).hide().fadeIn(400);
  }

  render() {
    return (
      <div id='StatusesIntro'>
        {msg('dashboard.statuses.intro.textHtml')}
        <button
          id='StatusesIntroShownButton'
          onClick={(e) => statusesActions.statusesIntroToggle()}>That's what I'll do.</button>
      </div>
    );
  }
}

export default StatusIntro;
