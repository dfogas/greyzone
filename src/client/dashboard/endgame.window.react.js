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
    const {jsonapi, name, options, statistics} = this.props;
    const countrystats = jsonapi.get('countrystats');
    const gameend = jsonapi.get('gameend');

    return (
      <div id="EndGameWindow">
        You ended the game with
        {' '}
        {
          countrystats.reduce((prev, curr) => {
            return curr.get('reputation') * curr.get('obscurity') + prev;
          }, 0) +
          (gameend === 'richandhidden' ? 50000 : 0)
        } total score.
        Your game end is:
          {gameend === 'retirement' ? 'Given Up' : ''}
          {gameend === 'discovered' ? 'Betrayed' : ''}
          {gameend === 'richanddiscovered' ? 'Rich But Not For Long' : ''}
          {gameend === 'richandhidden' ? 'Rich and Covered' : ''}
          {gameend === 'leftinprison' ? 'Left to Rot' : ''}
          {gameend === 'killed' ? 'KIA' : ''}
        <p>
          {gameend === 'retirement' && msg('ends.retirement')}
          {gameend === 'discovered' && msg('ends.discovered')}
          {gameend === 'richanddiscovered' && msg('ends.richanddiscovered')}
          {gameend === 'richandhidden' && msg('ends.richandhidden')}
          {gameend === 'leftinprison' && msg('ends.leftinprison')}
          {gameend === 'killed' && msg('ends.killed')}
        </p>
        <NewGameButton
          name={name}
          userId={jsonapi.get('userId')}
          />
        <button
          id="DisplayStatistics"
          onClick={this.displayStatistics}>DisplayStatistics</button>
        <hr />
        {options.getIn(['gameend', 'statistics']) &&
          <StatisticsWindow
            countrystats={countrystats}
            name={name}
            started={jsonapi.get('started')}
            statistics={statistics}
            userId={jsonapi.get('userId')}
            />
          }
      </div>
    );
  }
}

EndGameWindow.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  name: React.PropTypes.string,
  options: React.PropTypes.instanceOf(immutable.Map),
  statistics: React.PropTypes.instanceOf(immutable.Map)
};

export default EndGameWindow;
