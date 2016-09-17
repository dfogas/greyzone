import './agent.profile.styl';
import * as dashboardActions from '../../dashboard/actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {Link} from 'react-router';
import {msg} from '../../intl/store';

import agentWantsTalk from '../../lib/bml/agentwantstalk';
import classnames from 'classnames';
import formattedImg from '../../lib/bml/formattedimg';

class AgentProfile extends Component {
  // agentTalk() {
  //   const {agent, agentondisplay, isDisplay} = this.props;
  //   if (agent.get('id') === agentondisplay.get('id') && isDisplay)
  //     dashboardActions.agentDialogToggle();
  // }

  render() {
    //data cache placeholder
    const {agent, agentbeingsaved, jsonapi, self} = this.props;
    const beingsaved = agentbeingsaved ? agentbeingsaved.get('id') === agent.get('id') : false;
    const classString = classnames('', {'showcased': this.props.isShowcased});
    const isLoyal = agent.get('loyalty') === 'loyal';

    // console.log(agentWantsTalk(agent, jsonapi));

    return (
      <div className={'agent-profile ' + classString}>
        <div className={'agent-picture ' + classString}>
          {this.props.isDisplay &&
            <Link to='talk'><img draggable='false' src={formattedImg(isLoyal, this.props.isShowcased, agent)} /></Link>}
          {!this.props.isDisplay &&
            <img draggable='false' src={formattedImg(isLoyal, this.props.isShowcased, agent)} />}
          {this.props.isDisplay
            && agentWantsTalk(agent, jsonapi)
            &&
            <div id='AgentWantsTalkExclamationMark'>
              <div className='exclamation-mark upper'>
              </div>
              <div className='exclamation-mark lower'>
              </div>
            </div>
            }
        </div>
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
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  self: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default AgentProfile;
