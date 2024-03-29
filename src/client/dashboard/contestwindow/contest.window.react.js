import './gemini-scrollbar.css';
import './contest.window.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import uuid from '../../lib/guid';

import GeminiScrollbar from 'react-gemini-scrollbar';
import Pointer from '../pointer.react';

class ContestWindow extends Component {
  refreshContest() {
    dashboardActions.refreshStandings();
  }

  render() {
    const {contest} = this.props;
    const contestsortedbytotalrep = contest.sortBy(contestant =>
      contestant.get('countrystats').reduce((prev, curr) => {
        return -curr.get('reputation') * curr.get('obscurity') + prev;
      }, 0));
    const contestoverview = contestsortedbytotalrep.map(contestant => {
      return (
        <tr
          className='contestant-stat'
          key={uuid() + 'contestentry'}
          >
          <td>{contestant.get('name')}</td>
          <td>{contestant.get('countrystats').reduce((prev, curr) => {
            return Math.round10(curr.get('reputation') * curr.get('obscurity') + prev, 0);
          }, 0)}</td>
        </tr>
      );
    });

    return (
      <div id='ContestWindow'>
        <GeminiScrollbar>
          <table
            id="ContestTable"
            style={{opacity: 1}}
            >
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {contestoverview}
            </tbody>
          </table>
        </GeminiScrollbar>
        <Pointer pointsto='strategical' />
        <button
          id='RefreshContestButton'
          onClick={this.refreshContest}>Refresh</button>
      </div>
    );
  }
}

ContestWindow.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List)
};

export default ContestWindow;
