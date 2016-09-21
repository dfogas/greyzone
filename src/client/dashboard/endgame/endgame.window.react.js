/* Smart Component - to be displayed after you click retire */
import './endgame.window.styl'; //
import * as logActions from '../logwindow/actions';
import * as endGameActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';
import {FormattedHTMLMessage} from 'react-intl';

import NewGameButton from './newgame.button.react';
import StatisticsWindow from './statistics.window.react';

class EndGameWindow extends Component {
  displayStatistics() {
    endGameActions.displayGameEndStatistics();
  }

  render() {
    const {jsonapi} = this.props;
    const countrystats = jsonapi.get('countrystats');
    const gameend = jsonapi.get('gameend');
    const options = jsonapi.get('options');
    const statistics = jsonapi.get('statistics');

    return (
      <div id="EndGameWindow">
        {`You ended the game with ${
          Math.round(countrystats.reduce((prev, curr) => {
            return curr.get('reputation') * curr.get('obscurity') + prev;
          }, 0) +
          (gameend === 'richandhidden' ? 50000 : 0))
        } total score.`}
        Your game end is:
          {gameend === 'retirement' ? 'Given Up' : ''}
          {gameend === 'discovered' ? 'Not so secret now' : ''}
          {gameend === 'richanddiscovered' ? 'Rich But Not For Long' : ''}
          {gameend === 'richandhidden' ? 'Rich and Covered' : ''}
          {gameend === 'leftinprison' ? 'Left to Rot' : ''}
          {gameend === 'killed' ? 'KIA' : ''}

          {gameend === 'retirement' && <FormattedHTMLMessage message={msg('ends.retirement')} />}
          {gameend === 'discovered' && <FormattedHTMLMessage message={msg('ends.discovered')} />}
          {gameend === 'richanddiscovered' && <FormattedHTMLMessage message={msg('ends.richanddiscovered')} />}
          {gameend === 'richandhidden' && <FormattedHTMLMessage message={msg('ends.richandhidden')} />}
          {gameend === 'leftinprison' && <FormattedHTMLMessage message={msg('ends.leftinprison')} />}
          {gameend === 'killed' && <FormattedHTMLMessage message={msg('ends.killed')} />}
        <NewGameButton
          jsonapi={jsonapi}
          />
        <button
          id="DisplayStatistics"
          onClick={this.displayStatistics}>DisplayStatistics</button>
        <button
          id="ExportLogEndgameWindowButton"
          onClick={(e) => logActions.exportLog()}>{msg('dashboard.strategical.log.download')}</button>
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
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default EndGameWindow;
