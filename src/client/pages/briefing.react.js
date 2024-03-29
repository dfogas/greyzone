import BriefingScreen from '../briefing/briefing.screen.react';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
import {msg} from '../intl/store';

class Briefing extends Component {
  render() {
    const {game, jsonapi, pendingActions} = this.props;
    const missionstarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <DocumentTitle title={msg('briefing.title')}>
        <div className='briefing-page'>
          {!missionstarted &&
            <BriefingScreen
              game={game}
              jsonapi={jsonapi}
              pendingActions={pendingActions}
              />
          }
        </div>
      </DocumentTitle>
    );
  }
}

Briefing.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired,
  viewer: React.PropTypes.string
};

export default Briefing;
