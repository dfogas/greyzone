import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
//import requireAuth from '../auth/requireauth.react.js';
// import requireAuth from '../auth/requireauth.react';
import {msg} from '../intl/store';

import TutorialScreen from '../tutorial/tutorial.screen.react';

class Tutorial extends Component {
  render() {
    const {game, jsonapi} = this.props;
    return (
      <div className='tutorial-page'>
        <TutorialScreen
          game={game}
          jsonapi={jsonapi}
          tutorial={jsonapi.get('tutorial')}
          />
      </div>
    );
  }
}

Tutorial.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Tutorial;
