import MissionTrackingScreen from '../mission/missionscreen.react';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
// import requireAuth from '../auth/requireauth.react';
import {msg} from '../intl/store';

class Mission extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;

    return (
      <DocumentTitle title={msg('mission.title')}>
        <div className='mission-page'>
          <MissionTrackingScreen
            jsonapi={jsonapi}
            pendingActions={pendingActions}
            />
        </div>
      </DocumentTitle>
    );
  }
}

Mission.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Mission;
