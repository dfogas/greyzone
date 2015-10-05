import './dicebin.css';
import Component from '../../components/component.react';
import React from 'react';

import * as diceActions from '../../dice/actions';

class DiceBin extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    // var key = ev.dataTransfer.getData('text');
    diceActions.remove();
  }

  render() {
    return (
      <div className='dice-bin' onDragOver={this.allowDrop} onDrop={this.drop.bind(this)} />
    );
  }
}

export default DiceBin;
