import './campaigns.active.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class CampaignsActive extends Component {
  render() {
    const {campaigns} = this.props;
    return (
      <div id='OptionsCampaignsActive'>
        <fieldset>
          <legend>Active Campaigns</legend>
          {campaigns &&
            Object.keys(campaigns.toJS()).map(campaign => {
              return (
                <div className='options-active-campaign'>
                  {campaigns.getIn([campaign, 'selected']) &&
                    <div className={'options-active-campaign-box selected'}></div>}
                  {!campaigns.getIn([campaign, 'selected']) &&
                    <div className={'options-active-campaign-box'}></div>}
                  <span>{campaigns.getIn([campaign, 'name'])}</span>
                </div>
              );
            })}
        </fieldset>
      </div>
    );
  }
}

CampaignsActive.propTypes = {
  campaigns: React.PropTypes.instanceOf(immutable.Map)
};

export default CampaignsActive;
