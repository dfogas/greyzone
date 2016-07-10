import './choose.campaign.styl';
import * as tutorialActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class ChooseCampaign extends Component {
  confirmCampaignsSelection() {
    tutorialActions.confirmCampaignsSelection();
  }

  toggleCampaign(e) {
    tutorialActions.toggleCampaign(e.target.name, e.target.checked);
  }

  render() {
    const {campaigns, paying} = this.props;
    // const paid = paying ? paying.toJS() : null;
    // const isPaying = paid ?
    //   Object.keys(paid).reduce((prev, curr) => {
    //     return paid[curr] || prev;
    //   }, false) : false;
    return (
      <div id='ChooseCampaign'>
        <fieldset>
          <legend>Choose Campaigns</legend>
          <label>
            <input
              checked={campaigns ? campaigns.getIn(['dolcevita', 'selected']) : false}
              name='dolcevita' onChange={(e) => this.toggleCampaign(e)}
              type='checkbox' />Dolce Vita</label>
          <label>
            <input
              checked={campaigns ? campaigns.getIn(['collector', 'selected']) : false}
              disabled={!paying.get('collector')}
              name='collector' onChange={(e) => this.toggleCampaign(e)}
              type='checkbox' />Collector</label>
          <label>
            <input
              checked={campaigns ? campaigns.getIn(['revenge', 'selected']) : false}
              disabled={!paying.get('revenge')}
              name='revenge' onChange={(e) => this.toggleCampaign(e)}
              type='checkbox' />Revenge</label>
        </fieldset>
        <button onClick={this.confirmCampaignsSelection}>Confirm</button>
      </div>
    );
  }
}

ChooseCampaign.propTypes = {
  campaigns: React.PropTypes.instanceOf(immutable.Map),
  paying: React.PropTypes.instanceOf(immutable.Map)
};

export default ChooseCampaign;
