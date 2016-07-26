/* Smart Component - to be displayed after you click retire */
import './endgame.window.styl';
import * as endGameActions from './endgame/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import NewGameButton from './optionswindow/newgame.button.react';
import StatisticsWindow from './statisticswindow/statistics.window.react';

class EndGameWindow extends Component {
  displayStatistics() {
    endGameActions.displayGameEndStatistics();
  }

  render() {
    const {jsonapi} = this.props;
    const countrystats = jsonapi.get('countrystats');
    const gameend = jsonapi.get('gameend');
    const name = jsonapi.get('name');
    const options = jsonapi.get('options');
    const statistics = jsonapi.get('statistics');

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
          jsonapi={jsonapi}
          />
        <button
          id="DisplayStatistics"
          onClick={this.displayStatistics}>DisplayStatistics</button>
        <hr />
        {options.getIn(['gameend', 'statistics']) &&
          <StatisticsWindow
            started={jsonapi.get('started')}
            statistics={statistics}
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
