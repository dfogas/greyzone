import './options.game.window.styl'; //
import * as optionsActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
import dayandtime from '../../lib/dayandtime';

class OptionsGameWindow extends Component {
  loadGame(num) {
    optionsActions.loadGame(num);
  }

  saveGame(num) {
    // should save to WebStorage
    const {jsonapi} = this.props;
    optionsActions.saveGame(jsonapi, num);
  }

  render() {
    const {jsonapi} = this.props;
    const paying = jsonapi.get('paying') ? jsonapi.get('paying').toJS() : null;
    const isPaying = paying ?
      Object.keys(paying).reduce((prev, curr, index, array) => {
        return paying[curr] || prev;
      }, false) : false;
    return (
      <div id="OptionsGameWindow">
        <fieldset>
          <legend>Game Window</legend>
          <table>
            <thead>
              <th>Save Game</th>
              <th>Load Game</th>
              <th>Game Description</th>
            </thead>
            <tbody>
                {[1, 2, 3].map(num => {
                  return (
                    <tr>
                      {(num === 1 || isPaying) &&
                        <td><button className='save-game-button' onClick={(e) => this.saveGame(num)}>Save game {num}</button></td>}
                      {(num === 1 || isPaying) &&
                        <td><button className='load-game-button' onClick={(e) => this.loadGame(num)}>Load game {num}</button></td>}
                      {(num === 1 || isPaying) &&
                        <td>{`Game saved at ${dayandtime(jsonapi.getIn(['savegames', num - 1, 'savedAt']), new Date().getTimezoneOffset())} missions done: ${jsonapi.getIn(['savegames', num - 1, 'missionsDoneCount'])}`}</td>}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </fieldset>
      </div>
    );
  }
}

OptionsGameWindow.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default OptionsGameWindow;
