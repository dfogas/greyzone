import * as dicesActions from '../../../../dice/actions';
import Component from '../../../../components/component.react.js';
import React from 'react';

class ActionButton extends Component {
  rollDices() {
    const {diceslock} = this.props;
    if (!diceslock)
      dicesActions.rollAll();
  }

  render() {
    return (
      <input className='action-button' onClick={this.rollDices.bind(this)} type='button' value='Action - Dice Throw' />
    );
  }
}

ActionButton.propTypes = {
  diceslock: React.PropTypes.bool
};

export default ActionButton;
