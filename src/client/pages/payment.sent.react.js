import DocumentTitle from 'react-document-title';
import React from 'react';
import Component from '../components/component.react';
import PaymentSent from '../payments/payment.sent.react';
import {msg} from '../intl/store';

class PaymentSentPage extends Component {
  render() {
    return (
      <DocumentTitle title={msg('payments.sent.title')}>
        <div id='PaymentSentPage'>
          <PaymentSent />
        </div>
      </DocumentTitle>
    );
  }
}

export default PaymentSentPage;
