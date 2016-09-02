import './equipment.use.hint.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class EquipmentUseHint extends Component {
  render() {
    const {firstmission} = this.props;
    return (
      <div>
        <div id='EquipmentUseHint'>
        </div>
        <div id='EquipmentUseHintText'>Click the equipment to use it.</div>
      </div>
    );
  }
}

EquipmentUseHint.propTypes = {
  firstmission: React.PropTypes.instanceOf(immutable.Map)
};

export default EquipmentUseHint;
