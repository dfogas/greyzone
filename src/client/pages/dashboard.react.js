import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import DocumentTitle from 'react-document-title';
import DashboardScreen from '../dashboard/dashboardscreen.react';
import requireAuth from '../auth/requireauth.react';
import {msg} from '../intl/store';

class Dashboard extends Component {
  render() {
    // const {viewer: {email}} = this.props;
    const {contest, jsonapi, locales, pendingActions, viewer} = this.props;
    console.log(viewer);

    return (
      <DocumentTitle title={msg('dashboard.title')}>
        <div className="dashboard-page" >
          <DashboardScreen
            contest={contest}
            jsonapi={jsonapi}
            locales={locales}
            pendingActions={pendingActions}
            viewer={viewer}
            />
        </div>
      </DocumentTitle>
    );
  }
}

Dashboard.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  locales: React.PropTypes.string,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired,
  viewer: React.PropTypes.object
};

export default requireAuth(Dashboard);
