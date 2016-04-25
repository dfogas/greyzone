import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import dayandtime from '../../lib/dayandtime';

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
    dashboardActions.log(dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Upgraded ' + name + ' to ' + nextlevel.name + '.');
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
    const currentlevel = (name === 'Basic Training' ? leadershipList[0] :
      name === 'Crash Course' ? leadershipList[1] :
      name === 'Training Grounds' ? leadershipList[2] :
      name === 'Focus Training I.' ? leadershipList[3] : leadershipList[4]);
    const description = currentlevel.description;
    const nextlevel = (name === 'Basic Training' ? leadershipList[1] :
      name === 'Crash Course' ? leadershipList[2] :
      name === 'Training Grounds' ? leadershipList[3] :
      name === 'Focus Training I.' ? leadershipList[4] : null);
    const hasMaxed = enhancement.get('name') === 'Focus Training II.';
    return (
      <div
        id='LeadershipSubCards'
        onMouseLeave={(e) => this.unfocusEnhancement(e)}
        onMouseOver={(e) => this.focusEnhancement(e)}
        >
        <div
          className='leadership-enhancement-card owned'
          >
          <div>{name}</div>
          <div>{description}</div>
          <div>Upgrades to {nextlevel.name}</div>
          <div>
            For {!hasMaxed &&
              '$' + formatMoney(nextlevel.price.cash, 0, '.', ',')}
            {!hasMaxed && '\u{1f575}'}
            {!hasMaxed && nextlevel.price.contacts}
          </div>
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
