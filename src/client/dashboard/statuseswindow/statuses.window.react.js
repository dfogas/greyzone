import './statuses.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import R from 'ramda';
import uuid from '../../lib/guid';

import StatusCard from './status.card.react';

class StatusesWindow extends Component {
  render() {
    const {statuses, owned} = this.props;
    const statusesnotowned = immutable.fromJS(R.without(owned.toJS(), statuses.toJS()));
    return (
      <div id='StatusesWindow'>
        <div id='StatusesFilmBand'>
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
        </div>
      </div>
    );
  }
}

StatusesWindow.propTypes = {
  owned: React.PropTypes.instanceOf(immutable.List),
  statuses: React.PropTypes.instanceOf(immutable.List)
};

export default StatusesWindow;
