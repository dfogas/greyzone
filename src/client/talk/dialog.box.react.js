import './dialog.box.styl';
import * as talkActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import {Link} from 'react-router';
import agentTalk from '../lib/bml/agenttalk';

class DialogBox extends Component {
  render() {
    // DOMCALL
    const {agent, jsonapi} = this.props;
    const agentsays = agentTalk(agent, jsonapi);
    return (
      <div className='dialog-box' id='DialogBox'>
        {/*msg(`agents.talk.${agentTalk(agent, jsonapi.get('self'))}`)*/}
        {agentsays.text}
        <div
          className='dialog-box-close'
          onClick={(e) => talkActions.agentDialogToggle()}>Close</div>
        {agentsays.type === 'story' &&
          <div
            className='story-box-open'
            onClick={(e) => {
              talkActions.agentDialogToggle();
              talkActions.storyBoxToggle(agent);
            }}>Story</div>}
        {(window.location.href.search('talk') === -1) &&
          <Link to='talk'>
            <button className='dialog-box-to-talk'>Talk</button>
          </Link>}
      </div>
    );
  }
}

DialogBox.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default DialogBox;
