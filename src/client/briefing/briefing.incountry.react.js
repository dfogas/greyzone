import './briefing.incountry.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';

class BriefingInCountry extends Component {
  render() {
    const {countrystats, inCountry} = this.props;
    return (
      <div id='BriefingInCountry'>
        in {inCountry}
        <div id='BriefingObscurityDisplay'>
          {inCountry && Math.round10(countrystats.find(item => item.get('name') === inCountry).get('obscurity'), -2) + ' obscurity'}
        </div>
      </div>
    );
  }
}

BriefingInCountry.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.List),
  inCountry: React.PropTypes.string
};

export default BriefingInCountry;
