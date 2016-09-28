import Component from '../../components/component.react.js'; //
import React from 'react';
import immutable from 'immutable';

class MissionResultsChaining extends Component {
  render() {
    const {jsonapi} = this.props;
    const activemission = jsonapi.get('activemission');
    return (
      <div id='MissionResultsChaining'>
        {jsonapi.get('missions').find(mission => mission.get('tag') === 'discovered')
          && activemission.get('tag') !== 'discovered' &&
          <p>Police enforcement group spotted you during your last mission.
              You need to send agent to make escape from their clutches possible.
              - New Mission: Discovered - in Briefing Room</p>}
        {jsonapi.get('missions').find(mission => mission.get('tag') === 'discovered')
          && activemission.get('tag') === 'discovered' &&
          <p>Police enforcement group is following the false track now.</p>}
        {jsonapi.get('missions').find(mission => mission.get('tag') === 'noticed')
          && activemission.get('tag') !== 'noticed' &&
          <p>Your actions been noticed during your last mission. Youd better send an agent
              to make amends with the locals, so that they do not rat you out.
              - New Mission: Noticed - in Briefing Room</p>}
        {jsonapi.get('missions').find(mission => mission.get('tag') === 'noticed')
          && activemission.get('tag') === 'noticed' &&
          <p>You have dealt with locals.</p>}
        {!(jsonapi.get('missions').find(mission => mission.get('tag') === 'noticed')
          || jsonapi.get('missions').find(mission => mission.get('tag') === 'discovered')) &&
            <p>Mission went suspicously quietly, at one time you had that feeling of someone watching you,
            but that was probably just a fluke. Nothing happened.</p>}
      </div>
    );
  }
}

MissionResultsChaining.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionResultsChaining;
