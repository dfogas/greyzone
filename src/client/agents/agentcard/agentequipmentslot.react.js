import './agentequipmentslot.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
// dynamic
import * as agentActions from '../actions';
import * as equipmentActions from '../../equipments/actions';

class AgentEquipmentSlot extends Component {

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    const {equipmentindex, equipments} = this.props;
    ev.preventDefault();
    var message = ev.dataTransfer.getData('text');
    var tag = equipments.find(eq => eq.get('name') === message).get('tag');
    if (ev)
      agentActions.equip(immutable.fromJS({index: equipmentindex, name: message, tag: tag}));
  }

  equipmentUse() {
    const {agent, agentequipment, equipmentindex} = this.props;

    equipmentActions.use(agent, {agentequipment, equipmentindex});
    agentActions.setETA(agent, agentequipment);
  }

  render() {
    const {agentindex, agentequipment, equipments, equipmentindex} = this.props;

    var classString = ' ';
    if (this.props.isMission)
      classString += ' mission';

    if (this.props.isShowcased)
      classString += ' showcased';

    classString += ' ' + agentequipment.get('name').replace(/\s+/g, '');
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
          {agentequipment.get('name') ? agentequipment.get('name') : msg('tutorial.equipmentslot')}
        </div>
      </div>
    );
  }
}

AgentEquipmentSlot.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentindex: React.PropTypes.number,
  equipment: React.PropTypes.instanceOf(immutable.Map),
  equipmentindex: React.PropTypes.number,
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool
};

export default AgentEquipmentSlot;
