import './agent.profile.styl';
import * as agentsActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import $ from 'jquery';
import {msg} from '../../intl/store';
import agentTalk from '../../lib/agenttalk';

class AgentProfile extends Component {
  agentTalk() {
    const {agent} = this.props;
    agentsActions.agentTalking(agent);
  }

  render() {
    //data cache placeholder
    const {agent} = this.props;
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
          onClick={this.agentTalk.bind(this)}>
          <img draggable='false' src={formattedImg} />
          </div>
        <div className={'agent-label' + classString}>{agent.get('name')}</div>
      </div>
    );
  }
}

AgentProfile.propTypes = {
  imgsrc: React.PropTypes.string,
  isShowcased: React.PropTypes.bool
};

export default AgentProfile;
