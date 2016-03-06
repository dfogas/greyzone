import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import ArmoryScreen from '../agents/armoryscreen.react';
import DocumentTitle from 'react-document-title';

class Armory extends Component {
  render() {
    const {jsonapi} = this.props;
    const missionstarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <DocumentTitle title={msg('armory.title')}>
        {!missionstarted && <div className='armory-page'>
          <ArmoryScreen
            jsonapi={jsonapi}
            />
        </div>}
      </DocumentTitle>
    );
  }
}

Armory.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Armory;
