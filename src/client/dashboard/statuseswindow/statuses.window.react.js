import './statuses.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import StatusesIntro from './statuses.intro.react';
import StatusTier from './status.tier.react';
import ShiftUp from './shift.up.react';
import ShiftDown from './shift.down.react';

class StatusesWindow extends Component {
  render() {
    const {dashboard, statuses, owned} = this.props;
    return (
      <div id='StatusesWindow'>
        <div id='StatusesWindowLabel'>{msg('dashboard.statuses.window.label')}</div>
        {dashboard.getIn(['statuses', 'tierdisplayed']) > 1 &&
          <ShiftUp
            tierdisplayed={dashboard.getIn(['statuses', 'tierdisplayed']) || 1}
            />}
        <StatusTier
          statuses={statuses}
          statusesowned={owned}
          tierdisplayed={dashboard.getIn(['statuses', 'tierdisplayed']) || 1}
          />
        {(dashboard.getIn(['statuses', 'tierdisplayed']) < 4 || typeof dashboard.getIn(['statuses', 'tierdisplayed']) === 'undefined') &&
          <ShiftDown
            tierdisplayed={dashboard.getIn(['statuses', 'tierdisplayed']) || 1}
            />}
        {!dashboard.getIn(['statuses', 'intro']) &&
          <StatusesIntro />}
        {dashboard.getIn(['statuses', 'intro']) &&
          <button
            id='StatusesHistoryButton'
            onClick={(e) => dashboardActions.statusesIntroToggle()}>Show Intro</button>}
      </div>
    );
  }
}

StatusesWindow.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map),
  owned: React.PropTypes.instanceOf(immutable.List),
  statuses: React.PropTypes.instanceOf(immutable.List)
};

export default StatusesWindow;
