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
            <Dice dicetype='operations' dicekey={uuid() + 'actionchoose'} name='pursuit' />
            <Dice dicetype='operations' dicekey={uuid() + 'actionchoose'} name='close_combat' />
            <Dice dicetype='operations' dicekey={uuid() + 'actionchoose'} name='hit' />
          </div>
        }
        {actionchoose === 'electronics' &&
          <div>
            <Dice dicetype='electronics' dicekey={uuid() + 'actionchoose'} name='decipher' />
            <Dice dicetype='electronics' dicekey={uuid() + 'actionchoose'} name='monitor' />
            <Dice dicetype='electronics' dicekey={uuid() + 'actionchoose'} name='tap' />
          </div>
        }
        {actionchoose === 'stealth' &&
          <div>
            <Dice dicetype='stealth' dicekey={uuid() + 'actionchoose'} name='hide' />
            <Dice dicetype='stealth' dicekey={uuid() + 'actionchoose'} name='infiltrate' />
            <Dice dicetype='stealth' dicekey={uuid() + 'actionchoose'} name='puppet' />
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
