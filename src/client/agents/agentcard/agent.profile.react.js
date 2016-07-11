import './agent.profile.styl';
import * as agentsActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import agentTalk from '../../lib/agenttalk';
import {msg} from '../../intl/store';
import immutable from 'immutable';

class AgentProfile extends Component {
  agentTalk() {
    const {agent} = this.props;
    agentsActions.agentTalking(agent);
  }

  render() {
    //data cache placeholder
    const {agent, agentbeingsaved, self} = this.props;
    const beingsaved = agentbeingsaved ? agentbeingsaved.get('id') === agent.get('id') : false;
    let formattedImg;
    var classString = '';

    formattedImg = agent.get('imgsrc');
    if (this.props.isShowcased) {
      classString += ' showcased';
      formattedImg = agent.get('imgsrc').replace('_128', '_sc');
    }
    return (
      <div className={'agent-profile' + classString}>
        <div
          className={'agent-picture' + classString}
          onClick={this.agentTalk.bind(this)}><img draggable='false' src={formattedImg} /></div>
        <div className={'agent-label' + classString}>
          {agent.get('name')}{self ? agent.get('id') === self.get('id') && '(Player)' : ''}
        </div>
        {(agent.get('prison') && !beingsaved) &&
          <div className='in-prison-label'>In Prison</div>}
        {beingsaved &&
          <div className='being-saved-label'>Rescuing</div>}
      </div>
    );
  }
}

AgentProfile.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  imgsrc: React.PropTypes.string,
  isShowcased: React.PropTypes.bool,
  self: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentProfile;
