import './briefing.incountry.styl';
import Component from '../components/component.react';
import React from 'react';

class BriefingInCountry extends Component {
  render() {
    const {inCountry} = this.props;
    return (
      <div id='BriefingInCountry'>
        in {inCountry}
      </div>
    );
  }
}

BriefingInCountry.propTypes = {
  inCountry: React.PropTypes.string
};

export default BriefingInCountry;
