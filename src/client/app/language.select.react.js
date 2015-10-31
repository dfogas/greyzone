import './language.select.styl';
import Component from '../components/component.react';
import React from 'react';
import Select from 'react-select';

import * as appActions from './actions';

class LanguageSelect extends Component {
  languageSelect(val) {
    appActions.languageSelect(val);
  }

  render() {
    const {i18n} = this.props;
    var options = [
      {value: 'en', label: 'English'},
      {value: 'cz', label: 'Czech'}
    ];
    return (
      <Select
        options={options}
        onChange={this.languageSelect.bind(this)}
        value='English'
      />
    );
  }
}

LanguageSelect.propTypes = {

};

export default LanguageSelect;
