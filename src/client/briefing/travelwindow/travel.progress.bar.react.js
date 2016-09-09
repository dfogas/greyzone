import './travel.progress.bar.styl'; //
import * as travelActions from './actions';
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import TravelProgressBarDot from './travel.progress.bar.dot.react';

class TravelProgressBar extends Component {
  componentDidMount() {
    travelActions.moveDot();
  }

  render() {
    const {dashboard} = this.props;
    const progressbarindex = dashboard.getIn(['progressbar', 'index']);
    const dots = immutable.fromJS(['off', 'off', 'off', 'off', 'off']).set(progressbarindex, 'on');
    return (
      <div
        id='TravelProgressBar'
        onClick={(e) => travelActions.travelWindowToggle()}>
        {dots.map(dot => {
          return (
            <TravelProgressBarDot
              state={dot}
              />
          );
        })}
      </div>
    );
  }
}

TravelProgressBar.propTypes = {
  dashboard: React.PropTypes.instanceOf(immutable.Map)
};

export default TravelProgressBar;
