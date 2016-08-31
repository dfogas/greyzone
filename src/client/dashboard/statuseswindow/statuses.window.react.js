import './statuses.window.styl';
// import * as dashboardActions from '../actions';
import * as statusesActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import isTierComplete from '../../lib/bml/istiercomplete';

import Pointer from '../pointer.react';
import StatusesIntro from './statuses.intro.react';
import StatusTier from './status.tier.react';
import StatusesTierComplete from './statuses.tier.complete.react';
import ShiftUp from './shift.up.react';
import ShiftDown from './shift.down.react';

class StatusesWindow extends Component {
  render() {
    const {dashboard, statuses, owned} = this.props;
    const tierdisplayed = dashboard.getIn(['statuses', 'tierdisplayed']) || 1;
    return (
      <div id='StatusesWindow'>
        <div id='StatusesWindowLabel'>{msg('dashboard.statuses.window.label')}</div>
        <StatusTier
          statuses={statuses}
          statusesowned={owned}
          tierdisplayed={dashboard.getIn(['statuses', 'tierdisplayed']) || 1}
          />
        <Pointer pointsto='strategical' />
        {dashboard.getIn(['statuses', 'tierdisplayed']) > 1 &&
          <ShiftUp tierdisplayed={tierdisplayed} />}
        {(dashboard.getIn(['statuses', 'tierdisplayed']) < 4 || typeof dashboard.getIn(['statuses', 'tierdisplayed']) === 'undefined') &&
          <ShiftDown
            tierdisplayed={tierdisplayed}
            />}
        {!dashboard.getIn(['statuses', 'intro']) &&
          <StatusesIntro />}
        {dashboard.getIn(['statuses', 'intro']) &&
          <button
            id='StatusesHistoryButton'
            onClick={(e) => statusesActions.statusesIntroToggle()}>Show Intro</button>}
        {isTierComplete(tierdisplayed, owned, statuses) &&
          <button
            id='StatusesTierCompleteButton'
            onClick={(e) => statusesActions.tierCursorChange(tierdisplayed)}>{`View DV#${tierdisplayed}`}</button>}
        {dashboard.getIn(['statuses', 'tiercomplete']) &&
          <StatusesTierComplete
            tierdisplayed={tierdisplayed}
          />}
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
