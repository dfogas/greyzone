import Component from '../components/component.react';
import React from 'react';

class EquipmentStockCounter extends Component {
  render() {
    const {available, name, price, quantity} = this.props;

    return (
      <div className={'equipment-stock-counter' + (available ? ' available' : '')}>
        {quantity} {quantity === 1 ? 'piece' : 'pieces'}/${price}
        <br />
        {name}
      </div>
    );
  }
}

EquipmentStockCounter.propTypes = {
  available: React.PropTypes.bool,
  name: React.PropTypes.string,
  price: React.PropTypes.number,
  quantity: React.PropTypes.number
};

export default EquipmentStockCounter;
