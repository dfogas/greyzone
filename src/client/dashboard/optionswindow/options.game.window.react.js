import './options.game.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class OptionsGameWindow extends Component {
  loadGame() {
    // alert('Game loaded. Single player only.');
  }

  retire() {
    // alert('Retired. Organization ends. Should be available after certain missions and certain cash. Probably as one achievement.');
  }

  saveGame() {
    // alert('Game for current organization saved. Single player only.');
    // should save to WebStorage
  }

  startNewGame() {
    // alert('Are you sure Yes/No. New Game started. Started in single player. No two multiplayer games allowed.');
    // should
  }

  render() {
    return (
      <div id="OptionsGameWindow">
        <fieldset>
          <legend>Game Window</legend>
          <button id='RetireButton' onClick={this.retire}>Retire</button>
          <button id='StartAnewButton' onClick={this.startNewGame}>New game</button>
          <button id='SaveGameButton' onClick={this.saveGame}>Save game</button>
          <button id='LoadGameButton' onClick={this.loadGame}>Load game</button>
        </fieldset>
      </div>
    );
  }
}

export default OptionsGameWindow;
