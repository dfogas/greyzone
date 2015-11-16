import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

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

SupportPage.propTypes = {
  posts: React.PropTypes.instanceOf(immutable.List)
};

export default SupportPage;
