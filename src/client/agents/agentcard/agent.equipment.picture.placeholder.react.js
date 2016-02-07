import Component from '../../components/component.react.js';
import React from 'react';
import classnames from 'classnames';

class AgentEquipmentPicturePlaceholder extends Component {
  render() {
    const {equipment} = this.props;
    const classString = classnames('agent-equipment-picture-placeholder', equipment.get('name').replace(/\s+/g, ''), {
      'on-mission': this.props.isMission,
      'showcased': this.props.isShowcased
    });
    return (
      <div
        className={classString}
        >
      </div>
    );
  }
}

export default AgentEquipmentPicturePlaceholder;
