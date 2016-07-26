import './training.upgrade.dialog.styl';
import * as dashboardActions from '../actions';
import * as talkActions from '../talk/actions';
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
    talkActions.trainingUpgradeDialogToggle();
  }

  render() {
    const {enhancements, list} = this.props;
    const enhancement = currentLevelLdr(enhancements);
    const nextlevel = nextLevelLdr(enhancements, list);

    return (
      <div id='TrainingUpgradeDialog'>
        <u>Training</u>
        <br />
        Current level is {enhancement.get('name')}
        <br />
        Next level is {nextlevel ? nextlevel.get('name') : enhancement.get('name')}
        <br />
        Costs to upgrade: {nextlevel &&
           '$' + formatMoney(nextlevel.getIn(['price', 'cash']), 0, '.', ',')}
          {nextlevel && '\u{1f575}' + nextlevel.getIn(['price', 'contacts'])}
        <br />
        Upgrade?
        <br />
        <br />
        <button id='TrainingUpgradeYes' onClick={this.upgradeEnhancement.bind(this)}>Yes</button>
        <button id='TrainingUpgradeNo' onClick={(e) => talkActions.trainingUpgradeDialogToggle()}>No</button>
      </div>
    );
  }
}

TrainingUpgradeDialog.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.Map),
  list: React.PropTypes.instanceOf(immutable.List)
};

export default TrainingUpgradeDialog;
