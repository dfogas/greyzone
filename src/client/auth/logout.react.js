import * as actions from './actions';
import Component from '../components/component.react';
import React from 'react';
import {msg} from '../intl/store';

export default class Logout extends Component {
  render() {
    const {id} = this.props;
    return (
      <button
        className='logout-button'
        id={id}
        onClick={actions.logout}>
        {msg('auth.logout.button')}
      </button>
    );
  }
}
