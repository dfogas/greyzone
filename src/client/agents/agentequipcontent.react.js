import './agentequipcontent.styl';
import * as agentsActions from './actions';
import * as briefingActions from '../briefing/actions';
import * as equipmentActions from '../equipments/actions';
import Component from '../components/component.react';
import React from 'react';
import capitalLetter from '../lib/general/capitalletter';
import immutable from 'immutable';
import formatMoney from '../lib/formatmoney';

import AgentInArmory from './agentinarmory.react';
import AgentScrollBarWithNavButtons from './scrollbar/agentscrollbarwithnavbuttons.react';
import ArmoryToBriefing from '../navs/armorytobriefing.react';
import EquipmentStock from '../equipments/equipmentstock.react';
import ArmoryCodeToggle from './armory.code.toggle.react';
import RedAlertToggle from './red.alert.toggle.react';

class AgentEquipContent extends Component {
  agentInArmoryToMission() {
    const {jsonapi} = this.props;
    if (jsonapi.getIn(['activemission', 'tag']) === 'quietbeforestorm'
        && jsonapi.get('missions').size > 0)
      briefingActions.selectMission(jsonapi.getIn(['missions', 0]));
    agentsActions.agentInArmoryAssignMission(jsonapi.get('agentinarmory'));
  }

  backFromArmory() {
    const {jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');
    agentsActions.backFromArmory(agentinarmory);
  }

  unequipAll() {
    const {jsonapi} = this.props;
    equipmentActions.agentUnequip(jsonapi.get('agentinarmory'));
  }

  render() {
    const {game, jsonapi} = this.props;
    const agentinarmory = jsonapi.get('agentinarmory');
    const alert = jsonapi.getIn(['armory', 'code']);

    // const equipments = jsonapi.get('equipments');
    // POI: there was toSeq used for lazy evaluation, wonder was it any good doing there?
    // const equipmentsoperations = equipments.filter(equipment => equipment.get('tag').charAt(2) === 'O');
    // const equipmentselectronics = equipments.filter(equipment => equipment.get('tag').charAt(2) === 'E');
    // const equipmentsstealth = equipments.filter(equipment => equipment.get('tag').charAt(2) === 'S');

    return (
      <div
        id='AgentEquipContent'
        style={{
          boxShadow: `inset 0 0 30px ${alert}, 0 0 10px ${alert}`
        }}>
        <RedAlertToggle
          armorycode={alert}
          />
        <ArmoryToBriefing />
        {['red', 'yellow', 'green'].map(code => {
          return (
            <ArmoryCodeToggle
              armorycode={code}
              isActive={alert === code}
              />
          );
        })}
        {alert === 'red' &&
          <AgentScrollBarWithNavButtons
            agents={jsonapi.get('agents')}
            game={game}
            isAgents={true}
            isBriefing={false}
            isMission={false}
            jsonapi={jsonapi}
            />}
        {false &&
          <div id='ArmoryGameCashCounter'>
            Cash: {formatMoney(jsonapi.get('gameCash'), 0, '.', ',')}$
          </div>}
        {alert === 'red' &&
          <AgentInArmory
            game={game}
            jsonapi={jsonapi}
            />}
        {alert !== 'green' &&
          ['operations', 'electronics', 'stealth'].map(stockname => {
            return (
              <EquipmentStock
                enhancements={jsonapi.get('enhancements').filter(enh => enh.get('type') === 'toys')}
                equipments={jsonapi.get('equipments')
                  .filter(equipment => equipment.get('tag').charAt(2) === capitalLetter(stockname).slice(0, 1))}
                jsonapi={jsonapi}
                list={game.getIn(['globals', 'enhancements'])}
                paying={jsonapi.get('paying')}
                stock={stockname}
                />
            );
          })
        }
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
