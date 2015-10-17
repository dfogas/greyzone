import {expect} from 'chai';
import * as authActions from 'client/auth/actions';

describe('auth functionality ', () => {
  it('is defined', () => {
    expect(authActions.login).to.exist;
    expect(authActions.loginError).to.exist;
    expect(authActions.signup).to.exist;
    expect(authActions.updateFormField).to.exist;
    expect(authActions.logout).to.exist;
  });
});
