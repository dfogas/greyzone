import './facility.upgrade.dialog.styl';
import * as agentsActions from '../agents/actions';
import * as talkActions from '../dashboard/talk/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import formatMoney from '../lib/formatmoney';
import isExclusiveEnhancement from '../lib/bml/exclusiveenhancement';

class FacilityUpgradeDialog extends Component {
  enhancementBuy() {
    const {enhancement} = this.props;
    agentsActions.buyEnhancement(enhancement);
    setTimeout(talkActions.facilityUpgradeDialogClose(), 100);
  }

  closeDialog() {
    talkActions.facilityUpgradeDialogClose();
  }

  render() {
    const {enhancement, list, owned, paying} = this.props;
    const paid = paying ? paying.toJS() : null;
    const isPaying = paid ?
      Object.keys(paid).reduce((prev, curr) => {
        return paid[curr] || prev;
      }, false) : false;
    return (
      <div id='FacilityUpgradeDialog'>
        Facility Name: {enhancement.get('name')}
        <div><em>{enhancement.get('description')}</em></div>
        {!owned &&
          <div>Facility Cost: ${formatMoney(enhancement.getIn(['price', 'cash']), 0, '.', ',')}{'\u{1f575}'}{enhancement.getIn(['price', 'contacts'])}</div>}
        {!owned && ((isExclusiveEnhancement(enhancement, list) && isPaying) || !isExclusiveEnhancement(enhancement, list)) && <button
          className='enhancement-buy-button'
          onClick={this.enhancementBuy.bind(this)}>
          Buy
        </button>}
        <button
          className='close-facility-upgrade-dialog'
          onClick={this.closeDialog}>Close</button>
      </div>
    );
  }
}

FacilityUpgradeDialog.propTypes = {
  enhancement: React.PropTypes.instanceOf(immutable.Map),
  list: React.PropTypes.instanceOf(immutable.List),
  owned: React.PropTypes.bool,
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default FacilityUpgradeDialog;
