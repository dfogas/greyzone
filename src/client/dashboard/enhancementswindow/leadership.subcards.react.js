import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';

import EnhancementList from '../../../server/lib/greyzone/enhancement.list';

class LeadershipSubCards extends Component {
  upgradeLeadership() {
    const {leadership} = this.props;
    const enhancement = leadership.filter(enh => enh.get('name') === 'Focus Training II.').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Focus Training I.').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Training Grounds').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Crash Course').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Basic Training').get(0);
    const name = enhancement.get('name');
    const leadershipList = EnhancementList.filter(enh => enh.type === 'leadership');
    const nextlevel = (name === 'Basic Training' ? leadershipList[1] :
      name === 'Crash Course' ? leadershipList[2] :
      name === 'Training Grounds' ? leadershipList[3] :
      name === 'Focus Training I.' ? leadershipList[4] : null);
    dashboardActions.upgradeEnhancement(nextlevel);
  }

  render() {
    const {leadership} = this.props;
    const enhancement = leadership.filter(enh => enh.get('name') === 'Focus Training II.').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Focus Training I.').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Training Grounds').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Crash Course').get(0) ||
      leadership.filter(enh => enh.get('name') === 'Basic Training').get(0);
    const name = enhancement.get('name');
    const leadershipList = EnhancementList.filter(enh => enh.type === 'leadership');
    const nextlevel = (name === 'Basic Training' ? leadershipList[1] :
      name === 'Crash Course' ? leadershipList[2] :
      name === 'Training Grounds' ? leadershipList[3] :
      name === 'Focus Training I.' ? leadershipList[4] : null);
    const hasMaxed = enhancement.get('name') === 'Focus Training II.';
    return (
      <div id='LeadershipSubCards'>
        <div
          className='enhancement-card owned'
          >
          <div>{name}</div>
          <div>
            {!hasMaxed &&
              '$' + formatMoney(nextlevel.price.cash, 0, '.', ',')}
          </div>
          <div>
            {!hasMaxed && '\u03A9'}
            {!hasMaxed && nextlevel.price.contacts}</div>
          {!hasMaxed &&
            <button
              id='UpgradeLeaderhipEnhancement'
              onClick={this.upgradeLeadership.bind(this)}
              >Upgrade</button>}
          {hasMaxed &&
            'Max Level reached!'}
        </div>
      </div>
    );
  }
}

LeadershipSubCards.propTypes = {
  leadership: React.PropTypes.instanceOf(immutable.List)
};

export default LeadershipSubCards;
