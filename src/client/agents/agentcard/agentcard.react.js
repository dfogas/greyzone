import './agentcard.styl';
import * as agentsActions from '../actions';
import * as dashboardActions from '../../dashboard/actions';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';
import allAgents from '../../lib/allagents';
import selfIsDisplayed from '../../lib/selfisdisplayed';
import {msg} from '../../intl/store';
import shouldHaveRank from '../../lib/shouldhaverank';
import uuid from '../../lib/guid';
import AgentExperienceBar from './agent.experience.bar.react';

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

  dismissAgent() {
    const {agent, jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    const agentondisplay = jsonapi.getIn(['dashboard', 'agentondisplay']);
    const agentondisplayindex = agents.indexOf(agents.find(agent => agent.get('id') === agentondisplay.get('id')));
    dashboardActions.dismissAgent(agent);
    dashboardActions.selectAgent(agents.get(agentondisplayindex === 0 ? agents.size - 1 : agentondisplayindex - 1));
  }

  saveAgent() {
    const {agent, jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    const agentondisplay = jsonapi.get('agentondisplay');
    const agentondisplayindex = agents.indexOf(agents.find(agent => agent.get('id') === agentondisplay.get('id')));
    dashboardActions.saveAgent(agent);
    dashboardActions.selectAgent(agents.get(agentondisplayindex === 0 ? agents.size - 1 : agentondisplayindex - 1));
  }

  playerDoesNotGoOnMissions() {
    const {jsonapi} = this.props;
    const agents = jsonapi.get('agents');
    const agentondisplay = jsonapi.getIn(['dashboard', 'agentondisplay']);
    console.log('player hide');
    dashboardActions.selectAgent(agents.find(agent => agent.get('id') !== agentondisplay.get('id')));
    dashboardActions.playerDoesNotGoOnMissions();
  }

  playerGoesOnMissions() {
    dashboardActions.playerGoesOnMissions();
  }

  render() {
    const {agent, agentindex, equipments, game, jsonapi, key} = this.props;
    const agentbeingsaved = jsonapi.get('agentbeingsaved');
    const self = jsonapi.get('self');
    const trainingtable = game.getIn(['globals', 'trainingtable']);
    const rankup = shouldHaveRank(agent.get('experience'), trainingtable) >= agent.get('rank') ? true : false;
    const expnext = trainingtable ? trainingtable.getIn([agent.get('rank'), 'xp']) : '';
    const beingsaved = agentbeingsaved ? agent.get('id') === agentbeingsaved.get('id') : false;
    const agentIsOnDisplay = agent.get('id') === jsonapi.getIn(['dashboard', 'agentondisplay', 'id']);
    const playerAgentIsActive = self ? allAgents(jsonapi).find(agent => agent.get('id') === self.get('id')) : false;
    const selfIsNotInPrison = self ? !self.get('prison') : false;

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
        <AgentExperienceBar
          agent={agent}
          game={game}
          isShowcased={this.props.isShowcased}
          />
        <AgentClock
          agent={agent}
          />
        <AgentStatCounter
          isShowcased={this.props.isShowcased}
          skill={agent.get('operationsSkill')}
          skillname="operations"
          />
        <AgentStatCounter
          isShowcased={this.props.isShowcased}
          skill={agent.get('electronicsSkill')}
          skillname="electronics"
          />
        <AgentStatCounter
          isShowcased={this.props.isShowcased}
          skill={agent.get('stealthSkill')}
          skillname="stealth"
          />
        <AgentProfile
          agent={agent}
          agentbeingsaved={agentbeingsaved}
          agentondisplay={jsonapi.getIn(['dashboard', 'agentondisplay'])}
          isDisplay={this.props.isDisplay}
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          self={self}
          />
        {!playerAgentIsActive && self.get('id') === agent.get('id') &&
          <button
            id='ActivateSelf'
            onClick={(e) => dashboardActions.playerGoesOnMissions()}>Activate</button>}
        {playerAgentIsActive && selfIsDisplayed(jsonapi) && selfIsNotInPrison && self.get('id') === agent.get('id') && this.props.isDisplay &&
          <button
            id='HideSelf'
            onClick={this.playerDoesNotGoOnMissions.bind(this)}
            >Hide</button>}
        {(agent.get('prison') && !beingsaved) &&
          <button
            className='save-agent-button'
            onClick={(e) => dashboardActions.saveAgent(agent)}>Save</button>}
        {(agent.get('prison') && !beingsaved) && (self.get('id') !== agent.get('id')) &&
          <button
            className='dismiss-agent-button'
            onClick={(e) => dashboardActions.dismissAgent(agent)}>Dont Save</button>}
        {(agent.get('prison') && beingsaved) &&
          <button
            className='dismiss-agent-button'
            onClick={(e) => dashboardActions.postponeRescue(agent)}>Not now!</button>}
        {trainingtable && agentIsOnDisplay && this.props.isShowcased &&
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
            />);
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
  agent: React.PropTypes.instanceOf(immutable.Map).isRequired,
  agentindex: React.PropTypes.number,
  equipments: React.PropTypes.instanceOf(immutable.List),
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  isAgents: React.PropTypes.bool,
  isDisplay: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  key: React.PropTypes.string
};

export default AgentCard;
