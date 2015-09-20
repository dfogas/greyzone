import WeeklyContestScreen from '../contest/weeklycontestscreen.react';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
import {msg} from '../intl/store';

class Contest extends Component {
  render() {
    const {contest, pendingActions} = this.props;

    return (
      <DocumentTitle title={msg('contest.title')}>
        <div className='contest-page'>
          <WeeklyContestScreen contest={contest} pendingActions={pendingActions} />
        </div>
      </DocumentTitle>
    );
  }
}

Contest.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List),
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Contest;
