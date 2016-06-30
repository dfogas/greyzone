import './agentcard.styl';
import * as agentsActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import shouldHaveRank from '../../lib/shouldhaverank';
import uuid from '../../lib/guid';

import AgentStatCounter from './agentstatcounter.react';
import AgentProfile from './agent.profile.react';
import AgentEquipmentSlot from './agentequipmentslot.react';
import AgentClock from './agent.clock.react';

class AgentCard extends Component {

  agentGetRank() {
    const {agent, agentindex} = this.props;
    agentsActions.getRank(agent, agentindex);
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  render() {
    const {agent, agentindex, equipments, key, self, trainingtable} = this.props;
    const rankup = shouldHaveRank(agent.get('experience')) >= agent.get('rank') ? true : false;
    const expnext = trainingtable ? trainingtable.getIn([agent.get('rank'), 'xp']) : '';

    const classString = classnames(
      'agent-card', {
        'on-mission': this.props.isMission,
        'showcased': this.props.isShowcased
      }
    );
    if (agent)
      var agentequipments = agent.get('equipments');

    return (
      <li
        className={classString}
        draggable="true"
        id={agent.get('name')}
        isMission={this.props.isMission}
        key={key}
        onDragStart={this.drag}>
        <AgentClock
          agent={agent}
          />
        <AgentStatCounter
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          skill={agent.get('operationsSkill')}
          skillname="operations"
          />
        <AgentStatCounter
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          skill={agent.get('electronicsSkill')}
          skillname="electronics"
          />
        <AgentStatCounter
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          skill={agent.get('stealthSkill')}
          skillname="stealth"
          />
        <AgentProfile
          agent={agent}
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          self={self}
          />
        {trainingtable &&
          <div className='agent-exp-next'>{agent.get('experience') + '/' + expnext}</div>}
        {agentequipments.map((agentequipment, i) => {
            return (
              <AgentEquipmentSlot
                agent={agent}
                agentequipment={agentequipment}
                agentindex={agentindex}
                equipmentindex={i}
                equipments={equipments}
                isMission={this.props.isMission}
                isShowcased={this.props.isShowcased}
                key={uuid() + i}
              />
            );
          })}
        {rankup && this.props.isAgents &&
          <input
            className='agent-rankup-button'
            onClick={this.agentGetRank.bind(this)}
            type='button'
            value={msg('buttons.agentRankUp')}
            />}
      </li>
    );
  }
}

AgentCard.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentindex: React.PropTypes.number,
  data: React.PropTypes.object,
  equipments: React.PropTypes.instanceOf(immutable.List),
  isAgents: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool,
  key: React.PropTypes.string,
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentCard;
