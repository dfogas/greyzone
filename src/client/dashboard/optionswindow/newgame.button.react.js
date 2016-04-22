import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class NewGameButton extends Component {
  startNewGame() {
    const {userId, name} = this.props;
    dashboardActions.startNewGame(userId, name);
  }

  render() {
    const {userId, name} = this.props;
    return (
      <button
        id='StartAnewButton'
        onClick={this.startNewGame.bind(this)}>New game</button>
    );
  }
}

export default NewGameButton;
