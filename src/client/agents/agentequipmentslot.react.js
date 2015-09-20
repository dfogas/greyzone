import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
// dynamic
import * as agentActions from './actions';
import * as equipmentActions from '../equipments/actions';

class AgentEquipmentSlot extends Component {

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    // const equipmentsnames = ['Hired Gun', 'Heavy Equipment', 'Protective Gear', 'Heavy Kit', 'Customized Tools', 'Weak Points Analysis Software', 'Fake Passports', 'Drugs Control', 'Damage Control Protocol'];
    const {equipmentindex} = this.props;
    ev.preventDefault();
    var message = ev.dataTransfer.getData('text');
    if (ev)
      agentActions.equip(immutable.fromJS({equipmentindex: equipmentindex, equipmentname: message}));
  }

  equipmentUse() {
    const {equipment, equipmentindex} = this.props;

    equipmentActions.use({equipment: equipment, equipmentindex: equipmentindex});
  }

  render() {
    const {agentindex, equipment, equipmentindex} = this.props;

    var classString = ' ';
    if (this.props.isMission)
      classString += ' mission';

    if (this.props.isShowcased)
      classString += ' showcased';
    return (
      <div
        agentindex={agentindex}
        className={'agent-equipment-slot' + equipmentindex + classString}
        equipmentindex={equipmentindex}
        onClick={this.equipmentUse.bind(this)}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        <div
          className={'agent-equipment-picture-placeholder' + classString}
          />
        <div
          className={'agent-equipment-description-placeholder' + classString}
          >
          {equipment.get('name') ? equipment.get('name') : 'empty'}
        </div>
      </div>
    );
  }
}

AgentEquipmentSlot.propTypes = {
  agentindex: React.PropTypes.number,
  equipment: React.PropTypes.instanceOf(immutable.Map),
  equipmentindex: React.PropTypes.number,
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool
};

export default AgentEquipmentSlot;
