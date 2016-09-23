import './agent.to.talk.to.styl';
import * as talkActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import formattedImg from '../lib/bml/formattedimg';
import immutable from 'immutable';
import prop from '../lib/general/r.i.prop';

import DialogBox from './dialog.box.react';
import StoryBox from './story.box.react';

class AgentToTalkTo extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    const {jsonapi} = this.props;
    ev.preventDefault();

    var data = ev.dataTransfer.getData('text');
    const agent = jsonapi.get('agents').find(ag => ag.get('name') === data);
    if (agent)
      talkActions.addParticipant(agent);
  }

  render() {
    const {agentid, jsonapi} = this.props;
    const agent = jsonapi.get('agents').find(agent => agent.get('id') === agentid);
    const isLoyal = prop('loyalty', agent) === 'loyal';
    return (
      <div
        id='AgentToTalkTo'
        onDragOver={this.allowDrop}
        onDrop={this.drop.bind(this)}
        >
        {jsonapi.getIn(['talk', 'dialog']) &&
          <DialogBox agent={agent} jsonapi={jsonapi} />}
        {jsonapi.getIn(['talk', 'story']) &&
          <StoryBox agent={agent} />}
        {agent &&
          <button id='DoneTalkingButton' onClick={(e) => talkActions.clearParticipants()}>Back</button>}
        {agent &&
          <img
            draggable='false'
            onClick={(e) => talkActions.agentTalking(agent)}
            src={formattedImg(isLoyal, true, agent)}
            />}
      </div>
    );
  }
}

AgentToTalkTo.propTypes = {
  agentid: React.PropTypes.string,
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentToTalkTo;
