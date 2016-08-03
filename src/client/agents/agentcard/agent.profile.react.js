import './agent.profile.styl';
import * as agentsActions from '../actions';
import * as dashboardActions from '../../dashboard/actions';
import Component from '../../components/component.react.js';
import React from 'react';
import {msg} from '../../intl/store';
import immutable from 'immutable';
import classnames from 'classnames';

class AgentProfile extends Component {
  agentTalk() {
    const {agent, agentondisplay, isDisplay} = this.props;
    if (agent.get('id') === agentondisplay.get('id') && isDisplay)
      agentsActions.agentTalking(agent);
  }

  render() {
    //data cache placeholder
    const {agent, agentbeingsaved, self} = this.props;
    const beingsaved = agentbeingsaved ? agentbeingsaved.get('id') === agent.get('id') : false;
    const classString = classnames('', {'showcased': this.props.isShowcased});
    const formattedImg = this.props.isShowcased ? agent.get('imgsrc').replace('_128', '_sc') : agent.get('imgsrc');

    return (
      <div className={'agent-profile ' + classString}>
        <div
          className={'agent-picture ' + classString}
          onClick={this.agentTalk.bind(this)}><img draggable='false' src={formattedImg} /></div>
        <div className={'agent-label ' + classString}>
          {agent.get('name')}{self ? agent.get('id') === self.get('id') && '(Player)' : ''}
        </div>
        {agent.get('prison') &&
          <div className='in-prison-label'>In Prison</div>}
        {beingsaved &&
          <div className='being-saved-label'>Rescuing</div>}
        {agent.get('loyalty') === 'loyal' &&
          <div className='loyal-label'>Loyal</div>}
        {agent.get('KIA') &&
          <div className='kia-label'>KIA</div>}
        {agent.get('KIA') &&
          <button
            className='agent-honor-button-display'
            onClick={(e) => dashboardActions.honorAgent(agent)}
            style={{backgroundColor: 'black'}}>{msg('dashboard.strategical.agentslist.manage.honor')}</button>}
      </div>
    );
  }
}

AgentProfile.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map).isRequired,
  agentbeingsaved: React.PropTypes.instanceOf(immutable.Map),
  agentondisplay: React.PropTypes.instanceOf(immutable.Map),
  imgsrc: React.PropTypes.string,
  isDisplay: React.PropTypes.bool,
  isShowcased: React.PropTypes.bool,
  self: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentProfile;
