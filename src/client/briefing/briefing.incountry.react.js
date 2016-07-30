import './briefing.incountry.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import oQ from '../lib/obscurityquality'; //

class BriefingInCountry extends Component {
  render() {
    const {countrystats, inCountry, jsonapi} = this.props;
    const briefingCountry = inCountry ? inCountry : jsonapi.getIn(['dashboard', 'countryofoperation']);
    return (
      <div id='BriefingInCountry'>
        in {briefingCountry}
        <div id='BriefingObscurityDisplay'>
          {briefingCountry && oQ(Math.round10(countrystats.find(item => item.get('name') === briefingCountry).get('obscurity'), -2))}
        </div>
      </div>
    );
  }
}

BriefingInCountry.propTypes = {
  countrystats: React.PropTypes.instanceOf(immutable.List),
  inCountry: React.PropTypes.string,
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default BriefingInCountry;
