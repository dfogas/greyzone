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
  backFromArmory() {
    const {jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');
    agentActions.backFromArmory(agentinarmory);
  }

  unequipAll() {
    const {jsonapi} = this.props;
    equipmentsActions.agentUnequip(jsonapi.get('agentinarmory'));
  }

  render() {
    const {jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');
    const armorymessage = jsonapi.getIn(['armory', 'message']);

    const equipments = jsonapi.get('equipments');
    const equipmentsoperations = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'O').toList();
    const equipmentselectronics = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'E').toList();
    const equipmentsstealth = equipments.toSeq().filter(equipment => equipment.get('tag').charAt(2) === 'S').toList();

    return (
      <div id='AgentEquipContent'>
        <AgentScrollBarWithNavButtons
          agents={jsonapi.get('agents')}
          isAgents={true}
          isBriefing={false}
          isMission={false}
          jsonapi={jsonapi}
          />
        <div id='ArmoryGameCashCounter'>
          Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
        </div>
        {agentinarmory && <button
          id='BackFromArmory'
          onClick={this.backFromArmory.bind(this)}>Back</button>}
        {agentinarmory && <button
          id='UnequipAll'
          onClick={this.unequipAll.bind(this)}>Unequip</button>}
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
        <div id='ArmoryMessage'>
          Message : {armorymessage}
        </div>
      </div>
    );
  }
}

AgentEquipContent.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentEquipContent;
