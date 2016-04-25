import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

import DocumentTitle from 'react-document-title';
import IntroScreen from '../introduction/intro.screen.react';

class IntroductionPage extends Component {
  render() {
    const {about} = this.props;
    return (
      <DocumentTitle title={msg('title')}>
        <div className='intro-page'>
          <IntroScreen
            about={about}
            />
          <button id='IntroToLogin' onClick={() => window.history.back()}>Back</button>
        </div>
      </DocumentTitle>
    );
  }
}

IntroductionPage.propTypes = {
  about: React.PropTypes.instanceOf(immutable.Map)
};

export default IntroductionPage;
