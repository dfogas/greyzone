import './agentprice.table.styl';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';
// import {msg} from '../../intl/store';
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
        </table>
      </div>
    );
  }
}

AgentPriceTable.propTypes = {
  agentspricelist: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentPriceTable;
