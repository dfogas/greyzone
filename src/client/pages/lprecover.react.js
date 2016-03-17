import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

import LPRecoverForm from '../auth/lprecover.react';

class LPRecover extends Component {

  render() {
    return (
      <DocumentTitle title={msg('auth.lprecover.title')}>
        <div className="lprecover-page">
          <LPRecoverForm {...this.props} />
        </div>
      </DocumentTitle>
    );
  }

}

export default LPRecover;
