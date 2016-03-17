import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

import ReauthenticationForm from '../auth/reauthentication.react.js';

class Reauthentication extends Component {

  render() {
    return (
      <DocumentTitle title={msg('auth.reauthentication.title')}>
        <div className="reauthentication-page">
          <ReauthenticationForm {...this.props} />
        </div>
      </DocumentTitle>
    );
  }

}

export default Reauthentication;
