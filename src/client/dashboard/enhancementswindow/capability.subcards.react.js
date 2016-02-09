import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import dayandtime from '../../lib/dayandtime';

import EnhancementList from '../../../server/lib/greyzone/enhancement.list';

class CapabilitySubCards extends Component {
  upgradeCapability() {
    const {capability} = this.props;
    const enhancement = capability.filter(enh => enh.get('name') === 'Top Class').get(0) ||
      capability.filter(enh => enh.get('name') === 'Higher Level').get(0) ||
      capability.filter(enh => enh.get('name') === 'Good Label').get(0) ||
      capability.filter(enh => enh.get('name') === 'Operation II.').get(0) ||
      capability.filter(enh => enh.get('name') === 'Operation I.').get(0);
    const name = enhancement.get('name');
    const capabilityList = EnhancementList.filter(enh => enh.type === 'capability');
    const nextlevel = (name === 'Operation I.' ? capabilityList[1] :
      name === 'Operation II.' ? capabilityList[2] :
      name === 'Good Label' ? capabilityList[3] :
      name === 'Higher Level' ? capabilityList[4] : null);
    dashboardActions.upgradeEnhancement(nextlevel);
    dashboardActions.log(dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Upgraded ' + name + ' to ' + nextlevel.name + '.');
  }

  render() {
    const {capability} = this.props;
    const enhancement = capability.filter(enh => enh.get('name') === 'Top Class').get(0) ||
      capability.filter(enh => enh.get('name') === 'Higher Level').get(0) ||
      capability.filter(enh => enh.get('name') === 'Good Label').get(0) ||
      capability.filter(enh => enh.get('name') === 'Operation II.').get(0) ||
      capability.filter(enh => enh.get('name') === 'Operation I.').get(0);
    const name = enhancement.get('name');
    const capabilityList = EnhancementList.filter(enh => enh.type === 'capability');
    const currentlevel = (name === 'Operation I.' ? capabilityList[0] :
      name === 'Operation II.' ? capabilityList[1] :
      name === 'Good Label' ? capabilityList[2] :
      name === 'Higher Level' ? capabilityList[3] : capabilityList[4]);
    const description = currentlevel.description;
    const nextlevel = (name === 'Operation I.' ? capabilityList[1] :
      name === 'Operation II.' ? capabilityList[2] :
      name === 'Good Label' ? capabilityList[3] :
      name === 'Higher Level' ? capabilityList[4] : null);
    const hasMaxed = enhancement.get('name') === 'Top Class';
    return (
      <div id='CapabilitySubCards'>
        <div className='capability-enhancement-card owned'>
          <div>{name}</div>
          <div>
            {!hasMaxed &&
              '$' + formatMoney(nextlevel.price.cash, 0, '.', ',')}
          </div>
          <div>
            {!hasMaxed && '\u{1f575}'}
            {!hasMaxed && nextlevel.price.contacts}</div>
          {!hasMaxed &&
            <button
              id='UpgradeLeaderhipEnhancement'
              onClick={this.upgradeCapability.bind(this)}
              >Upgrade</button>}
          <div>{description}</div>
          {hasMaxed &&
            'Max Level reached!'}
        </div>
      </div>
    );
  }
}

CapabilitySubCards.propTypes = {
  capability: React.PropTypes.instanceOf(immutable.List)
};

export default CapabilitySubCards;
