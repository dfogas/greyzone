import './events.overview.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class EventsOverview extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div id='EventsOverview'>
        <div className='game-event'>
          <table>
            <th>Tag</th>
            <th>Country</th>
            <th>Level</th>
            {jsonapi.get('events').map(jsev => {
              return (
                <tr>
                  <td>{jsev.get('tag')}</td>
                  <td>{jsev.get('country')}</td>
                  <td>{jsev.get('level')}</td>
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
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default EventsOverview;
