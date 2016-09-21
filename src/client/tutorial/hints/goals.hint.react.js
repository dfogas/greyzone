import './goals.hint.styl';
import Component from '../../components/component.react';
import React from 'react';

class GoalsHint extends Component {
  render() {
    return (
      <div id='GoalsHint'>
        <div id='GoalsHintText'>
          For successfull finish of the game
          you have to complete listed goals.
        </div>
      </div>
    );
  }
}

export default GoalsHint;
