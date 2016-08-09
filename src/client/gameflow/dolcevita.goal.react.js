import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';
import immutable from 'immutable';

class DolceVitaGoal extends Component {
  render() {
    const {jsonapi} = this.props;
    const dolcevitagoal = jsonapi.get('statuses').filter(status => status.get('tier') === 4).size === 3;
    return (
      <div
        className={dolcevitagoal ? 'done' : ''}
        id='DolceVitaGoal'>
        {msg('tutorial.goals.dolcevitagoal')}
      </div>
    );
  }
}

DolceVitaGoal.propTypes = {
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default DolceVitaGoal;
