import './progress.styl';
import Component from '../components/component.react.js';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class HelpMissionProgress extends Component {
  render() {
    return (
      <div className='help-mission-progress'>
        <FormattedHTMLMessage message={msg('help.missionProgressHtml')} />{' '}
      </div>
    );
  }
}

HelpMissionProgress.propTypes = {

};

export default HelpMissionProgress;
