import * as talkEnhancementsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class EnhancementTalkChoice extends Component {
  choiceNo() {
    talkEnhancementsActions.closeEnhancementTalk();
  }

  choiceYes() {
    const {dashboard} = this.props;
    talkEnhancementsActions.buyEnhancement(dashboard.get('enhancementtalk'));
  }

  render() {
    const {dashboard} = this.props;
    return (
      <div id='EnhancementTalkChoiceWrapper'>
        <FormattedHTMLMessage message={msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.choice.text')} />
        <button
          id='EnhancementTalkChoiceYes'
          onClick={this.choiceYes.bind(this)}>{msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.choice.button1')}</button>
        <button
          id='EnhancementTalkChoiceNo'
          onClick={this.choiceNo}>{msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.choice.button2')}</button>
      </div>
    );
  }
}

EnhancementTalkChoice.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map)
};

export default EnhancementTalkChoice;
