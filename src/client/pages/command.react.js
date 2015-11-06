import CommandCenterScreen from '../command/commandcenterscreen.react';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
import {mymsg} from '../intl/store';


class Command extends Component {

  render() {
    const {i18n, jsonapi, users} = this.props;
    const viewer = users.get('viewer');
    const locales = i18n.get('locales');

    return (
      <DocumentTitle title={mymsg('command.title')}>
        <div className='command-page'>
          <CommandCenterScreen
            jsonapi={jsonapi}
            viewer={viewer}
            />
        </div>
      </DocumentTitle>
    );
  }
}

Command.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  users: React.PropTypes.instanceOf(immutable.Map)
};

export default Command;
