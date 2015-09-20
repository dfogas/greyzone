import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import AgentEquipScreen from '../agents/agentequipscreen.react';
import DocumentTitle from 'react-document-title';

class Armory extends Component {
  render() {
    const {jsonapi, pendingActions} = this.props;

    return (
      <DocumentTitle title={msg('armory.title')}>
        <div className='armory-page'>
          <AgentEquipScreen jsonapi={jsonapi} pendingActions={pendingActions} />
        </div>
      </DocumentTitle>
    );
  }
}

Armory.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Armory;
