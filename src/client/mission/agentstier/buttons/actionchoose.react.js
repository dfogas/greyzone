import './actionchoose.styl';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import Dice from '../../tabletoptier/dice/dice.react';
import uuid from '../../../lib/guid';

class ActionChoose extends Component {
  render() {
    const {activemission} = this.props;
    const actionchoose = activemission.getIn(['equipmenteffects', 'actionchoose']);

    return (
      <div className='action-choose'>
        {actionchoose === 'operations' &&
          <div>
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='operations' name='pursuit' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='operations' name='close_combat' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='operations' name='hit' />
          </div>
        }
        {actionchoose === 'electronics' &&
          <div>
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='electronics' name='decipher' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='electronics' name='monitor' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='electronics' name='tap' />
          </div>
        }
        {actionchoose === 'stealth' &&
          <div>
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='stealth' name='hide' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='stealth' name='infiltrate' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='stealth' name='puppet' />
          </div>
        }
      </div>
    );
  }
}

ActionChoose.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default ActionChoose;
