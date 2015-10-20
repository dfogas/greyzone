import './mainscreen.css';
import Component from '../components/component.react.js';
import React from 'react';

import MapList from './maplist.react';

class MainScreen extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div className='main-screen'>
        <img src='../../../assets/img/bg/the_network.png' />
        <MapList
          jsonapi = {jsonapi}
          />
      </div>
    );
  }
}

MainScreen.propTypes = {
};

export default MainScreen;
