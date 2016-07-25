import './enhancement.talk.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import {msg} from '../../intl/store';

import EnhancementTalkAcknowledgement from './enhancement.talk.acknowledgement.react';
import EnhancementTalkChoice from './enhancement.talk.choice.react';
import EnhancementTalkDialog from './enhancement.talk.dialog.react';

class EnhancementTalk extends Component {
  render() {
    const {jsonapi} = this.props;
    const dashboard = jsonapi.get('dashboard');
    return (
      <div id='EnhancementTalk'>
        {dashboard.get('enhancementtalkindex') === 'acknowledgement' &&
          <EnhancementTalkAcknowledgement
            dashboard={dashboard}
            />}
        {dashboard.get('enhancementtalkindex') === 'choice' &&
          <EnhancementTalkChoice
            dashboard={dashboard}
            />}
        {dashboard.get('enhancementtalkindex') === 'dialog' &&
          <EnhancementTalkDialog
            dashboard={dashboard} />}
      </div>
    );
  }
}

EnhancementTalk.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default EnhancementTalk;
