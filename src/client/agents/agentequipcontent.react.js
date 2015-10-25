import './agentequipcontent.styl';
import Component from '../components/component.react';
import React from 'react';
import AgentScrollBarWithNavButtons from './scrollbar/agentscrollbarwithnavbuttons.react';
import EquipmentStock from '../equipments/equipmentstock.react';
import AgentInArmory from './agentinarmory.react';
import immutable from 'immutable';

class AgentEquipContent extends Component {
  render() {
    const {agents, equipments, jsonapi} = this.props;

    const equipmentsoperations = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'O').toList();
    const equipmentselectronics = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'E').toList();
    const equipmentsstealth = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'S').toList();

    return (
      <div id='AgentEquipContent'>
        <AgentScrollBarWithNavButtons agents={agents} jsonapi={jsonapi} />
        <AgentInArmory jsonapi={jsonapi} />
        <EquipmentStock equipments={equipmentsoperations} stock='operations' />
        <EquipmentStock equipments={equipmentselectronics} stock='electronics' />
        <EquipmentStock equipments={equipmentsstealth} stock='stealth' />
      </div>
    );
  }
}

AgentEquipContent.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List),
  equipments: React.PropTypes.instanceOf(immutable.List).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentEquipContent;
