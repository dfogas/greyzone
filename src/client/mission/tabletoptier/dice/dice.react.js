import './dice.styl';
// import * as diceActions from './actions';
import Component from '../../../components/component.react';
import React from 'react';
import classnames from 'classnames';

class Dice extends Component {
  drag(ev) {
    const {diceindex, dicetype, value} = this.props;
    ev.dataTransfer.setData('text', JSON.stringify({diceindex: diceindex, dicetype: dicetype, value: value}));
  }

  render() {
    const {diceindex, dicetype, key, value} = this.props;

    return (
      <div
        className={classnames('dice', dicetype, value)}
        diceindex={diceindex}
        dicetype={dicetype}
        draggable={true}
        key={key}
        onDragStart={this.drag.bind(this)}
        value={value}
        />
    );
  }
}

Dice.propTypes = {
  diceindex: React.PropTypes.number.isRequired,
  dicetype: React.PropTypes.string.isRequired,
  key: React.PropTypes.string,
  value: React.PropTypes.string.isRequired
};

export default Dice;
