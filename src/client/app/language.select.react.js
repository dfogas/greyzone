import './language.select.styl';
import Component from '../components/component.react';
import React from 'react';
import DropDown from 'react-dropdown-w-react13';

import * as intlActions from '../intl/actions';

class LanguageSelect extends Component {
  languageSelect(option) {
    intlActions.languageSelect(option.value);
  }

  render() {
    var options = [
      // {value: 'cz', label: 'Czech'},
      {value: 'en', label: 'English'}
    ];
    return (
      <DropDown
        onChange={this.languageSelect.bind(this)}
        options={options}
        placeholder='Select language'
      />
    );
  }
}

LanguageSelect.propTypes = {

};

export default LanguageSelect;
