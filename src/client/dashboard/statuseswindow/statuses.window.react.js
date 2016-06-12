import './statuses.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import R from 'ramda';
import uuid from '../../lib/guid';
import {msg} from '../../intl/store';

import StatusCard from './status.card.react';
import StatusesIntro from './statuses.intro.react';
import StatusTier from './status.tier.react';
import ShiftUp from './shift.up.react';
import ShiftDown from './shift.down.react';

class StatusesWindow extends Component {
  render() {
    const {dashboard, statuses, owned} = this.props;
    const statusesnotowned = immutable.fromJS(R.without(owned.toJS(), statuses.toJS()));
    return (
      <div id='StatusesWindow'>
        <div id='StatusesWindowLabel'>{msg('dashboard.statuses.window.label')}</div>
        {/*<div id='StatusesFilmBand'>
          {owned.map((status) => {
            return (
              <StatusCard
                key={uuid() + 'statusowned'}
                owned={true}
                status={status}
                />
            );
          })}
          {statusesnotowned.map((status) => {
            return (
              <StatusCard
                key={uuid() + 'status'}
                owned={false}
                status={status}
                />
            );
          })}
        </div>*/}
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
