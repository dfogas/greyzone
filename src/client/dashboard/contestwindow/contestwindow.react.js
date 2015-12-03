import './contestwindow.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class ContestWindow extends Component {
  render() {
    const {contest} = this.props;
    const contestsortedbytotalrep = contest.sortBy(contestant =>
      contestant.get('countries').reduce((prev, curr) => {
        return -curr.get('reputation') * curr.get('obscurity') + prev;
      }, 0));
    const contestoverview = contestsortedbytotalrep.map(contestant => {
      return (
        <tr className='contestant-stat'>
          <td>{contestant.get('name')}</td>
          <td>{contestant.get('countries').reduce((prev, curr) => {
            return curr.get('reputation') * curr.get('obscurity') + prev;
          }, 0)}</td>
        </tr>
      );
    });

    return (
      <div id='ContestWindow'>
        <table id="ContestTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {contestoverview}
          </tbody>
        </table>
      </div>
    );
  }
}

ContestWindow.propTypes = {
  contest: React.PropTypes.instanceOf(immutable.List)
};

export default ContestWindow;
