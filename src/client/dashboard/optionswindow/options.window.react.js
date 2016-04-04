import './options.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class OptionsWindow extends Component {
  changeOption(e) {
    e.preventDefault();
    dashboardActions.changeOption(e.target.name, e.target.checked);
  }

  render() {
    const {options} = this.props;
    const tutorial = options.get('tutorial');
    const multiplayer = options.get('multiplayer');
    const tipsenable = options.get('tipsenable');
    return (
      <div id='OptionsWindow'>
        <form action=''>
          <input checked={multiplayer} name='multiplayer' onClick={e => this.changeOption(e)} type='checkbox'>Multiplayer</input>
          <input checked={tutorial} name='tutorial' onClick={e => this.changeOption(e)} type='checkbox'>Tutorial</input>
          <input checked={tipsenable} name='tipsenable' onClick={e => this.changeOption(e)} type='checkbox'>Tips</input>
        </form>
      </div>
    );
  }
}

OptionsWindow.propTypes = {
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsWindow;
