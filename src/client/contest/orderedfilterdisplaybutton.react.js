import Component from '../components/component.react.js';
import React from 'react';

class OrderedFilterDisplayButton extends Component {
  render() {
    var buttontext = this.props.text;
    return (
      <input className='ordered-filter-display-button' type='button' value={buttontext} />
    );
  }
}

OrderedFilterDisplayButton.propTypes = {
  text: React.PropTypes.string
};

export default OrderedFilterDisplayButton;
