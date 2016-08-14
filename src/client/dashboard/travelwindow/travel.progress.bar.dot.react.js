import './travel.progress.bar.dot.styl';
import Component from '../../components/component.react';
import React from 'react';

class TravelProgressBarDot extends Component {
  render() {
    const {state} = this.props;
    return (
      <div className={`travel-progress-bar-dot ${state}`}>
      </div>
    );
  }
}

TravelProgressBarDot.propTypes = {
  state: React.PropTypes.string
};

export default TravelProgressBarDot;
