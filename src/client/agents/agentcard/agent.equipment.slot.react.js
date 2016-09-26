import './agent.equipment.slot.styl'; //
import * as agentActions from '../actions';
import * as equipmentActions from '../../equipments/actions';
import * as tutorialFirstMissionActions from '../../tutorial/firstmission/actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
// import {msg} from '../../intl/store';
import classnames from 'classnames';

import AgentEquipmentPicturePlaceholder from './agent.equipment.picture.placeholder.react';

class AgentEquipmentSlot extends Component {

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    const {equipmentindex, game} = this.props;
    const equipments = game.getIn(['globals', 'equipments']);
    ev.preventDefault();
    var message = ev.dataTransfer.getData('text');
    var tag = equipments.find(eq => eq.get('name') === message).get('tag');
    if (ev)
      agentActions.equip(immutable.fromJS({index: equipmentindex, name: message, tag: tag}));
  }

  equipmentUse() {
    const {agent, agentequipment, equipmentindex, tutorial} = this.props;

    equipmentActions.use(agent, {agentequipment, equipmentindex});
    if (!tutorial.getIn(['firstmission', 'equipmentusehint']))
      tutorialFirstMissionActions.equipmentUseHintToggle();
    if (tutorial.getIn(['firstmission', 'equipmentusehint']) && !tutorial.getIn(['firstmission', 'anotherequipmentusehint']))
      tutorialFirstMissionActions.anotherEquipmentUseHintToggle();
  }

  render() {
    const {agentequipment, equipmentindex} = this.props;

    const classString = classnames('agent-equipment-slot' + equipmentindex,
      immutable.Map.isMap(agentequipment) ? agentequipment.get('name').replace(/\s+/g, '') : '', {
        'mission': this.props.isMission,
        'showcased': this.props.isShowcased
    });

    return (
      <div
        className={classString}
        equipmentindex={equipmentindex}
        onClick={this.equipmentUse.bind(this)}
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}>
        <AgentEquipmentPicturePlaceholder
          agentequipment={agentequipment}
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          />
      </div>
    );
  }
}

AgentEquipmentSlot.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentequipment: React.PropTypes.instanceOf(immutable.Map),
  equipmentindex: React.PropTypes.number.isRequired,
  game: React.PropTypes.instanceOf(immutable.Map),
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool,
  tutorial: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentEquipmentSlot;
