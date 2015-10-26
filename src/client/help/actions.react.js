// import './actions.styl';
import Component from '../components/component.react.js';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class HelpMissionActions extends Component {
  render() {
    return (
      <div className='help-mission-actions'>
        <FormattedHTMLMessage message={msg('help.actionsHtml')} />{' '}
      </div>
    );
  }
}

HelpMissionActions.propTypes = {

};

export default HelpMissionActions;
