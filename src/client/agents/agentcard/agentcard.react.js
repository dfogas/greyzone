import './agentcard.styl';
import * as agentsActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import shouldHaveRank from '../../lib/shouldhaverank';
import uuid from '../../lib/guid';

import AgentStatCounter from './agentstatcounter.react';
import AgentProfile from './agentprofile.react';
import AgentEquipmentSlot from './agentequipmentslot.react';

class AgentCard extends Component {

  agentGetRank() {
    const {agent, agentindex} = this.props;
    agentsActions.getRank(agent, agentindex);
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  render() {
    const {agent, agentindex, key} = this.props;
    const rankup = shouldHaveRank(agent.get('experience')) >= agent.get('rank') ? true : false;

    let classString = '';
    let isMission = false;
    let isShowcased = false;
    if (agent)
      var equipments = agent.get('equipments');

    if (this.props.isShowcased) {
      classString += ' showcased';
      isShowcased = true;
    }
    if (this.props.isMission) {
      classString += ' on-mission';
      isMission = true;
    }

    return (
      <li
        className={'agent-card' + classString}
        draggable="true"
        id={agent.get('name')}
        isMission={isMission}
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
        <AgentStatCounter isMission={isMission} isShowcased={isShowcased} skill={agent.get('operationsSkill')} skillname="operations" />
        <AgentStatCounter isMission={isMission} isShowcased={isShowcased} skill={agent.get('electronicsSkill')} skillname="electronics" />
        <AgentStatCounter isMission={isMission} isShowcased={isShowcased} skill={agent.get('stealthSkill')} skillname="stealth" />
        <AgentProfile
          imgsrc={agent.get('imgsrc')}
          isMission={isMission}
          isShowcased={isShowcased}
          name={agent.get('name')}
          />
        {
          equipments.map((equipment, i) => {
            return (
              <AgentEquipmentSlot
                agentindex={agentindex}
                equipment={equipment}
                equipmentindex={i}
                isMission={isMission}
                isShowcased={isShowcased}
                key={uuid() + i}
              />
            );
          })
        }
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
