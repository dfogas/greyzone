import './briefing.incountry.styl';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import oQ from '../lib/bml/obscurityquality'; //

class BriefingInCountry extends Component {
  render() {
    const {jsonapi} = this.props;
    const inCountry = jsonapi.getIn(['activemission', 'inCountry']);
    const briefingCountry = inCountry !== '' ? inCountry : jsonapi.getIn(['dashboard', 'countryofoperation']);
    const countrystats = jsonapi.get('countrystats');
    return (
      <div id='BriefingInCountry'>
        in {briefingCountry}
        <div id='BriefingObscurityDisplay'>
          {briefingCountry && oQ(Math.round10(countrystats.find(item => item.get('name') === briefingCountry).get('obscurity'), -2))}
        </div>
        <div id='BriefingAttentionLevel'>
          {briefingCountry && jsonapi.get('events').find(jsev => jsev.get('country') === briefingCountry && jsev.get('tag') === 'attention').get('level')}
        </div>
      </div>
    );
  }
}

BriefingInCountry.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default BriefingInCountry;
