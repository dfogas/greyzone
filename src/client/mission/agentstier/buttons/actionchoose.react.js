import './actionchoose.css';
import Component from '../../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import Dice from '../../../dice/dice.react';

class ActionChoose extends Component {
  render() {
    const {activemission} = this.props;
    const actionchoose = activemission.getIn(['equipmenteffects', 'actionchoose']);

    return (
      <div className='action-choose'>
        {actionchoose === 'operations' &&
          <div>
            <Dice dicetype='operations' value='pursuit' />
            <Dice dicetype='operations' value='close_combat' />
            <Dice dicetype='operations' value='hit' />
          </div>
        }
        {actionchoose === 'electronics' &&
          <div>
            <Dice dicetype='electronics' value='decipher' />
            <Dice dicetype='electronics' value='monitor' />
            <Dice dicetype='electronics' value='tap' />
          </div>
        }
        {actionchoose === 'stealth' &&
          <div>
            <Dice dicetype='stealth' value='hide' />
            <Dice dicetype='stealth' value='infiltrate' />
            <Dice dicetype='stealth' value='puppet' />
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
