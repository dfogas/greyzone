import './command.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import MainScreen from './mainscreen.react';

class CommandCenterScreen extends Component {

  render() {
    const {jsonapi} = this.props;

    return (
      <div id='CommandCenterScreen'>
        <MainScreen
          jsonapi = {jsonapi}
          />
      </div>
    );
  }
}

CommandCenterScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  viewer: React.PropTypes.object
};

export default CommandCenterScreen;
