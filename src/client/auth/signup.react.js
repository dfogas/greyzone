import './signup.styl';
import * as authActions from './actions';
import cconfig from '../client.config';
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
    const api = process.env.NODE_ENV === 'production' ?
      cconfig.dnsprod + '/api/v1/' :
      cconfig.dnsdevel + '/api/v1/';
    e.preventDefault();
    const fields = this.getForm().fields.toJS();
    const {email, organization} = fields;
    authActions.signup(fields)
        // .then((po) => {
        //   fetch(api + 'users', {
        //     method: 'GET',
        //     headers: {'Content-type': 'application/json'}
        //   })
        //     .then((res) => {
        //       if (res.status >= 400)
        //         throw new Error('Bad server response.');
        //       return res.json();
        //     })
        //     .then((users) => {
        //       let userId = users.filter(user => user.username === email).map(user => user._id);
        //       return userId[0];
        //     })
        //     .then((userId) => {
        //       fetch(api + 'players', {
        //         method: 'POST',
        //         headers: {'Content-type': 'application/json'},
        //         body: JSON.stringify({userId: userId, name: organization})
        //       });
        //     });
        // })
        // TODO: Redirect after signup, also, nodemailer will be implemented
        .catch(focusInvalidField(this));
  }

  redirectAfterSignup() {
    // const nextPath = this.props.router.getCurrentQuery().nextPath;
    // this.props.router.replaceWith(nextPath || '/');
    authActions.redirectToLogin();
  }

  render() {
    const form = this.getForm();
    const {pendingActions} = this.props;

    return (
      <div className="signup">
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <fieldset disabled={pendingActions.has(authActions.signup.toString())}>
            <legend>{msg('auth.form.legend.signup')}</legend>
            <input
              autoFocus
              name="organization"
              onChange={authActions.updateFormField}
              placeholder={msg('auth.form.placeholder.organization')}
              value={form.fields.organization}
              />
            <input
              name="email"
              onChange={authActions.updateFormField}
              placeholder={msg('auth.form.placeholder.email')}
              value={form.fields.email}
            />
            <br />
            <input
              name="password"
              onChange={authActions.updateFormField}
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
