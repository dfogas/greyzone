import './options.game.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class OptionsGameWindow extends Component {
  loadGame() {
    // alert('Game loaded. Single player only.');
    dashboardActions.loadGame();
  }

  retireGame() {
    // alert('Retired. Organization ends. Should be available after certain missions and certain cash. Probably as one achievement.');
    dashboardActions.retireGame();
  }

  saveGame() {
    // alert('Game for current organization saved. Single player only.');
    // should save to WebStorage
    const {jsonapi} = this.props;
    dashboardActions.saveGame(jsonapi);
  }

  render() {
    return (
      <div id="OptionsGameWindow">
        <fieldset>
          <legend>Game Window</legend>
          <button id='RetireButton' onClick={this.retireGame}>Retire</button>
          <button id='SaveGameButton' onClick={this.saveGame.bind(this)}>Save game</button>
          <button id='LoadGameButton' onClick={this.loadGame}>Load game</button>
        </fieldset>
      </div>
    );
  }
}

OptionsGameWindow.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsGameWindow;
