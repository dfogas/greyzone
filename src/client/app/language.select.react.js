import './language.select.styl';
import Component from '../components/component.react';
import React from 'react';
import Select from 'react-select';

import * as intlActions from '../intl/actions';

class LanguageSelect extends Component {
  languageSelect(val) {
    intlActions.languageSelect(val);
  }

  render() {
    const {i18n} = this.props;
    var options = [
      {value: 'en', label: 'English'},
      {value: 'cz', label: 'Czech'}
    ];
    return (
      <Select
        className='language-select'
        options={options}
        onChange={this.languageSelect.bind(this)}
      />
    );
  }
}

LanguageSelect.propTypes = {

};

export default LanguageSelect;
