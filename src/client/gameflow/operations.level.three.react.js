import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

class OperationsLevelThree extends Component {
  render() {
    const {operationslevelthree} = this.props;
    return (
      <div
        className={operationslevelthree ? 'done' : ''}
        id='OperationsLevelThree'>
        {msg('tutorial.goals.operationslevelthree')}
      </div>
    );
  }
}

OperationsLevelThree.propTypes = {
  operationslevelthree: React.PropTypes.bool
};

export default OperationsLevelThree;
