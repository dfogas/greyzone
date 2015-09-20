import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class Home extends Component {

  render() {
    return (
      <DocumentTitle title={msg('home.title')}>
        <div className="home-page">
          <p>
            <FormattedHTMLMessage message={msg('home.infoHtml')} />{' '}
          </p>
        </div>
      </DocumentTitle>
    );
  }

}

export default Home;
