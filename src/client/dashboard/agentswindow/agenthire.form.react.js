import './agenthire.form.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
import immutable from 'immutable';
import DropDown from 'react-dropdown-w-react13';

class AgentHireForm extends Component {
  getForm() {
    return this.props.agenthire.get('form');
  }

  onFormSubmit(e) {
    e.preventDefault();
    const fields = this.getForm().get('fields').toJS();
    dashboardActions.hireAgent(fields.specialist, fields.rank);
    dashboardActions.bookAgentPrice(fields.rank);
    dashboardActions.clearAgentHireFields(fields.rank);
  }

  selectSpecialist(option) {
    dashboardActions.selectSpecialist(option.name);
  }

  render() {
    const {agenthire} = this.props;
    const form = agenthire.get('form');
    return (
      <div id='AgentHireForm'>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <fieldset>
            {/*<input
              name="rank"
              onChange={dashboardActions.updateFormField}
              placeholder={msg('dashboard.agenthire.input.rank')}
              value={form.getIn(['fields', 'rank'])}
              />*/}
            <DropDown
              baseClassName='Rank'
              name='rank'
              onChange={option => dashboardActions.updateFormField(option)}
              options={[
                {value: '1', name: 'rank', label: 'Rank 1'},
                {value: '2', name: 'rank', label: 'Rank 2'},
                {value: '3', name: 'rank', label: 'Rank 3'},
                {value: '4', name: 'rank', label: 'Rank 4'},
                {value: '5', name: 'rank', label: 'Rank 5'},
                {value: '6', name: 'rank', label: 'Rank 6'}
              ]}
              value={form.getIn(['fields', 'rank']) || 'Select...'}
              />
            <DropDown
              baseClassName='Specialist'
              name="specialist"
              onChange={option => dashboardActions.updateFormField(option)}
              options={[
                {value: 'operative', name: 'specialist', label: 'Operative'},
                {value: 'technician', name: 'specialist', label: 'Technician'},
                {value: 'spy', name: 'specialist', label: 'Spy'}
              ]}
              value={form.getIn(['fields', 'specialist']) || 'Select...'}
              />
            {/*<input
              name="specialist"
              onChange={dashboardActions.updateFormField}
              placeholder={msg('dashboard.agenthire.input.specialist')}
              value={form.getIn(['fields', 'specialist'])}
              />*/}
            {form.getIn(['fields', 'specialist']) && form.getIn(['fields', 'rank']) &&
              <button id='HireAgentButton' type="submit">{msg('dashboard.agenthire.button.hireAgent')}</button>}
          </fieldset>
        </form>
      </div>
    );
  }
}

AgentHireForm.propTypes = {
  agenthire: React.PropTypes.instanceOf(immutable.Map)
};

export default AgentHireForm;
