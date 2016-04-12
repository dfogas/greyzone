import './options.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DebugWindow from './debug.window.react';

class OptionsWindow extends Component {
  changeOption(e) {
    dashboardActions.changeOption(e.target.name, e.target.checked);
  }

  loadGame() {
    // alert('Game loaded. Single player only.');
  }

  retire() {
    // alert('Retired. Organization ends. Should be available after certain missions and certain cash. Probably as one achievement.');
  }

  saveGame() {
    // alert('Game for current organization saved. Single player only.');
  }

  startNewGame() {
    // alert('Are you sure Yes/No. New Game started. Started in single player. No two multiplayer games allowed.');
  }

  render() {
    const {options} = this.props;
    const tutorial = options.get('tutorial');
    const multiplayer = options.get('multiplayer');
    const tipsenable = options.get('tipsenable');
    const debug = options.get('debug');
    const animations = options.get('animations');
    const soundeffects = options.get('soundeffects');
    return (
      <div id='OptionsWindow'>
        <label><input checked={multiplayer} name='multiplayer' onChange={e => this.changeOption(e)} type='checkbox' />Multiplayer</label>
        <label><input checked={tutorial} name='tutorial' onChange={e => this.changeOption(e)} type='checkbox' />Tutorial</label>
        <label><input checked={tipsenable} name='tipsenable' onChange={e => this.changeOption(e)} type='checkbox' />Tips</label>
        <label><input checked={debug} name='debug' onChange={e=> this.changeOption(e)} type='checkbox' />Debug Mode</label>
        <label><input checked={animations} name='animations' onChange={e=> this.changeOption(e)} type='checkbox' />Animations</label>
        <label><input checked={soundeffects} name='soundeffects' onChange={e=> this.changeOption(e)} type='checkbox' />Sound Effects</label>
        <button id='RetireButton' onClick={this.retire}>Retire</button>
        <button id='StartAnewButton' onClick={this.startNewGame}>New game</button>
        <button id='SaveGameButton' onClick={this.saveGame}>Save game</button>
        <button id='LoadGameButton' onClick={this.loadGame}>Load game</button>
        <DebugWindow
          debug={debug}
          />
      </div>
    );
  }
}

OptionsWindow.propTypes = {
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsWindow;
