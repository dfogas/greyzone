import * as dashboardActions from '../dashboard/actions';
import * as equipmentActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import equipmentEnhancement from '../lib/equipmentenhancement';
import toyIsAvailable from '../lib/toyisavailable';
import immutable from 'immutable';

import EquipmentStockCounter from './equipmentstockcounter.react';
import EquipmentStockItem from './equipmentstockitem.react';
import FacilityUpgradeDialog from '../agents/facility.upgrade.dialog.react';

class EquipmentItem extends Component {
  buy() {
    const {equipment} = this.props;
    equipmentActions.buy(equipment);
  }

  upgradeDialog() {
    const {equipment, jsonapi, list} = this.props;
    const enhancement = equipmentEnhancement(equipment, list);
    if (!jsonapi.getIn(['dashboard', 'facilityUpgradeDialog']))
      dashboardActions.facilityUpgradeDialog(enhancement);
  }

  sell() {
    const {equipment} = this.props;
    equipmentActions.sell(equipment);
  }

  render() {
    const {enhancements, equipment, jsonapi, key, list, paying} = this.props;
    const enhancement = equipmentEnhancement(equipment, list);
    const isAvailable = toyIsAvailable(enhancements, equipment);
    return (
      <div
        className='equipment-item'
        id={equipment.get('name').replace(/\s+/g, '')}
        key={key}
        onClick={this.upgradeDialog.bind(this)}>
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
        <div className='equipment-count'>
          {equipment.get('quantity')}
        </div>
        {jsonapi.getIn(['dashboard', 'facilityUpgradeDialog']) === enhancement.get('name') &&
          <FacilityUpgradeDialog
            enhancement={enhancement}
            owned={isAvailable}
            paying={paying}
            />}
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
      </div>
    );
  }
}

EquipmentItem.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  equipment: React.PropTypes.instanceOf(immutable.Map),
  key: React.PropTypes.string,
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  list: React.PropTypes.instanceOf(immutable.List),
  stock: React.PropTypes.string
};

export default EquipmentItem;
