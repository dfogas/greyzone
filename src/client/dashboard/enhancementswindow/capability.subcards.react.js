import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import dayandtime from '../../lib/dayandtime';
import currentLevelOps from '../../lib/currentlevelops';
import nextLevelOps from '../../lib/nextlevelops';

class CapabilitySubCards extends Component {
  upgradeCapability() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelOps(enhancements);
    const nextlevel = nextLevelOps(enhancements, list);
    dashboardActions.upgradeEnhancement(nextlevel);
    dashboardActions.log(dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Upgraded ' + enhancement.get('name') + ' to ' + nextlevel.get('name') + '.');
  }

  render() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelOps(enhancements);
    const nextlevel = nextLevelOps(enhancements, list);
    return (
      <div
        id='CapabilitySubCards'
        >
        <div className='capability-enhancement-card owned'>
          <div>{enhancement.get('name')}</div>
          <div>{enhancement.get('description')}</div>
          {nextlevel &&
              <div>Upgrade to {nextlevel.get('name')}</div>}
          <div>
             For {nextlevel &&
              '$' + formatMoney(nextlevel.getIn(['price', 'cash']), 0, '.', ',')}
              {nextlevel && '\u{1f575}'}
            {nextlevel && nextlevel.getIn(['price', 'contacts'])}</div>
          {nextlevel &&
            <button
              id='UpgradeLeadershipEnhancement'
              onClick={this.upgradeCapability.bind(this)}
              >Upgrade</button>}
          {!nextlevel &&
            'Max Level reached!'}
        </div>
      </div>
    );
  }
}

CapabilitySubCards.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  list: React.PropTypes.instanceOf(immutable.List)
};

export default CapabilitySubCards;
