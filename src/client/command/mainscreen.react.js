import './mainscreen.styl';
import Component from '../components/component.react.js';
import React from 'react';
import immutable from 'immutable';

import MapList from './maplist.react';

class MainScreen extends Component {
  render() {
    const {jsonapi} = this.props;
    return (
      <div className='main-screen'>
        {/*<MapList
          jsonapi = {jsonapi}
          />*/}
      </div>
    );
  }
}

MainScreen.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default MainScreen;
