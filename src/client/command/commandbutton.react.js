import Component from '../components/component.react';
import React from 'react';

class CommandButton extends Component {
  render() {
    let buttonValue = this.props.text ? this.props.text : 'TBD';
    return (
      <input className='command-button' type='button' value={buttonValue} />
    );
  }
}

CommandButton.propTypes = {
  text: React.PropTypes.string
};


export default CommandButton;
