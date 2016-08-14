import './events.overview.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class EventsOverview extends Component {
  render() {
    const {game} = this.props;
    return (
      <div id='EventsOverview'>
        <div className='game-event'>
          <table>
            <th>Tag</th>
            <th>Country</th>
            <th>Level</th>
            {game.get('events').map(gaev => {
              return (
                <tr>
                  <td>{gaev.get('tag')}</td>
                  <td>{gaev.get('country')}</td>
                  <td>{gaev.get('level')}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

EventsOverview.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map)
};

export default EventsOverview;
