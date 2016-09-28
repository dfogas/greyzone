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

    const actionchoosedices = actionchoose.map(ac => {
      return (
        <Dice
          dicekey={ac.get('dicekey')}
          dicetype={ac.get('dicetype')}
          key={uuid() + 'actionchoose'}
          name={ac.get('name')}
          />
      );
    });

    return (
      <div className='action-choose'>
        {actionchoosedices}
      </div>
    );
  }
}

ActionChoose.propTypes = {
  activemission: React.PropTypes.instanceOf(immutable.Map)
};

export default ActionChoose;
