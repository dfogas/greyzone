import './lprecover.styl';
import * as authActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';
import {focusInvalidField} from '../lib/validation';


class LPRecoverForm extends Component {
  getForm() {
    return this.props.auth.get('form');
  }

  onFormSubmit(e) {
    e.preventDefault();
    const fields = this.getForm().fields.toJS();
    authActions.lpwRecover(fields)
      // .then(() => {
      //   this.redirectAfterLPWR();
      // })
      .catch(focusInvalidField(this));
  }

  // redirectAfterLPWR() {
  //   setTimeout(location.href('/'), 5000);
  // }

  render() {
    const form = this.getForm();
    const info = this.props.auth.getIn(['lprecover', 'message']);

    return (
      <div className='lprecover-form'>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <fieldset>
            <legend>{msg('auth.lprecover.legend')}</legend>
            <input
              autoFocus
              name='email'
              onChange={authActions.updateFormField}
              placeholder={msg('auth.lprecover.placeholder')}
              value={form.fields.email}
              />
            <button
              children={msg('auth.lprecover.button')}
              type='submit'
              />
            {form.error &&
              <span className="error-message">{form.error.message}</span>}
            {info &&
              <span className="info-message">{info}</span>}
          </fieldset>
        </form>
      </div>
    );
  }
}

LPRecoverForm.propTypes = {
  auth: React.PropTypes.instanceOf(immutable.Map).isRequired
};

export default LPRecoverForm;
