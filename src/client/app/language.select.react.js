import './language.select.styl';
import Component from '../components/component.react';
import React from 'react';
import DropDown from 'react-dropdown';

import * as intlActions from '../intl/actions';

class LanguageSelect extends Component {
  languageSelect(option) {
    intlActions.languageSelect(option.value);
  }

  render() {
    var options = [
      {value: 'en', label: 'English'},
      {value: 'cz', label: 'Czech'}
    ];
    return (
      <DropDown
        options={options}
        onChange={this.languageSelect.bind(this)}
        placeholder='Select language'
      />
    );
  }
}

LanguageSelect.propTypes = {

};

export default LanguageSelect;
