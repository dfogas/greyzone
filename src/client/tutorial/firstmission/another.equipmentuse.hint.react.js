import './another.equipment.use.hint.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class AnotherEquipmentUseHint extends Component {
  render() {
    const {firstmission} = this.props;
    return (
      <div>
        <div id='AnotherEquipmentUseHint'>
        </div>
        <div id='AnotherEquipmentUseHintText'>Try clicking this equipment.</div>
      </div>
    );
  }
}

AnotherEquipmentUseHint.propTypes = {
  firstmission: React.PropTypes.instanceOf(immutable.Map)
};

export default AnotherEquipmentUseHint;
