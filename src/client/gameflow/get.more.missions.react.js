import './get.more.missions.styl'; //
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

class GetMoreMissions extends Component {
  render() {
    const {jsonapi} = this.props;
    const goalcomplete = jsonapi.get('enhancements').filter(enh =>
      enh.get('missiontag') === 'anolddebt' ||
      enh.get('missiontag') === 'bankrobbery' ||
      enh.get('missiontag') === 'destroyevidence' ||
      enh.get('missiontag') === 'afriendininnercircle' ||
      enh.get('missiontag') === 'prisonbreak'
    ).size === 5;

    return (
      <ul
        className={goalcomplete ? 'done' : ''}
        id='GetMoreMissions'
        >{msg('tutorial.goals.getmoremissions')}
        <li className={`get-more-missions ${jsonapi.get('enhancements').find(enh => enh.get('missiontag') === 'anolddebt') ? 'done' : ''}`}>
          Get An Old Debt mission</li>
        <li className={`get-more-missions ${jsonapi.get('enhancements').find(enh => enh.get('missiontag') === 'bankrobbery') ? 'done' : ''}`}>
          Get Bank Robbery mission</li>
        <li className={`get-more-missions ${jsonapi.get('enhancements').find(enh => enh.get('missiontag') === 'destroyevidence') ? 'done' : ''}`}>
          Get Destroy Evidence mission</li>
        <li className={`get-more-missions ${jsonapi.get('enhancements').find(enh => enh.get('missiontag') === 'afriendininnercircle') ? 'done' : ''}`}>
          Get An Inner Circle mission</li>
        <li className={`get-more-missions ${jsonapi.get('enhancements').find(enh => enh.get('missiontag') === 'prisonbreak') ? 'done' : ''}`}>
          Get Prison Break mission</li>
      </ul>
    );
  }
}

GetMoreMissions.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default GetMoreMissions;
