import * as talkEnhancementsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class EnhancementTalkAcknowledgement extends Component {

  render() {
    const {dashboard} = this.props;
    return (
      <div id='EnhancementTalkAcknowledgementWrapper'>
        <FormattedHTMLMessage message={msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.acknowledgement.text')} />
        <button
          id='EnhancementTalkAcknowledgementButton'
          onClick={(e) => talkEnhancementsActions.closeEnhancementTalk()}>{msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.acknowledgement.button')}</button>
      </div>
    );
  }
}

EnhancementTalkAcknowledgement.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map)
};

export default EnhancementTalkAcknowledgement;
