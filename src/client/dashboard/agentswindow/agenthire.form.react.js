import './agenthire.form.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
import immutable from 'immutable';

class AgentHireForm extends Component {
  getForm() {
    return this.props.agenthire.get('form');
  }

  onFormSubmit(e) {
    e.preventDefault();
    const fields = this.getForm().get('fields').toJS();
    dashboardActions.hireAgent(fields.specialist, fields.rank);
    dashboardActions.bookAgentPrice(fields.rank);
    dashboardActions.clearAgentHireFields();
  }

  render() {
    const form = this.getForm();
    return (
      <div id='AgentHireForm'>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <fieldset>
            <input
              name="rank"
              onChange={dashboardActions.updateFormField}
              placeholder={msg('dashboard.agenthire.input.rank')}
              value={form.getIn(['fields', 'rank'])}
              />
            <input
              name="specialist"
              onChange={dashboardActions.updateFormField}
              placeholder={msg('dashboard.agenthire.input.specialist')}
              value={form.getIn(['fields', 'specialist'])}
              />
            <br />
            <button type="submit">{msg('dashboard.agenthire.button.hireAgent')}</button>
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
