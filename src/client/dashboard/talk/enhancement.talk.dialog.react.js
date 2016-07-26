import * as talkActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class EnhancementTalkDialog extends Component {
  dialogToChoice() {
    talkActions.dialogToChoice();
  }

  render() {
    const {dashboard} = this.props;
    return (
      <div id='EnhancementTalkDialogWrapper'>
        <FormattedHTMLMessage message={msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.dialog.text')} />
        <button
          id='EnhancementTalkDialogButton'
          onClick={this.dialogToChoice}>{msg('agents.enhancements.' + dashboard.get('enhancementtalk') + '.dialog.button')}</button>
      </div>
    );
  }
}

EnhancementTalkDialog.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map)
};

export default EnhancementTalkDialog;
