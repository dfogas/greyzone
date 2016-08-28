import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import requireAuth from '../auth/requireauth.react';
import {msg} from '../intl/store';

import TutorialScreen from '../tutorial/tutorial.screen.react';

class Tutorial extends Component {
  render() {
    const {game, jsonapi} = this.props;
    return (
      <DocumentTitle title={msg('tutorial.title')}>
        <div className='tutorial-page'>
          <TutorialScreen
            game={game}
            jsonapi={jsonapi}
            tutorial={jsonapi.get('tutorial')}
            />
        </div>
      </DocumentTitle>
    );
  }
}

Tutorial.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default Tutorial;
