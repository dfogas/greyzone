import './language.select.styl';
import Component from '../components/component.react';
import React from 'react';
import DropDown from 'react-dropdown-w-react13';
import immutable from 'immutable';

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
    const {i18n} = this.props;
    return (
      <DropDown
        onChange={this.languageSelect.bind(this)}
        options={options}
        placeholder='Language'
        value={i18n.get('locales') || 'Language'}
      />
    );
  }
}

LanguageSelect.propTypes = {
  i18n: React.PropTypes.instanceOf(immutable.Map)
};

export default LanguageSelect;
