import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

import SupportScreen from '../support/supportscreen.react';

class SupportPage extends Component {
  render() {
    const {posts} = this.props;
    return (
      <DocumentTitle title={msg('support.title')}>
        <SupportScreen
          posts={posts}
          />
      </DocumentTitle>
    );
  }
}

export default SupportPage;
