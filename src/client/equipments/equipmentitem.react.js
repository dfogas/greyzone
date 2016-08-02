import * as talkActions from '../dashboard/talk/actions';
import * as equipmentActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import equipmentEnhancement from '../lib/bml/equipmentenhancement';
import toyIsAvailable from '../lib/bml/toyisavailable';
import immutable from 'immutable';

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
      talkActions.facilityUpgradeDialog(enhancement);
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
        <div className='equipment-count'>
          {equipment.get('quantity')}
        </div>
        {jsonapi.getIn(['dashboard', 'facilityUpgradeDialog']) === enhancement.get('name') &&
          <FacilityUpgradeDialog
            enhancement={enhancement}
            list={list}
            owned={isAvailable}
            paying={paying}
            />}
        {equipment.get('heavy') &&
          <div
            className='heavy-equipment-tag'>Heavy</div>
          }
      </div>
    );
  }
}

EquipmentItem.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  equipment: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map),
  key: React.PropTypes.string,
  list: React.PropTypes.instanceOf(immutable.List),
  paying: React.PropTypes.instanceOf(immutable.Map),
  stock: React.PropTypes.string
};

export default EquipmentItem;
