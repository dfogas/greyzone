import './dice.styl';
import * as diceActions from './actions';
import Component from '../../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import uuid from '../../../lib/guid';

class Dice extends Component {
  drag(ev) {
    const {diceindex, dicetype, dicekey, name} = this.props;
    ev.dataTransfer.setData('text', JSON.stringify({diceindex: diceindex, dicetype: dicetype, dicekey: dicekey, name: name}));
    // console.log(JSON.stringify({diceindex: diceindex, dicetype: dicetype, dicekey: dicekey, name: name}));
  }

  selectForReroll() {
    const {diceindex} = this.props;

    diceActions.selectForReroll(diceindex);
  }

  render() {
    const {diceindex, dicetype, name} = this.props;

    return (
      <div
        className={classnames('dice', dicetype, name, {'rollable': this.props.rollable})}
        diceindex={diceindex}
        dicetype={dicetype}
        draggable={true}
        key={uuid() + 'dice'}
        name={name}
        onClick={this.selectForReroll.bind(this)}
        onDragStart={this.drag.bind(this)}
        />
    );
  }
}

Dice.propTypes = {
  diceindex: React.PropTypes.number,
  dicekey: React.PropTypes.string,
  dicetype: React.PropTypes.string.isRequired,
  key: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  rollable: React.PropTypes.bool
};

export default Dice;
