import './login.styl';
import * as actions from './actions';
import * as dashboardActions from '../dashboard/actions';
import Component from '../components/component.react';
import React from 'react';
import exposeRouter from '../components/exposerouter.react';
import immutable from 'immutable';
import {focusInvalidField} from '../lib/validation';
import {msg} from '../intl/store';

class SignUp extends Component {

  getForm() {
    return this.props.auth.get('form');
  }

  onFormSubmit(e) {
    e.preventDefault();
    const fields = this.getForm().fields.toJS();
    actions.signup(fields)
        .then(() => {
          dashboardActions.newUserAppendState(fields.email, fields.organization);
        })
        .then(() => {
          this.redirectAfterSignup();
        })
        .catch(focusInvalidField(this));

  }

  redirectAfterSignup() {
    const nextPath = this.props.router.getCurrentQuery().nextPath;
    this.props.router.replaceWith(nextPath || '/');
    actions.redirectToLoginAfterSignup();
  }

  render() {
    const form = this.getForm();
    const {pendingActions} = this.props;

    return (
      <div className="signup">
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <fieldset disabled={pendingActions.has(actions.signup.toString())}>
            <legend>{msg('auth.form.legend.signup')}</legend>
            <input
              name="organization"
              onChange={actions.updateFormField}
              placeholder={msg('auth.form.placeholder.organization')}
              value={form.fields.organization}
              />
            <input
              autoFocus
              name="email"
              onChange={actions.updateFormField}
              placeholder={msg('auth.form.placeholder.email')}
              value={form.fields.email}
            />
            <br />
            <input
              name="password"
              onChange={actions.updateFormField}
              placeholder={msg('auth.form.placeholder.password')}
              type="password"
              value={form.fields.password}
            />
            <br />
             <button type="submit">{msg('auth.form.button.signup')}</button>
            {form.error &&
              <span className="error-message">{form.error.message}</span>
            }
            <div>{msg('auth.form.hint')}</div>
          </fieldset>
        </form>
      </div>
    );
  }

}

SignUp.propTypes = {
  auth: React.PropTypes.instanceOf(immutable.Map).isRequired,
  pendingActions: React.PropTypes.instanceOf(immutable.Map).isRequired,
  router: React.PropTypes.func
};

export default exposeRouter(SignUp);
