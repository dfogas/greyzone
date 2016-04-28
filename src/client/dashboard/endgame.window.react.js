/* Smart Component - to be displayed after you click retire */
import './endgame.window.styl';
import * as dashboardActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import NewGameButton from './optionswindow/newgame.button.react';
import StatisticsWindow from './statisticswindow/statistics.window.react';

class EndGameWindow extends Component {
  displayStatistics() {
    dashboardActions.displayGameEndStatistics();
  }

  render() {
    const {countrystats, gameend, name, options, started, statistics, userId} = this.props;
    return (
      <div id="EndGameWindow">
        You ended the game with
        {' ' +
          countrystats.reduce((prev, curr) => {
            return -curr.get('reputation') * curr.get('obscurity') + prev;
          }, 0)
        } total score.
        Your game end is:
        <p>
          {gameend === 'retirement' && msg('ends.prematureretirement')}
          {gameend === 'discovered' && msg('ends.discovered')}
        </p>
        <NewGameButton
          name={name}
          userId={userId}
          />
        <button
          id="DisplayStatistics"
          onClick={this.displayStatistics}>DisplayStatistics</button>
        <hr />
        {options.getIn(['gameend', 'statistics']) &&
          <StatisticsWindow
            countrystats={countrystats}
            name={name}
            started={started}
            statistics={statistics}
            userId={userId}
            />
          }
      </div>
    );
  }
}

EndGameWindow.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.List),
  gameend: React.PropTypes.string,
  name: React.PropTypes.string,
  options: React.PropTypes.instanceOf(immutable.Map),
  started: React.PropTypes.number,
  statistics: React.PropTypes.instanceOf(immutable.Map),
  userId: React.PropTypes.string
};

export default EndGameWindow;
