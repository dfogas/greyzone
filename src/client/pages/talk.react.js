import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import TalkScreen from '../talk/talk.screen.react';
import DocumentTitle from 'react-document-title';

class Talk extends Component {
  render() {
    const {game, jsonapi} = this.props;
    const missionstarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <DocumentTitle title={msg('talk.title')}>
        {!missionstarted && <div className='talk-page'>
          <TalkScreen
            game={game}
            jsonapi={jsonapi}
            />
        </div>}
      </DocumentTitle>
    );
  }
}

Talk.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Talk;
