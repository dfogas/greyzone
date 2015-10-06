import './agentequipcontent.css';
import Component from '../components/component.react';
import React from 'react';
import AgentScrollBarWithNavButtons from './agentscrollbarwithnavbuttons.react';
import EquipmentStock from '../equipments/equipmentstock.react';
// import AgentCard from '../agents/agentcard.react';
import AgentInArmory from './agentinarmory.react';
import immutable from 'immutable';

class AgentEquipContent extends Component {
  render() {
    const {agents, jsonapi, pendingActions} = this.props;
    const equipments = jsonapi.get('equipments');

    const equipmentsoperations = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'O').toList();
    const equipmentselectronics = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'E').toList();
    const equipmentsstealth = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'S').toList();

    return (
      <div id='AgentEquipContent'>
        <AgentScrollBarWithNavButtons agents={agents} jsonapi={jsonapi} pendingActions={pendingActions} />
        <AgentInArmory jsonapi={jsonapi} pendingActions={pendingActions} />
        <EquipmentStock equipments={equipmentsoperations} stock='operations' />
        <EquipmentStock equipments={equipmentselectronics} stock='electronics' />
        <EquipmentStock equipments={equipmentsstealth} stock='stealth' />
      </div>
    );
  }
}

AgentEquipContent.propTypes = {
  agents: React.PropTypes.instanceOf(immutable.List),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentEquipContent;
