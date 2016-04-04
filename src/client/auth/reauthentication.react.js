import './reauthentication.styl';
import * as authActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import {focusInvalidField} from '../lib/validation';
import getParameterByName from '../lib/geturlquery';

class ReauthenticationForm extends Component {
  getForm() {
    return this.props.auth.get('form');
  }

  onFormSubmit(e) {
    e.preventDefault();
    const fields = this.getForm().fields.toJS();
    const hash = getParameterByName('hash');
    authActions.reauthenticate(fields, hash)
      // .then(() => {
      //   setTimeout(authActions.redirectToLogin, 2000);
      // })
      .catch(focusInvalidField(this));
  }

  render() {
    const form = this.getForm();
    const info = this.props.auth.getIn(['reauthentication', 'message']);

    return (
      <div className='reauthentication-form'>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <fieldset>
            <legend>{msg('auth.reauthentication.legend')}</legend>
            <input
              name='email'
              onChange={authActions.updateFormField}
              placeholder={msg('auth.reauthentication.placeholder.email')}
              value={form.fields.email}
              />
            <input
              autoFocus
              name="password"
              onChange={authActions.updateFormField}
              placeholder={msg('auth.reauthentication.placeholder.password')}
              type="password"
              value={form.fields.password}
              />
            <button
              children={msg('auth.reauthentication.button')}
              type='submit'
              />
            {form.error &&
              <span className='error-message'>{form.error}</span>}
            {info &&
              <span className='info-message'>{info}</span>}
          </fieldset>
        </form>
      </div>
    );
  }
}

ReauthenticationForm.propTypes = {
  auth: React.PropTypes.instanceOf(immutable.Map)
};

export default ReauthenticationForm;
