import './dice.styl';
// import * as diceActions from './actions';
import Component from '../../../components/component.react';
import React from 'react';
import classnames from 'classnames';

class Dice extends Component {
  drag(ev) {
    const {diceindex, dicetype, dicekey, name} = this.props;
    ev.dataTransfer.setData('text', JSON.stringify({diceindex: diceindex, dicetype: dicetype, dicekey: dicekey, name: name}));
    // console.log(JSON.stringify({diceindex: diceindex, dicetype: dicetype, dicekey: dicekey, name: name}));
  }

  render() {
    const {diceindex, dicekey, dicetype, key, name} = this.props;

    return (
      <div
        className={classnames('dice', dicetype, name)}
        diceindex={diceindex}
        dicetype={dicetype}
        draggable={true}
        onDragStart={this.drag.bind(this)}
        name={name}
        key={key}
        />
    );
  }
}

Dice.propTypes = {
  diceindex: React.PropTypes.number.isRequired,
  dicetype: React.PropTypes.string.isRequired,
  key: React.PropTypes.string,
  name: React.PropTypes.string.isRequired
};

export default Dice;
