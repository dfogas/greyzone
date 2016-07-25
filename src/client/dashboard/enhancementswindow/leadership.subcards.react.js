import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';
import currentLevelLdr from '../../lib/currentlevelldr';
import nextLevelLdr from '../../lib/nextlevelldr';
import dayandtime from '../../lib/dayandtime';

class LeadershipSubCards extends Component {
  upgradeLeadership() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelLdr(enhancements);
    const nextlevel = nextLevelLdr(enhancements, list);
    dashboardActions.upgradeEnhancement(nextlevel);
    dashboardActions.log(dayandtime(Date.now(), new Date().getTimezoneOffset()) + ' - Upgraded ' + enhancement.get('name') + ' to ' + nextlevel.get('name') + '.');
  }

  render() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelLdr(enhancements);
    const nextlevel = nextLevelLdr(enhancements, list);
    return (
      <div
        id='LeadershipSubCards'
        >
        <div
          className='leadership-enhancement-card owned'
          >
          <div>{enhancement.get('name')}</div>
          <div>{enhancement.get('description')}</div>
          {nextlevel &&
            <div>Upgrades to {nextlevel.get('name')}</div>}
          <div>
            For {nextlevel &&
              '$' + formatMoney(nextlevel.getIn(['price', 'cash']), 0, '.', ',')}
            {nextlevel && '\u{1f575}'}
            {nextlevel && nextlevel.getIn(['price', 'contacts'])}
          </div>
          {nextlevel &&
            <button
              id='UpgradeLeaderhipEnhancement'
              onClick={this.upgradeLeadership.bind(this)}
              >Upgrade</button>}
          {!nextlevel &&
            'Max Level reached!'}
        </div>
      </div>
    );
  }
}

LeadershipSubCards.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  list: React.PropTypes.instanceOf(immutable.List)
};

export default LeadershipSubCards;
