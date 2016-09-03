import CommandCenterScreen from '../command/command.screen.react';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
import {msg} from '../intl/store';


class Command extends Component {

  render() {
    const {jsonapi, users} = this.props;
    const viewer = users.get('viewer');
    const missionstarted = jsonapi.getIn(['activemission', 'started']);

    return (
      <DocumentTitle title={msg('command.title')}>
        {!missionstarted && <div className='command-page'>
          <CommandCenterScreen
            jsonapi={jsonapi}
            viewer={viewer}
            />
        </div>}
      </DocumentTitle>
    );
  }
}

Command.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  users: React.PropTypes.instanceOf(immutable.Map)
};

export default Command;
