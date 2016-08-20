import Component from '../components/component.react'; //
import React from 'react';
import {msg} from '../intl/store';
import {Link} from 'react-router';

import DocumentTitle from 'react-document-title';

class LogoutPage extends Component {

  render() {
    return (
      <DocumentTitle title={msg('logout.title')}>
        <div
          className={`logout-page`}
          style={{color: 'white'}}>
          <p>
            {`You've been logged out.`}
          </p>
          back to <Link to='/'><span style={{color: 'red'}}>Home page</span></Link>
        </div>
      </DocumentTitle>
    );
  }
}

export default LogoutPage;
