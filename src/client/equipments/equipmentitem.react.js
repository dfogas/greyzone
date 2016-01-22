import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

import EquipmentStockCounter from './equipmentstockcounter.react';
import EquipmentStockItem from './equipmentstockitem.react';

import * as equipmentActions from '../equipments/actions';

class EquipmentItem extends Component {
  buy() {
    const {equipment} = this.props;
    equipmentActions.buy(equipment);
  }

  sell() {
    const {equipment} = this.props;
    equipmentActions.sell(equipment);
  }

  render() {
    const {enhancements, equipment, key, stock} = this.props;
    const enhancementnames = enhancements.map(enh => enh.get('name'));
    const isAvailable = stock === 'operations' ? (
      equipment.get('name') === 'Hired Gun' && enhancementnames.indexOf('Locals') !== -1 ||
      equipment.get('name') === 'Heavy Arms' && enhancementnames.indexOf('Arms Dealer') !== -1 ||
      equipment.get('name') === 'Protective Gear' && enhancementnames.indexOf('Stork Ind.') !== -1
    ) : stock === 'electronics' ? (
      equipment.get('name') === 'Handy Kit' && enhancementnames.indexOf('Workshop') !== -1 ||
      equipment.get('name') === 'Custom Tools' && enhancementnames.indexOf('Laboratory') !== -1 ||
      equipment.get('name') === 'WPAS' && enhancementnames.indexOf('Army Level Crypto') !== -1
    ) : (
      equipment.get('name') === 'Fake Passports' && enhancementnames.indexOf('Forger') !== -1 ||
      equipment.get('name') === 'Drugs Control' && enhancementnames.indexOf('Pharmacy') !== -1 ||
      equipment.get('name') === 'DCP' && enhancementnames.indexOf('Cleaning Service') !== -1
    );
    return (
      <div
        className='equipment-item'
        id={equipment.get('name').replace(/\s+/g, '')}
        key={key}
        >
        {isAvailable &&
          <input
            className='equipment-buy-btn'
            onClick={this.buy.bind(this)}
            type='button'
            value='Buy'
          />}
        {isAvailable &&
          <input
            className='equipment-sell-btn'
            onClick={this.sell.bind(this)}
            type='button'
            value='Sell'
          />}
        <EquipmentStockItem
          available={isAvailable}
          equipment={equipment}
        />
        <EquipmentStockCounter
          available={isAvailable}
          name={equipment.get('name')}
          price={equipment.get('price')}
          quantity={equipment.get('quantity')}
        />
      </div>
    );
  }
}

EquipmentItem.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  equipment: React.PropTypes.instanceOf(immutable.Map),
  key: React.PropTypes.string,
  stock: React.PropTypes.string
};

export default EquipmentItem;
