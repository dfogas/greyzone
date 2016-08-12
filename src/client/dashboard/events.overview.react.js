import './events.overview.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class EventsOverview extends Component {
  render() {
    const {game} = this.props;
    return (
      <div id='EventsOverview'>
        <div style={{display: 'block'}}>Events Overview</div>
        {game.get('events').map(gaev => {
          return (
            <div className='game-event'>
              {gaev.get('tag')}{gaev.get('country')}
            </div>
          );
        })}
      </div>
    );
  }
}

EventsOverview.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map)
};

export default EventsOverview;
