import './agent.talk.profile.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import prop from '../../lib/general/r.i.prop';
import formattedImg from '../../lib/bml/formattedimg';

class AgentTalkProfile extends Component {
  render() {
    const {agent, talk} = this.props;
    const isLoyal = prop('loyalty', agent) === 'loyal';
    const imgsrc = formattedImg(isLoyal, true, agent);

    return (
      <div
        className='agent-talks-profile'
        style={{
          backgroundImage: `url('../${imgsrc}')`
        }}>
        <div className='agent-talk'>{talk}</div>
      </div>
    );
  }
}

AgentTalkProfile.propTypes = {
  agent: React.PropTypes.instanceOf(immutable.Map),
  talk: React.PropTypes.string
};

export default AgentTalkProfile;
