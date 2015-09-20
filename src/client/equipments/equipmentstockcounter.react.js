import Component from '../components/component.react';
import React from 'react';

class EquipmentStockCounter extends Component {
  render() {
    const {name, price, quantity} = this.props;

    return (
      <div className="equipment-stock-counter">
        {quantity} {quantity === 1 ? 'piece' : 'pieces'}/${price}
        <br />
        {name}
      </div>
    );
  }
}

EquipmentStockCounter.propTypes = {
  name: React.PropTypes.string,
  price: React.PropTypes.number,
  quantity: React.PropTypes.number
};

export default EquipmentStockCounter;
