import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DocumentTitle from 'react-document-title';
import DashboardScreen from '../dashboard/dashboardscreen.react';
import DashboardToMission from '../navs/dashboardtomission.react.js';
import requireAuth from '../auth/requireauth.react';
import {msg} from '../intl/store';

class Dashboard extends Component {
  render() {
    // const {viewer: {email}} = this.props;
    const {contest, game, jsonapi, locales, pendingActions, viewer} = this.props;
    const missionstarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <DocumentTitle title={msg('dashboard.title')}>
        {!missionstarted ? <div className="dashboard-page" >
          <DashboardScreen
            contest={contest}
            game={game}
            jsonapi={jsonapi}
            locales={locales}
            pendingActions={pendingActions}
            viewer={viewer}
            />
        </div> :
        <div className="dashboard-page">
          <div id='DashboardScreen'>
            <DashboardToMission />
          </div>
        </div>}
      </DocumentTitle>
    );
  }
}

Dashboard.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List).isRequired,
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  locales: React.PropTypes.string,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired,
  viewer: React.PropTypes.object
};

export default requireAuth(Dashboard);
