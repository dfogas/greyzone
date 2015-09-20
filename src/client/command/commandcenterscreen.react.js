import './command.css';
import Component from '../components/component.react';
import React from 'react';

import MainScreen from './mainscreen.react';

class CommandCenterScreen extends Component {
        // <InfoBar />
        // <CountryBar />
        // <AgentBar />

  render() {
    const {viewer} = this.props;
    return (
      <div id='CommandCenterScreen'>
        <MainScreen viewer={viewer} />
      </div>
    );
  }
}

CommandCenterScreen.propTypes = {
  viewer: React.PropTypes.object
};

export default CommandCenterScreen;
