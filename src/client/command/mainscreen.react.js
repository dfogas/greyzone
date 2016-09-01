import './mainscreen.styl';
import * as commandActions from './actions';
import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

class MainScreen extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div className='main-screen'>
        Work In Progress
        <button id='LoadMissionsButton' onClick={(e) => commandActions.loadMissions()}>Load Missions</button>
        <div>
          {jsonapi.get('missionsDone').map(item => {
            return (
              <div className='org-mission-done'>`Mission {item.get('title')} in {item.get('inCountry')} was a {item.get('result')}`</div>
            );
          })}
        </div>
      </div>
    );
  }
}

MainScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MainScreen;
