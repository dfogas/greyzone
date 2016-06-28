import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import ArmoryScreen from '../agents/armory.screen.react';
import DocumentTitle from 'react-document-title';

class Armory extends Component {
  render() {
    const {game, jsonapi} = this.props;
    const missionstarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <DocumentTitle title={msg('armory.title')}>
        {!missionstarted && <div className='armory-page'>
          <ArmoryScreen
            game={game}
            jsonapi={jsonapi}
            />
        </div>}
      </DocumentTitle>
    );
  }
}

Armory.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map).isRequired,
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Armory;
