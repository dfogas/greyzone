import './action.choose.styl';
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
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='operations' key={uuid() + 'actionchoose'} name='pursuit' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='operations' key={uuid() + 'actionchoose'} name='close_combat' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='operations' key={uuid() + 'actionchoose'} name='hit' />
          </div>
        }
        {actionchoose === 'electronics' &&
          <div>
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='electronics' key={uuid() + 'actionchoose'} name='decipher' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='electronics' key={uuid() + 'actionchoose'} name='monitor' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='electronics' key={uuid() + 'actionchoose'} name='tap' />
          </div>
        }
        {actionchoose === 'stealth' &&
          <div>
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='stealth' key={uuid() + 'actionchoose'} name='hide' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='stealth' key={uuid() + 'actionchoose'} name='infiltrate' />
            <Dice dicekey={uuid() + 'actionchoose'} dicetype='stealth' key={uuid() + 'actionchoose'} name='puppet' />
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
