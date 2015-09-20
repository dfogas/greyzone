import Component from '../components/component.react';
import React from 'react';

class InfoCardBackButton extends Component {
  render() {
    return (
      <input id='InfoContentBackButton' type="button" value="Back to CC" />
    );
  }
}

InfoCardBackButton.propTypes = {
  url: React.PropTypes.string
};

export default InfoCardBackButton;
