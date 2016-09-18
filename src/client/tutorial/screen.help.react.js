import './screen.help.styl';
import * as componentsActions from '../components/actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

import capitalLetter from '../lib/general/capitalletter';

class ScreenHelp extends Component {
  render() {
    const {context} = this.props; // in lowercase
    return (
      <div id={`${capitalLetter(context)}Tutorial`}>
        <FormattedHTMLMessage message={msg(`tutorial.${context}Screen`)} />
        <div
          className='screen-help-close-handle'
          onClick={(e) => componentsActions.screenHelpToggle(context)}></div>
      </div>
    );
  }
}

ScreenHelp.propTypes = {
  context: React.PropTypes.string
};

export default ScreenHelp;
