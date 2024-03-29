import './equipment.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import EquipmentItem from './equipmentitem.react';
import uuid from '../lib/guid';

class EquipmentStock extends Component {

  render() {
    const {enhancements, equipments, jsonapi, list, paying, stock} = this.props;
    let filteredenhancements;
    if (stock === 'operations')
      filteredenhancements = enhancements.filter(enh => enh.get('name') === 'Locals' || enh.get('name') === 'Arms Dealer' || enh.get('name') === 'Stork Ind.');
    if (stock === 'electronics')
      filteredenhancements = enhancements.filter(enh => enh.get('name') === 'Workshop' || enh.get('name') === 'Laboratory' || enh.get('name') === 'Army Level Crypto');
    if (stock === 'stealth')
      filteredenhancements = enhancements.filter(enh => enh.get('name') === 'Forger' || enh.get('name') === 'Pharmacy' || enh.get('name') === 'Cleaning Service');

    var classString = ' ' + stock;
    return (
      <div className={'equipment-stock' + classString}>
        {equipments.map(equipment => {
          return (
            <EquipmentItem
              enhancements={filteredenhancements}
              equipment={equipment}
              jsonapi={jsonapi}
              key={uuid() + 'eqstock'}
              list={list}
              paying={paying}
              stock={stock}
            />
          );
        })}
      </div>
    );
  }
}

EquipmentStock.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  equipments: React.PropTypes.instanceOf(immutable.List),
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  list: React.PropTypes.instanceOf(immutable.List),
  paying: React.PropTypes.instanceOf(immutable.Map),
  stock: React.PropTypes.string
};

export default EquipmentStock;
