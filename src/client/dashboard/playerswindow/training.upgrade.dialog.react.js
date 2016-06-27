import './training.upgrade.dialog.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import currentLevelLdr from '../../lib/currentlevelldr';
import nextLevelLdr from '../../lib/nextlevelldr';
import formatMoney from '../../lib/formatmoney';
import immutable from 'immutable';

class TrainingUpgradeDialog extends Component {
  upgradeEnhancement() {
    const {enhancements, list} = this.props;
    const nextlevel = nextLevelLdr(enhancements, list);
    dashboardActions.upgradeEnhancement(nextlevel);
    dashboardActions.trainingUpgradeDialogToggle();
  }

  render() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelLdr(enhancements);
    const nextlevel = nextLevelLdr(enhancements, list);

    return (
      <div id='TrainingUpgradeDialog'>
        Current training level is: {enhancement.get('name')}
        <br />
        Next level of training is: {nextlevel ? nextlevel.get('name') : enhancement.get('name')}
        <br />
        Costs to upgrade: {nextlevel &&
           '$' + formatMoney(nextlevel.getIn(['price', 'cash']), 0, '.', ',')}
          {nextlevel && '\u{1f575}' + nextlevel.getIn(['price', 'contacts'])}}
        <br />
        Do you want to proceed with upgrade?
        <br />
        <button onClick={this.upgradeEnhancement.bind(this)}>Yes</button>
        <button onClick={(e) => dashboardActions.trainingUpgradeDialogToggle()}>No</button>
      </div>
    );
  }
}

export default TrainingUpgradeDialog;
