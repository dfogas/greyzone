import './campaign.intro.styl';
import * as tutorialActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

class CampaignIntro extends Component {
  campaignIntroViewed() {
    const {campaign} = this.props;
    tutorialActions.campaignIntroViewed(campaign.get('name'));
  }

  render() {
    const {campaign} = this.props;
    return (
      <div id='CampaignIntro'>
        {campaign.get('selected') && msg('campaigns.' + campaign.get('name'))}
        <button onClick={this.campaignIntroViewed.bind(this)}>Go!</button>
      </div>
    );
  }
}

CampaignIntro.propTypes = {
  campaign: React.PropTypes.instanceOf(immutable.Map)
};

export default CampaignIntro;
