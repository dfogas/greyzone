import './statuses.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import R from 'ramda';
import immutable from 'immutable';

import StatusCard from './status.card.react';

class StatusesWindow extends Component {
  render() {
    const {statuses, owned} = this.props;
    const statusesnotowned = immutable.fromJS(R.without(owned.toJS(), statuses.toJS()));
    return (
      <div id='StatusesWindow'>
        {owned.map((status) => {
          return (
            <StatusCard
              owned={true}
              status={status}
              />
          );
        })}
        {statusesnotowned.map((status) => {
          return (
            <StatusCard
              owned={false}
              status={status}
              />
          );
        })}
      </div>
    );
  }
}

StatusesWindow.propTypes = {
  owned: React.PropTypes.instanceOf(immutable.List),
  statuses: React.PropTypes.instanceOf(immutable.List)
};

export default StatusesWindow;
