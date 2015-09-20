import Component from '../components/component.react';
import React from 'react';

class InfoCardCounter extends Component {
  render() {
    var classString = '';
    var counter;
    if (this.props.reputation) {
      classString += ' reputation';
      counter = this.props.reputation;
    }
    if (this.props.obscurity) {
      classString += ' obscurity';
      counter = this.props.obscurity;
    }
    if (this.props.activemissions) {
      classString += ' activemissions';
      counter = this.props.activemissions;
    }
    return (
      <div className={'countryinfo-counter' + classString}>
        {counter}
      </div>
    );
  }
}

InfoCardCounter.propTypes = {
  activemissions: React.PropTypes.number,
  counter: React.PropTypes.number,
  obscurity: React.PropTypes.number,
  reputation: React.PropTypes.number
};

export default InfoCardCounter;
