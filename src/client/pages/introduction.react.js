import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

import DocumentTitle from 'react-document-title';
import IntroScreen from '../introduction/intro.screen.react';

class IntroductionPage extends Component {
  render() {
    return (
      <DocumentTitle title={msg('introduction.title')}>
        <div className='intro-page'>
          <IntroScreen />
          <Link to='login'><button id='IntroToLogin'>Back to Login</button></Link>
        </div>
      </DocumentTitle>
    );
  }
}

export default IntroductionPage;
