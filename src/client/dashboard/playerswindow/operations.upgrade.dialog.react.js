import './operations.upgrade.dialog.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import currentLevelOps from '../../lib/currentlevelops';
import nextLevelOps from '../../lib/nextlevelops';
import formatMoney from '../../lib/formatmoney';

class OperationsUpgradeDialog extends Component {
  upgradeEnhancement() {
    const {enhancements, list} = this.props;
    const nextlevel = nextLevelOps(enhancements, list);
    dashboardActions.upgradeEnhancement(nextlevel);
    dashboardActions.operationsUpgradeDialogToggle();
  }

  render() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelOps(enhancements);
    const nextlevel = nextLevelOps(enhancements, list);
    return (
      <div id='OperationsUpgradeDialog'>
        Current operations level is: {enhancement.get('name')}
        <br />
        Next operations level is: {nextlevel ? nextlevel.get('name') : enhancement.get('name')}
        <br />
        Costs to upgrade: {nextlevel &&
         '$' + formatMoney(nextlevel.getIn(['price', 'cash']), 0, '.', ',')}
        {nextlevel && '\u{1f575}' + nextlevel.getIn(['price', 'contacts'])}}
        <br />
        Do you want to proceed with upgrade?
        <br />
        <button onClick={this.upgradeEnhancement.bind(this)}>Yes</button>
        <button onClick={(e) => dashboardActions.operationsUpgradeDialogToggle()}>No</button>
      </div>
    );
  }
}

OperationsUpgradeDialog.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  list: React.PropTypes.instanceOf(immutable.List)
};

export default OperationsUpgradeDialog;
