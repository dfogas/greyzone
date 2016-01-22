import './missionsprice.table.styl';
import Component from '../../components/component.react.js';
import React from 'react';
import {msg} from '../../intl/store';

class MissionPriceTable extends Component {
  render() {
    const {missionspricelist} = this.props;
    return (
      <div id='MissionsPriceTable'>
        <table>
          <tr>
            <td>Tier</td>
            <td>Cash Cost</td>
            <td>Contacts Cost</td>
          </tr>
          <tr>
            <td>First</td>
            <td>{missionspricelist.getIn(['1', 'cash'])}</td>
            <td>{missionspricelist.getIn(['1', 'contacts'])}</td>
          </tr>
          <tr>
            <td>Second</td>
            <td>{missionspricelist.getIn(['2', 'cash'])}</td>
            <td>{missionspricelist.getIn(['2', 'contacts'])}</td>
          </tr>
          <tr>
            <td>Third</td>
            <td>{missionspricelist.getIn(['3', 'cash'])}</td>
            <td>{missionspricelist.getIn(['3', 'contacts'])}</td>
          </tr>
          <tr>
            <td>Fourth</td>
            <td>{missionspricelist.getIn(['4', 'cash'])}</td>
            <td>{missionspricelist.getIn(['4', 'contacts'])}</td>
          </tr>
          <tr>
            <td>Fifth</td>
            <td>{missionspricelist.getIn(['5', 'cash'])}</td>
            <td>{missionspricelist.getIn(['5', 'contacts'])}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MissionPriceTable;
