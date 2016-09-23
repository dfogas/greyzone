import './story.box.styl';
import * as talkActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import storyTalk from '../lib/bml/storytalk';

class StoryBox extends Component {
  render() {
    const {agent} = this.props;
    return (
      <div className='story-box'>
        {msg(`stories.${storyTalk(agent)}`)}
        <div
          className='dialog-box-close'
          onClick={(e) => talkActions.storyBoxToggle()}>Close</div>
      </div>
    );
  }
}

StoryBox.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map)
};

export default StoryBox;
