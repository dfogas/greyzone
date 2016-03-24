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
import AgentProfile from './agentprofile.react';
import AgentEquipmentSlot from './agentequipmentslot.react';
import AgentClock from './agent.clock.react';

class AgentCard extends Component {

  agentGetRank() {
    const {agent, agentindex} = this.props;
    agentsActions.getRank(agent, agentindex);
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    console.log('Dragged item is: ' + ev.target.id);
  }

  render() {
    const {agent, agentindex, key} = this.props;
    const rankup = shouldHaveRank(agent.get('experience')) >= agent.get('rank') ? true : false;

    const classString = classnames(
      'agent-card', {
        'on-mission': this.props.isMission,
        'showcased': this.props.isShowcased
      }
    );
    if (agent)
      var equipments = agent.get('equipments');

    return (
      <li
        className={classString}
        draggable="true"
        id={agent.get('name')}
        isMission={this.props.isMission}
        key={key}
        onDragStart={this.drag}>
        {rankup &&
          <input
            className='agent-rankup-button'
            onClick={this.agentGetRank.bind(this)}
            type='button'
            value={msg('buttons.agentRankUp')}
            />
        }
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
          imgsrc={agent.get('imgsrc')}
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          name={agent.get('name')}
          />
        {
          equipments.map((equipment, i) => {
            return (
              <AgentEquipmentSlot
                agent={agent}
                agentindex={agentindex}
                equipment={equipment}
                equipmentindex={i}
                isMission={this.props.isMission}
                isShowcased={this.props.isShowcased}
                key={uuid() + i}
              />
            );
          })
        }
        <AgentClock
          agent={agent}
          />
      </li>
    );
  }
}

AgentCard.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentindex: React.PropTypes.number,
  data: React.PropTypes.object,
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool,
  key: React.PropTypes.string
};

export default AgentCard;
