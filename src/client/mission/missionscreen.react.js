import './missionscreen.styl';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';
import immutable from 'immutable';
import TaskTier from './tasktier/tasktier.react';
import TableTopTier from './tabletoptier/tabletoptier.react';
import AgentsTier from './agentstier/agentstier.react';
import MissionToBriefingButton from '../navs/missiontobriefing.react';

class MissionTrackingScreen extends Component {
  render() {
    const {jsonapi} = this.props;

    return (
      <div id='MissionTrackingScreen'>
        <TaskTier
          activemission={jsonapi.get('activemission')}
          />
        <TableTopTier
          activemission={jsonapi.get('activemission')}
          />
        <AgentsTier
          jsonapi={jsonapi}
          />
        <MissionToBriefingButton />
      </div>
    );
  }
}

MissionTrackingScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default MissionTrackingScreen;
