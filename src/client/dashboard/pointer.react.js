import './pointer.styl';
import * as dashboardActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import classnames from 'classnames';
import capitalLetter from '../lib/general/capitalletter';

class Pointer extends Component {

  render() {
    const {pointsto} = this.props;
    const pointerId = `To${capitalLetter(pointsto)}`;
    const pointer = pointsto === 'strategical' ? 'Main' : capitalLetter(pointsto);
    return (
      <div
        className={classnames('dashboardscreen-pointer', {
          'ingame-nav-curved-tail-arrow to-right': pointsto === 'strategical'
        })}
        id={pointerId}
        onClick={(e) => dashboardActions.pointerChange(pointsto)}>
        {pointer}
      </div>
    );
  }
}

Pointer.propTypes = {
  pointsto: React.PropTypes.string
};

export default Pointer;
