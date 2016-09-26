import './mission.talk.styl'; //
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import missionTalk from '../../lib/bml/missiontalk';

import AgentTalkProfile from './agent.talk.profile.react';

class MissionTalk extends Component {
  render() {
    const {/*game,*/ jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    const agentsonmission = activemission.get('agentsonmission');
    return (
      <div className='mission-talk'>
        {immutable.fromJS(missionTalk(jsonapi)).map((talk, i) => {
          return (
            <AgentTalkProfile
              agent={agentsonmission.get(i)}
              talk={talk}
              />);
        })}
        <div id='MissionTalkMissionDescription'>{activemission.get('description')}</div>
      </div>
    );
  }
}

MissionTalk.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionTalk;
