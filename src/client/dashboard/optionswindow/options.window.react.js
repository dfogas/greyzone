import './options.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class OptionsWindow extends Component {
  changeOption(e) {
    dashboardActions.changeOption(e.target.name, e.target.checked);
  }

  render() {
    const {options} = this.props;
    const tutorial = options.get('tutorial');
    const multiplayer = options.get('multiplayer');
    const tipsenable = options.get('tipsenable');
    const debug = options.get('debug');
    return (
      <div id='OptionsWindow'>
        <label><input checked={multiplayer} name='multiplayer' onChange={e => this.changeOption(e)} type='checkbox' />Multiplayer</label>
        <label><input checked={tutorial} name='tutorial' onChange={e => this.changeOption(e)} type='checkbox' />Tutorial</label>
        <label><input checked={tipsenable} name='tipsenable' onChange={e => this.changeOption(e)} type='checkbox' />Tips</label>
        <label><input checked={debug} name='debug' onChange={e=> this.changeOption(e)} type='checkbox' />Debug Mode</label>
      </div>
    );
  }
}

OptionsWindow.propTypes = {
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsWindow;
