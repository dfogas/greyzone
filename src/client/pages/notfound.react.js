import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {msg} from '../intl/store';

class NotFound extends Component {

  render() {
    return (
      <DocumentTitle title={msg('notFound.title')}>
        <div className="notfound-page" style={{color: 'silver'}}>
          <h1>{msg('notFound.header')}</h1>
          <p>{msg('notFound.message')}</p>
        </div>
      </DocumentTitle>
    );
  }

}

export default NotFound;
