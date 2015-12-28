import './agentequipcontent.styl';
import * as equipmentsActions from '../equipments/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import formatMoney from '../lib/formatmoney';

import AgentInArmory from './agentinarmory.react';
import AgentScrollBarWithNavButtons from './scrollbar/agentscrollbarwithnavbuttons.react';
import EquipmentStock from '../equipments/equipmentstock.react';
import Task from '../mission/missioncard/tasks/task.react';

class AgentEquipContent extends Component {
  unequipAll() {
    const {jsonapi} = this.props;
    equipmentsActions.agentUnequip(jsonapi.get('agentinarmory'));
  }

  render() {
    const {agents, equipments, jsonapi} = this.props;

    const equipmentsoperations = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'O').toList();
    const equipmentselectronics = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'E').toList();
    const equipmentsstealth = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'S').toList();

    return (
      <div id='AgentEquipContent'>
        <AgentScrollBarWithNavButtons agents={agents} jsonapi={jsonapi} />
        <div id='ArmoryGameCashCounter'>
          Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
        </div>
        <button
          id='UnequipAll'
          onClick={this.unequipAll.bind(this)}
        >
          Unequip
        </button>
        <div id='ActiveMissionTasks'>
          {jsonapi.getIn(['activemission', 'tasks']).map(task => {
            return (
              <Task
                className='armory-task'
                isActual={true}
                task={task}
                />
            );
          })}
        </div>
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
