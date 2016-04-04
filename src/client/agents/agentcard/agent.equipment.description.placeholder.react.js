import Component from '../../components/component.react.js';
// import classnames from 'classnames';
import React from 'react';
import immutable from 'immutable';

class AgentEquipmentDescriptionPlaceholder extends Component {
  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
  }

  render() {
    const {equipment} = this.props;
    // const classString = classnames('agent-equipment-description-placeholder', equipment.get('name').replace(/\s+/g, ''), {
    //   'on-mission': this.props.isMission,
    //   'showcased': this.props.isShowcased
    // });
    // const classString = '';
    return (
      <div
        className={'agent-equipment-description-placeholder'}>
        {equipment.get('name') || ''}
      </div>
    );
  }
}

AgentEquipmentDescriptionPlaceholder.propTypes = {
  equipment: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentEquipmentDescriptionPlaceholder;
