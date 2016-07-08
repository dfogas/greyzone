import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class NewGameButton extends Component {
  startNewGame() {
    const {jsonapi} = this.props;
    optionsActions.startNewGame(jsonapi);
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
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default NewGameButton;
