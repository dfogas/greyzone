import './statuses.window.styl';
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
      <div id={`StatusesWindow${tierdisplayed}`}>
        <div id='StatusesWindowLabel'>{msg('dashboard.statuses.window.label')}</div>
        <Pointer pointsto='strategical' />
        {dashboard.getIn(['statuses', 'tier']) &&
          <StatusTier
            statuses={statuses}
            statusesowned={owned}
            tierdisplayed={dashboard.getIn(['statuses', 'tierdisplayed']) || 1}
            />}
        {dashboard.getIn(['statuses', 'tierdisplayed']) > 1
          && dashboard.getIn(['statuses', 'tier'])
          && <ShiftUp tierdisplayed={tierdisplayed} />}
        {(dashboard.getIn(['statuses', 'tierdisplayed']) < 4 || typeof dashboard.getIn(['statuses', 'tierdisplayed']) === 'undefined')
          && dashboard.getIn(['statuses', 'tier'])
          && <ShiftDown tierdisplayed={tierdisplayed} />}
        {!dashboard.getIn(['statuses', 'intro']) &&
          <StatusesIntro />}
        {true &&
          <div
            id='StatusesHistoryToggle'
            onClick={(e) => statusesActions.statusesIntroToggle()}></div>}
        {true &&
          <div
            id='TierShownToggle'
            onClick={(e) => statusesActions.statusesTierToggle()}></div>}
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
