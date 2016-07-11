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

class AgentEquipContent extends Component {
  agentInArmoryToMission() {
    const {jsonapi} = this.props;
    agentActions.agentInArmoryAssignMission(jsonapi.get('agentinarmory'));
  }

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
    const {game, jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');

    const equipments = jsonapi.get('equipments');
    // POI: there was toSeq used for lazy evaluation, wonder was it any good doing there?
    const equipmentsoperations = equipments.filter(equipment => equipment.get('tag').charAt(2) === 'O');
    const equipmentselectronics = equipments.filter(equipment => equipment.get('tag').charAt(2) === 'E');
    const equipmentsstealth = equipments.filter(equipment => equipment.get('tag').charAt(2) === 'S');

    return (
      <div id='AgentEquipContent'>
        <AgentScrollBarWithNavButtons
          agents={jsonapi.get('agents')}
          game={game}
          isAgents={true}
          isBriefing={false}
          isMission={false}
          jsonapi={jsonapi}
          />
        <div id='ArmoryGameCashCounter'>
          Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
        </div>
        <AgentInArmory
          game={game}
          jsonapi={jsonapi}
          />
        <EquipmentStock
          enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
          equipments={equipmentsoperations}
          jsonapi={jsonapi}
          list={game.getIn(['globals', 'enhancements'])}
          paying={jsonapi.get('paying')}
          stock='operations'
          />
        <EquipmentStock
          enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
          equipments={equipmentselectronics}
          jsonapi={jsonapi}
          list={game.getIn(['globals', 'enhancements'])}
          paying={jsonapi.get('paying')}
          stock='electronics'
          />
        <EquipmentStock
          enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
          equipments={equipmentsstealth}
          jsonapi={jsonapi}
          list={game.getIn(['globals', 'enhancements'])}
          paying={jsonapi.get('paying')}
          stock='stealth'
          />
        {agentinarmory && <button
          id='BackFromArmory'
          onClick={this.backFromArmory.bind(this)}>Back</button>}
        {agentinarmory && <button
          id='UnequipAll'
          onClick={this.unequipAll.bind(this)}>Unequip</button>}
        {agentinarmory &&
          <button
            id='AgentInArmoryToMission'
            onClick={this.agentInArmoryToMission.bind(this)}>To Mission</button>}

      </div>
    );
  }
}

AgentEquipContent.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentEquipContent;
