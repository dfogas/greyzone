import './payment.sent.styl';
import Component from '../components/component.react';
import React from 'react';

class PaymentSent extends Component {
  render() {
    return (
      <div id='PaymentSent'>
        Muney has been sent.
        <br />
        <div>
          Redirecting...
        </div>
      </div>
    );
  }
}

export default PaymentSent;
