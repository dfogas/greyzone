import './facility.upgrade.dialog.styl';
import * as dashboardActions from '../dashboard/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import formatMoney from '../lib/formatmoney';
import isExclusiveEnhancement from '../lib/exclusiveenhancement';

class FacilityUpgradeDialog extends Component {
  enhancementBuy() {
    const {enhancement} = this.props;
    dashboardActions.buyEnhancement(enhancement);
    setTimeout(dashboardActions.facilityUpgradeDialogClose(), 100);
  }

  closeDialog() {
    dashboardActions.facilityUpgradeDialogClose();
  }

  render() {
    const {enhancement, owned, paying} = this.props;
    const isPaying = paying ?
      Object.keys(paying).reduce((prev, curr, index, array) => {
        return paying[curr] || prev;
      }, false) : false;
    return (
      <div id='FacilityUpgradeDialog'>
        Facility Name: {enhancement.get('name')}
        <div><em>{enhancement.get('description')}</em></div>
        {!owned &&
          <div>Facility Cost: ${formatMoney(enhancement.getIn(['price', 'cash']), 0, '.', ',')}{'\u{1f575}'}{enhancement.getIn(['price', 'contacts'])}</div>}
        {!owned && ((isExclusiveEnhancement(enhancement) && isPaying) || !isExclusiveEnhancement(enhancement)) && <button
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
  owned: React.PropTypes.bool,
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default FacilityUpgradeDialog;
