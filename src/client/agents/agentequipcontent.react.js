import './agentequipcontent.styl';
import * as agentActions from './actions';
import * as equipmentsActions from '../equipments/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import formatMoney from '../lib/formatmoney';

import AgentInArmory from './agentinarmory.react';
import AgentScrollBarWithNavButtons from './scrollbar/agentscrollbarwithnavbuttons.react';
import EquipmentStock from '../equipments/equipmentstock.react';
// import Task from '../mission/missioncard/tasks/task.react';

class AgentEquipContent extends Component {
  unequipAll() {
    const {jsonapi} = this.props;
    equipmentsActions.agentUnequip(jsonapi.get('agentinarmory'));
  }

  render() {
    const {jsonapi} = this.props;

    const equipments = jsonapi.get('equipments');
    const equipmentsoperations = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'O').toList();
    const equipmentselectronics = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'E').toList();
    const equipmentsstealth = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'S').toList();

    return (
      <div id='AgentEquipContent'>
        <AgentScrollBarWithNavButtons
          agents={jsonapi.get('agents')}
          jsonapi={jsonapi}
          />
        <div id='ArmoryGameCashCounter'>
          Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
        </div>
        <button
          id='UnequipAll'
          onClick={this.unequipAll.bind(this)}
        >
          Unequip
        </button>
        <button
          id='DismissAgentButton'
          onClick={agentActions.dismissAgent}
          >Dismiss Agent</button>
        <AgentInArmory jsonapi={jsonapi} />
        <EquipmentStock
          enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
          equipments={equipmentsoperations}
          stock='operations'
          />
        <EquipmentStock
          enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
          equipments={equipmentselectronics}
          stock='electronics'
          />
        <EquipmentStock
          enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
          equipments={equipmentsstealth}
          stock='stealth'
          />
      </div>
    );
  }
}

AgentEquipContent.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentEquipContent;
