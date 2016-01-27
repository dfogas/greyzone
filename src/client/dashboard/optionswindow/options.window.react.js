import './options.window.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class OptionsWindow extends Component {
  render() {
    const {options} = this.props;
    const tutorial = options.get('tutorial');
    const multiplayer = options.get('multiplayer');
    return (
      <div id='OptionsWindow'>
        <form action=''>
          <input name='multiplayer' type='checkbox' value='Multiplayer'>Multiplayer</input>
          <input name='tutorial' type='checkbox' value='Tutorial'>Tutorial</input>
        </form>
        <button
          id='ChangeOptions'
          onClick={this.changeOptions}
          >Apply Changes</button>
      </div>
    );
  }
}

OptionsWindow.propTypes = {
  options: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsWindow;
