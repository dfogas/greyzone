import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

import DocumentTitle from 'react-document-title';
import AboutScreen from '../about/about.screen.react';

class About extends Component {
  render() {
    return (
      <DocumentTitle title={msg('about.title')}>
        <div className='about-page'>
          <AboutScreen />
          <button
            id='AboutBackButton'
            onClick={(e) => window.history.back()}>Back</button>
        </div>
      </DocumentTitle>
    );
  }
}

export default About;
