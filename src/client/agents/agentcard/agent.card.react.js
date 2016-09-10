import './agent.card.styl';
import * as agentsActions from '../actions';
import * as dashboardActions from '../../dashboard/actions';
import Component from '../../components/component.react';
import React from 'react';
import classnames from 'classnames';
import immutable from 'immutable';
import allAgents from '../../lib/bml/allagents';
import selfIsDisplayed from '../../lib/bml/selfisdisplayed';
import {msg} from '../../intl/store';
import shouldHaveRank from '../../lib/bml/shouldhaverank';

import AgentClock from './agent.clock.react';
import AgentEquipmentSlot from './agent.equipment.slot.react';
import AgentExperienceBar from './agent.experience.bar.react';
import AgentPersonalityMap from './agent.personality.map.react';
import AgentProfile from './agent.profile.react';
import AgentStatCounter from './agent.stat.counter.react';

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
    const self = jsonapi.get('self');
    if (agents.find(ag => ag.get('id') === self.get('id'))) {
      dashboardActions.selectAgent(agents.find(agent => agent.get('id') !== agentondisplay.get('id')));
      dashboardActions.playerDoesNotGoOnMissions(agents.find(ag => ag.get('id') === self.get('id')));
    } else dashboardActions.dashboardAnnounce(`I am busy, move me to available agents.`);
  }

  playerGoesOnMissions() {
    dashboardActions.playerGoesOnMissions();
  }

  render() {
    const {agent, game, jsonapi, key} = this.props;
    const agentbeingsaved = jsonapi.get('agentbeingsaved');
    const self = jsonapi.get('self');
    const trainingtable = game.getIn(['globals', 'trainingtable']);
    const isRankUp = shouldHaveRank(agent, trainingtable) > agent.get('rank');
    const expnext = trainingtable ? trainingtable.getIn([agent.get('rank'), 'xp']) : '';
    const beingsaved = agentbeingsaved ? agent.get('id') === agentbeingsaved.get('id') : false;
    const agentIsOnDisplay = agent.get('id') === jsonapi.getIn(['dashboard', 'agentondisplay', 'id']);
    const playerAgentIsActive = allAgents(jsonapi).find(agent => agent.get('id') === self.get('id'));

    const classString = classnames(
      'agent-card', {
        'on-mission': this.props.isMission,
        'showcased': this.props.isShowcased
      }
    );
    if (agent)
      var agentequipments = agent.get('equipments');

    const agentequipmentsmap = agentequipments.map((agentequipment, i) => {
      return (
        <AgentEquipmentSlot
          agent={agent}
          agentequipment={agentequipment}
          equipmentindex={i}
          game={game}
          isMission={this.props.isMission}
          isShowcased={this.props.isShowcased}
          tutorial={jsonapi.get('tutorial')}
        />);
    });

    const skillmap = ['operations', 'electronics', 'stealth'].map(skilltype => {
      return (
        <AgentStatCounter
          isShowcased={this.props.isShowcased}
          skill={agent.get(skilltype + 'Skill')}
          skillname={skilltype}
          />
      );
    });

    return (
      <li
        className={classString}
        draggable="true"
        id={agent.get('name')}
        isMission={this.props.isMission}
        key={key}
        onDragStart={this.drag}
        >
        <AgentExperienceBar
          agent={agent}
          game={game}
          isShowcased={this.props.isShowcased}
          />
        <AgentClock
          agent={agent}
          />
        {skillmap}
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
        {playerAgentIsActive && selfIsDisplayed(jsonapi) && !agent.get('prison') && self.get('id') === agent.get('id') && this.props.isDisplay &&
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
        {!this.props.isDisplay &&
          agentequipmentsmap}
        {this.props.isDisplay &&
          <AgentPersonalityMap
            agent={agent}
            />}
        {isRankUp && this.props.isAgents &&
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
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  isAgents: React.PropTypes.bool,
  isDisplay: React.PropTypes.bool,
  isMission: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  key: React.PropTypes.string
};

export default AgentCard;
