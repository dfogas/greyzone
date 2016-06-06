import Component from '../components/component.react';
import React from 'react';

class PaymentForm extends Component {
  render() {
    return (
      <div id='PaymentForm'>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="7PAP82BHTDJXE" />
          <table>
            <tr>
              <td>
                <input type="hidden" name="on0" value="Campaigns">Campaigns</input>
              </td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                	<option value="Base">Base $5.99 USD</option>
                	<option value="Collector(+Base)">Collector(+Base) $12.99 USD</option>
                	<option value="Revenge(+Base)">Revenge(+Base) $12.99 USD</option>
                	<option value="Bundle(All above)">Bundle(All above) $19.99 USD</option>
                </select>
              </td>
            </tr>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    );
  }
}

export default PaymentForm;
