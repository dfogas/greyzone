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
    const {campaigns} = this.props;

    return (
      <div id='ChooseCampaign'>
        <fieldset>
          <legend>Choose Campaigns</legend>
          <label><input checked={campaigns ? campaigns.getIn(['dolcevita', 'selected']) : false} name='dolcevita' onChange={(e) => this.toggleCampaign(e)} type='checkbox' />Dolce Vita</label>
          <label><input checked={campaigns ? campaigns.getIn(['collector', 'selected']) : false} name='collector' onChange={(e) => this.toggleCampaign(e)} type='checkbox' />Collector</label>
          <label><input checked={campaigns ? campaigns.getIn(['revenge', 'selected']) : false} name='revenge' onChange={(e) => this.toggleCampaign(e)} type='checkbox' />Revenge</label>
        </fieldset>
        <button onClick={this.confirmCampaignsSelection}>Confirm</button>
      </div>
    );
  }
}

ChooseCampaign.propTypes = {
  campaigns: React.PropTypes.instanceOf(immutable.Map)
};

export default ChooseCampaign;
