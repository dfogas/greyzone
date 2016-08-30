import './operations.upgrade.dialog.styl';
import * as dashboardActions from '../actions';
import * as talkEnhancementsActions from '../../talk/enhancements/actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import currentLevelOps from '../../lib/bml/currentlevelops';
import nextLevelOps from '../../lib/bml/nextlevelops';
import formatMoney from '../../lib/formatmoney';

class OperationsUpgradeDialog extends Component {
  upgradeEnhancement() {
    const {enhancements, list} = this.props;
    const nextlevel = nextLevelOps(enhancements, list);
    dashboardActions.upgradeEnhancement(nextlevel);
    talkEnhancementsActions.operationsUpgradeDialogToggle();
  }

  render() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelOps(enhancements);
    const nextlevel = nextLevelOps(enhancements, list);

    return (
      <div id='OperationsUpgradeDialog'>
        <u>Operations</u>
        <br />
        Current level is: {enhancement.get('name')}
        <br />
        Next level is: {nextlevel ? nextlevel.get('name') : enhancement.get('name')}
        <br />
        Costs to upgrade: {nextlevel &&
         '$' + formatMoney(nextlevel.getIn(['price', 'cash']), 0, '.', ',')}
        {nextlevel && '\u{1f575}' + nextlevel.getIn(['price', 'contacts'])}
        <br />
        Upgrade?
        <br />
        <br />
        <button id='OperationsUpgradeYes' onClick={this.upgradeEnhancement.bind(this)}>Yes</button>
        <button id='OperationsUpgradeNo' onClick={(e) => talkEnhancementsActions.operationsUpgradeDialogToggle()}>No</button>
      </div>
    );
  }
}

OperationsUpgradeDialog.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  list: React.PropTypes.instanceOf(immutable.List)
};

export default OperationsUpgradeDialog;
