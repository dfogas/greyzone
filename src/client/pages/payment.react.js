import DocumentTitle from 'react-document-title';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

import PaymentForm from '../payments/payment.form.react';

class PaymentPage extends Component {
  render() {
    return (
      <DocumentTitle title={msg('payments.title')}>
        <div id='PaymentsPage'>
          <PaymentForm />
        </div>
      </DocumentTitle>
    );
  }
}

export default PaymentPage;
