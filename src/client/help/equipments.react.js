import './equipments.styl';
import Component from '../components/component.react.js';
import React from 'react';
import {msg} from '../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

class HelpEquipments extends Component {
  render() {
    return (
      <div className='help-equipments'>
        <FormattedHTMLMessage message={msg('help.equipmentsHtml')} />{' '}
      </div>
    );
  }
}

HelpEquipments.propTypes = {

};

export default HelpEquipments;
