import './options.window.styl';
import Component from '../../components/component.react';
import React from 'react';

class OptionsWindow extends Component {
  render() {
    const {options} = this.props;
    const tutorial = options.get('tutorial');
    const multiplayer = options.get('multiplayer');
    return (
      <div id='OptionsWindow'>
        <form action=''>
          <input type='checkbox' name='multiplayer' value='Multiplayer'>Multiplayer</input>
          <input type='checkbox' name='tutorial' value='Tutorial'>Tutorial</input>
        </form>
        <button
          id='ChangeOptions'
          onClick={this.changeOptions}
          >Apply Changes</button>
      </div>
    );
  }
}

export default OptionsWindow;
