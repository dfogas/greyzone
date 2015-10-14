import './mainscreen.css';
import Component from '../components/component.react.js';
import React from 'react';
import MapLocation from './maplocation.react';

class MainScreen extends Component {
  render() {
    return (
      <div className='main-screen'>
        <img src='../../../assets/img/bg/the_network.png' />
        <MapLocation />
      </div>
    );
  }
}

MainScreen.propTypes = {
};

export default MainScreen;
