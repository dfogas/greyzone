import './agentprice.table.styl';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
import formatMoney from '../../lib/formatmoney';

class AgentPriceTable extends Component {
  render() {
    const {agentspricelist} = this.props;
    return (
      <div id='AgentPriceTable'>
        <table>
          <tr>
            <td>Rank 1</td>
            <td>Rank 2</td>
            <td>Rank 3</td>
            <td>Rank 4</td>
            <td>Rank 5</td>
            <td>Rank 6</td>
          </tr>
          <tr>
            <td>{formatMoney(agentspricelist.get('1'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('2'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('3'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('4'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('5'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('6'), 0, '.', ',')}$</td>
          </tr>
          <tr>
            <td>Rank 7</td>
            <td>Rank 8</td>
            <td>Rank 9</td>
            <td>Rank 10</td>
            <td>Rank 11</td>
            <td>Rank 12</td>
          </tr>
          <tr>
            <td>{formatMoney(agentspricelist.get('7'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('8'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('9'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('10'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('11'), 0, '.', ',')}$</td>
            <td>{formatMoney(agentspricelist.get('12'), 0, '.', ',')}$</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default AgentPriceTable;
