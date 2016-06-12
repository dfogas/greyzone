import './status.tier.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import StatusCard from './status.card.react';

class StatusTier extends Component {
  render() {
    const {statuses, statusesowned, tierdisplayed} = this.props;
    const tierstatuses = statuses.filter(status => status.get('tier') === tierdisplayed);
    return (
      <div id='StatusTier'>
        {tierstatuses.map(status => {
          return (
            <StatusCard
              status={status}
              owned={!!statusesowned.find(statusowned => statusowned.get('name') === status.get('name'))}
              />
          );
        })}
      </div>
    );
  }
}

export default StatusTier;
