import './dicebin.styl';
import Component from '../../../components/component.react';
import React from 'react';

import * as diceActions from '../dice/actions';

class DiceBin extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    diceActions.remove(dice);
  }

  render() {
    return (
      <div className='dice-bin' onDragOver={this.allowDrop} onDrop={this.drop.bind(this)} />
    );
  }
}

export default DiceBin;
