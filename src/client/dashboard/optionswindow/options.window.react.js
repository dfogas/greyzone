import './options.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DebugWindow from './debug.window.react';
import OptionsGameWindow from './options.game.window.react';

class OptionsWindow extends Component {
  changeOption(e) {
    dashboardActions.changeOption(e.target.name, e.target.checked);
  }

  render() {
    const {jsonapi, options} = this.props;
    const tutorial = options.get('tutorial');
    const multiplayer = options.get('multiplayer');
    const tipsenable = options.get('tipsenable');
    const debug = options.get('debug');
    const animations = options.get('animations');
    const soundeffects = options.get('soundeffects');
    return (
      <div id='OptionsWindow'>
        <form className='options-form'>
          <fieldset>
            <legend>Options</legend>
            <label><input checked={multiplayer} name='multiplayer' onChange={e => this.changeOption(e)} type='checkbox' />Multiplayer</label>
            <label><input checked={tutorial} name='tutorial' onChange={e => this.changeOption(e)} type='checkbox' />Tutorial</label>
            <label><input checked={tipsenable} name='tipsenable' onChange={e => this.changeOption(e)} type='checkbox' />Tips</label>
            <label><input checked={debug} name='debug' onChange={e=> this.changeOption(e)} type='checkbox' />Debug Mode</label>
            <label><input checked={animations} name='animations' onChange={e=> this.changeOption(e)} type='checkbox' />Animations</label>
            <label><input checked={soundeffects} name='soundeffects' onChange={e=> this.changeOption(e)} type='checkbox' />Sound Effects</label>
          </fieldset>
        </form>
        {!multiplayer &&
          <OptionsGameWindow
            jsonapi={jsonapi}
            />}
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
