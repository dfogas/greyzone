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
    const {equipment, key} = this.props;
    return (
      <div
        className='equipment-item'
        id={equipment.get('name').replace(/\s+/g, '')}
        key={key}
        >
        <input
          className='equipment-buy-btn'
          onClick={this.buy.bind(this)}
          type='button'
          value='Buy'
          />
        <input
          className='equipment-sell-btn'
          onClick={this.sell.bind(this)}
          type='button'
          value='Sell'
          />
        <EquipmentStockItem
          equipment={equipment}
        />
        <EquipmentStockCounter
          name={equipment.get('name')}
          price={equipment.get('price')}
          quantity={equipment.get('quantity')}
        />
      </div>
    );
  }
}

EquipmentItem.propTypes = {
  equipment: React.PropTypes.instanceOf(immutable.Map),
  key: React.PropTypes.string
};

export default EquipmentItem;
