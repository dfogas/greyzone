import './options.game.window.styl';
import * as endGameActions from '../endgame/actions';
import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class OptionsGameWindow extends Component {
  loadGameOne() {
    optionsActions.loadGame(1);
  }

  loadGameTwo() {
    optionsActions.loadGame(2);
  }

  loadGameThree() {
    optionsActions.loadGame(3);
  }

  retireGame() {
    // alert('Retired. Organization ends. Should be available after certain missions and certain cash. Probably as one achievement.');
    endGameActions.retireGame();
  }

  saveGameOne() {
    // should save to WebStorage
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, 1);
  }

  saveGameTwo() {
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, 2);
  }

  saveGameThree() {
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, 3);
  }

  render() {
    const {jsonapi} = this.props;
    const paying = jsonapi.get('paying') ? jsonapi.get('paying').toJS() : null;
    const isPaying = paying ?
      Object.keys(paying).reduce((prev, curr, index, array) => {
        return paying[curr] || prev;
      }, false) : false;
    return (
      <div id="OptionsGameWindow">
        <fieldset>
          <legend>Game Window</legend>
          <button id='RetireButton' onClick={this.retireGame}>Retire</button>
          <br />
          <button className='save-game-button' onClick={this.saveGameOne.bind(this)}>Save game 1</button>
          {isPaying &&
            <button className='save-game-button' onClick={this.saveGameTwo.bind(this)}>Save game 2</button>}
          {isPaying &&
            <button className='save-game-button' onClick={this.saveGameThree.bind(this)}>Save game 3</button>}
          <br />
          <button className='load-game-button' onClick={this.loadGameOne}>Load game 1</button>
          {isPaying &&
            <button className='load-game-button' onClick={this.loadGameTwo}>Load game 2</button>}
          {isPaying &&
            <button className='load-game-button' onClick={this.loadGameThree}>Load game 3</button>}
        </fieldset>
      </div>
    );
  }
}

OptionsGameWindow.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsGameWindow;
