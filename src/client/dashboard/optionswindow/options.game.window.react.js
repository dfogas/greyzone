import './options.game.window.styl';
import * as componentsActions from '../../components/actions';
import * as dashboardActions from '../actions';
import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import $ from 'jquery';

class OptionsGameWindow extends Component {
  loadGameOne() {
    // alert('Game loaded. Single player only.');
    optionsActions.loadGame(1);
    $('#OptionsWindow').append('<div id=\'LoadGameMessage\'>Game 1 has been loaded.</div>');
    $('#LoadGameMessage').hide(3000, () => $('#LoadGameMessage').remove());
  }

  loadGameTwo() {
    // alert('Game loaded. Single player only.');
    optionsActions.loadGame(2);
    $('#OptionsWindow').append('<div id=\'LoadGameMessage\'>Game 2 has been loaded.</div>');
    $('#LoadGameMessage').hide(3000, () => $('#LoadGameMessage').remove());
  }

  loadGameThree() {
    // alert('Game loaded. Single player only.');
    optionsActions.loadGame(3);
    $('#OptionsWindow').append('<div id=\'LoadGameMessage\'>Game 3 has been loaded.</div>');
    $('#LoadGameMessage').hide(3000, () => $('#LoadGameMessage').remove());
  }

  retireGame() {
    // alert('Retired. Organization ends. Should be available after certain missions and certain cash. Probably as one achievement.'); 
    dashboardActions.retireGame();
  }

  saveGameOne() {
    // alert('Game for current organization saved. Single player only.');
    // should save to WebStorage
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, 1);
    $('#OptionsWindow').append('<div id=\'SaveGameMessage\'>Game 1 has been saved.</div>');
    $('#SaveGameMessage').hide(3000, () => $('#SaveGameMessage').remove());
  }

  saveGameTwo() {
    // alert('Game for current organization saved to WebStorage. Single player only.');
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, 2);
    $('#OptionsWindow').append('<div id=\'SaveGameMessage\'>Game 2 has been saved.</div>');
    $('#SaveGameMessage').hide(3000, () => $('#SaveGameMessage').remove());
  }

  saveGameThree() {
    // alert('Game for current organization saved to WebStorage. Single player only.');
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, 3);
    $('#OptionsWindow').append('<div id=\'SaveGameMessage\'>Game 3 has been saved.</div>');
    $('#SaveGameMessage').hide(3000, () => $('#SaveGameMessage').remove());
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
