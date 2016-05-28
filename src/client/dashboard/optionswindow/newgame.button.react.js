import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';

class NewGameButton extends Component {
  startNewGame() {
    const {userId, name} = this.props;
    optionsActions.startNewGame(userId, name);
  }

  render() {
    return (
      <button
        id='StartAnewButton'
        onClick={this.startNewGame.bind(this)}>New game</button>
    );
  }
}

NewGameButton.propTypes = {
  name: React.PropTypes.string,
  userId: React.PropTypes.string
};

export default NewGameButton;
