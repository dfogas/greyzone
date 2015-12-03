import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {msg} from '../intl/store';

class UverKalk extends Component {

  render() {
    return (
      <DocumentTitle title={msg('uverkalk.title')}>
        <div className="uver-kalk-page">
          <p>
            <FormattedHTMLMessage message={msg('uverkalk.infoHtml')} />{' '}
          </p>
        </div>
      </DocumentTitle>
    );
  }
}

export default UverKalk;
