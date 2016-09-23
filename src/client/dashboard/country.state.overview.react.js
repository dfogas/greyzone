import './country.state.overview.styl';
import React from 'react';
import Component from '../components/component.react';
import immutable from 'immutable';

class CountryStateOverview extends Component {
  render() {
    const {/*game, */jsonapi} = this.props;
    const countryofoperation = jsonapi.getIn(['dashboard', 'countryofoperation']);
    return (
        <div id='CountryStateOverview'>
          {jsonapi.get('countrystats').map(cs => {
            const obscurity = cs.get('obscurity');
            return (
              <div
                className='country-obscurity-bar-template'
                style={{
                  background: 'linear-gradient(white, grey, black)'
                }}>
                {
                  <div className='country-attention-level'>
                    {`${jsonapi.getIn([
                      'events',
                      jsonapi.get('events').indexOf(jsonapi.get('events').find(jsev => jsev.get('country') === cs.get('name'))),
                      'level'
                    ])}`}
                  </div>
                }
                <div
                  className='country-obscurity-bar'
                  style={{
                    background: 'rgba(125, 125, 125, 0.7)',
                    borderRadius: '5px',
                    height: (3 - obscurity) * 100,
                    width: '15px'
                  }}>
                  <div className='country-obscurity-bar-countryname'>
                    {`${cs.get('name') === countryofoperation ? '*' : ''}${jsonapi.getIn([
                      'events',
                      jsonapi.get('events').indexOf(jsonapi.get('events').find(jsev => jsev.get('country') === cs.get('name'))),
                      'country'
                    ])}`}
                  </div>
                </div>
                <div
                  className='country-obscurity-indicator'
                  style={{
                    bottom: `${obscurity * 100 + 15}px`
                  }}>
                </div>
              </div>
            );
          })}
          <div id='EndGameNotSoSecretNowIndicator'></div>
        </div>
      );
  }
}

CountryStateOverview.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default CountryStateOverview;
