import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import EquipmentItem from './equipmentitem.react';

class EquipmentStock extends Component {

  render() {
    const {equipments} = this.props;

    var classString = ' ';
    if (this.props.stock)
      classString += this.props.stock;
    return (
      <div className={'equipment-stock' + classString}>
        {
          equipments.map(equipment => {
            return (
              <EquipmentItem
                equipment={equipment}
              />
            );
          })
        }
      </div>
    );
  }
}

EquipmentStock.propTypes = {
  equipments: React.PropTypes.instanceOf(immutable.List),
  stock: React.PropTypes.string
};

export default EquipmentStock;
