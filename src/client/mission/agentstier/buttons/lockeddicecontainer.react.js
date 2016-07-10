import './lockeddicecontainer.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import Dice from '../../tabletoptier/dice/dice.react';

import * as equipmentActions from '../../../equipments/actions';

class LockedDiceContainer extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var dice = JSON.parse(ev.dataTransfer.getData('text'));
    equipmentActions.lockDice(dice);
  }

  render() {
    const {activemission} = this.props;
    const lockeddice = activemission.getIn(['equipmenteffects', 'lockeddice']);

    return (
      <div
        className='locked-dice-container'
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {lockeddice &&
          <Dice
            dicekey={lockeddice ? lockeddice.get('dicekey') : ''}
            dicetype={lockeddice ? lockeddice.get('dicetype') : ''}
            name={lockeddice ? lockeddice.get('name') : ''}
            />}
      </div>
    );
  }
}

LockedDiceContainer.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default LockedDiceContainer;
