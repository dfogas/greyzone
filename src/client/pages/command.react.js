import CommandCenterScreen from '../command/commandcenterscreen.react';
import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
// import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
import {msg} from '../intl/store';

class Command extends Component {

  render() {
    const {users} = this.props;
    const viewer = users.get('viewer');

    return (
      <DocumentTitle title={msg('command.title')}>
        <div className='command-page'>
          <CommandCenterScreen viewer={viewer} />
        </div>
      </DocumentTitle>
    );
  }
}

export default Command;
