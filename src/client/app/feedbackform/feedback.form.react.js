import './feedback.form.styl'; //
import * as feedbackFormActions from './actions';
import * as optionsActions from '../../dashboard/optionswindow/actions';
import React from 'react';
import Component from '../../components/component.react';
import immutable from 'immutable';
import StarRatingsFeedbackFormTier from './starratings.feedback.form.tier.react';

class FeedbackForm extends Component {
  changeTextField(e) {
    feedbackFormActions.updateFormField(e.target.name, e.target.value);
  }

  changeValue(e) {
    feedbackFormActions.changeValue(e.target.name, e.target.value);
  }

  getForm() {
    return this.props.auth.get('feedbackform').toJS();
  }

  onFormSubmit(e) {
    e.preventDefault();
    const feedback = this.getForm();
    /*
    feedback = {
      gaminggroup: '',
      browser: '',
      technicals: '',
      playduration: '',
      resultofplay: '',
      stars: {mechanics: '', aesthetics: '', interface: '', theme: '', difficulty: '',consistency: ''},
      generalopinion: '',
      gamevalue: ''
    }
    */
    // fields = { email: '', password: ''}
    // authActions.login(fields)
    //   .then(() => {
    //     this.redirectAfterLogin();
    //   })
    //   .catch(focusInvalidField(this));
    feedbackFormActions.sendFeedbackForm(feedback)
      .then(() => {
        optionsActions.giveFeedback();
      });
  }

  render() {
    const feedbackform = this.getForm();

    return (
      <div id='FeedbackForm'>
        <form onSubmit={(e) => {this.onFormSubmit(e); }}>
          <fieldset>
            <legend>Feedback</legend>
            <fieldset>
              <legend>In which group of gamers would you put yourself</legend>
              <label>
                <input
                  checked={feedbackform.gaminggroup === 'Developer'}
                  name='gaminggroup'
                  onClick={this.changeValue}
                  type='radio'
                  value='Developer' />Developer
              </label>
              <label>
                <input
                  checked={feedbackform.gaminggroup === 'Hardcore'}
                  name='gaminggroup'
                  onClick={this.changeValue}
                  type='radio'
                  value='Hardcore' />Hardcore
              </label>
              <label>
                <input
                  checked={feedbackform.gaminggroup === 'Average'}
                  name='gaminggroup'
                  onClick={this.changeValue}
                  type='radio'
                  value='Average' />Average
              </label>
              <label>
                <input
                  checked={feedbackform.gaminggroup === 'Recreational'}
                  name='gaminggroup'
                  onClick={this.changeValue}
                  type='radio'
                  value='Recreational' />Recreational
              </label>
            </fieldset>
            <fieldset>
              <legend>Which browser did you play it in?</legend>
              <label>
                <input
                  checked={feedbackform.browser === 'Brave'}
                  name='browser'
                  onClick={this.changeValue}
                  type='radio'
                  value='Brave'
                  />Brave
              </label>
              <label>
                <input
                  checked={feedbackform.browser === 'Chrome'}
                  name='browser'
                  onClick={this.changeValue}
                  type='radio'
                  value='Chrome'
                  />Chrome
              </label>
              <label>
                <input
                  checked={feedbackform.browser === 'Edge'}
                  name='browser'
                  onClick={this.changeValue}
                  type='radio'
                  value='Edge'
                  />Edge
              </label>
              <label>
                <input
                  checked={feedbackform.browser === 'Firefox'}
                  name='browser'
                  onClick={this.changeValue}
                  type='radio'
                  value='Firefox'
                  />Firefox
              </label>
              <label>
                <input
                  checked={feedbackform.browser === 'Vivaldi'}
                  name='browser'
                  onClick={this.changeValue}
                  type='radio'
                  value='Vivaldi'
                  />Vivaldi
              </label>
              <label>
                <input
                  checked={feedbackform.browser === 'Other'}
                  name='browser'
                  onClick={this.changeValue}
                  type='radio'
                  value='Other'
                  />Other(e.g. Safari)
              </label>
            </fieldset>
            <fieldset>
              <legend>How was the gameplay, regarding the technical side of gameflow</legend>
              <label>
                <input
                  checked={feedbackform.technicals === 'noproblems'}
                  name='technicals'
                  onClick={this.changeValue}
                  type='radio'
                  value='noproblems' />
                Smooth and Stable
              </label>
              <label>
                <input
                  checked={feedbackform.technicals === 'Stable'}
                  name='technicals'
                  onClick={this.changeValue}
                  type='radio'
                  value='Stable' />
                Stable, but not smooth
              </label>
              <label>
                <input
                  checked={feedbackform.technicals === 'Smooth'}
                  name='technicals'
                  onClick={this.changeValue}
                  type='radio'
                  value='Smooth' />
                Smooth, but not stable
              </label>
              <label>
                <input
                  checked={feedbackform.technicals === 'Broken'}
                  name='technicals'
                  onClick={this.changeValue}
                  type='radio'
                  value='Broken' />
                Neither one of options
              </label>
            </fieldset>
            <fieldset>
              <legend>How many hours did you play it?</legend>
              <label>
                <input
                  checked={feedbackform.playduration === '0-1'}
                  name='playduration'
                  onClick={this.changeValue}
                  type='radio'
                  value='0-1'
                  />0-1
              </label>
              <label>
                <input
                  checked={feedbackform.playduration === '1-2'}
                  name='playduration'
                  onClick={this.changeValue}
                  type='radio'
                  value='1-2'
                  />1-2
              </label>
              <label>
                <input
                  checked={feedbackform.playduration === '2-3'}
                  name='playduration'
                  onClick={this.changeValue}
                  type='radio'
                  value='2-3'
                  />2-3
              </label>
              <label>
                <input
                  checked={feedbackform.playduration === '3+'}
                  name='playduration'
                  onClick={this.changeValue}
                  type='radio'
                  value='3+'
                  />3+
              </label>
            </fieldset>
            <fieldset>
              <legend>Which game end did you reach, if there is more than one, pick the rightmost option</legend>
              <label>
                <input
                  checked={feedbackform.resultofplay === 'givenup'}
                  name='resultofplay'
                  onClick={this.changeValue}
                  type='radio'
                  value='givenup'
                  />Given Up
              </label>
              <label>
                <input
                  checked={feedbackform.resultofplay === 'notsosecret'}
                  name='resultofplay'
                  onClick={this.changeValue}
                  type='radio'
                  value='notsosecret'
                  />Not so secret now
              </label>
              <label>
                <input
                  checked={feedbackform.resultofplay === 'leftinprison'}
                  name='resultofplay'
                  onClick={this.changeValue}
                  type='radio'
                  value='leftinprison'
                  />Left in Prison
              </label>
              <label>
                <input
                  checked={feedbackform.resultofplay === 'killed'}
                  name='resultofplay'
                  onClick={this.changeValue}
                  type='radio'
                  value='killed'
                  />Killed
              </label>
              <label>
                <input
                  checked={feedbackform.resultofplay === 'richnotlong'}
                  name='resultofplay'
                  onClick={this.changeValue}
                  type='radio'
                  value='richnotlong'
                  />Rich, but not long
              </label>
              <label>
                <input
                  checked={feedbackform.resultofplay === 'richandcovered'}
                  name='resultofplay'
                  onClick={this.changeValue}
                  type='radio'
                  value='richandcovered'
                  />Rich, covered
              </label>
            </fieldset>
            <StarRatingsFeedbackFormTier
              stars={feedbackform.stars}
              />
            <fieldset>
              <textarea
                id='FeedbackFormGeneralOpinion'
                name='generalopinion'
                onChange={this.changeTextField}
                placeholder='Other Comments'
                type='text'
                value={feedbackform.generalopinion}
                />
            </fieldset>
            <fieldset>
              <legend>What money value do you think game has for paying players?</legend>
              <label>
                <input
                  checked={feedbackform.gamevalue === 'five'}
                  name='gamevalue'
                  onClick={this.changeValue}
                  type='radio'
                  value='five'
                  />$0.99 - $4.99
              </label>
              <label>
                <input
                  checked={feedbackform.gamevalue === 'ten'}
                  name='gamevalue'
                  onClick={this.changeValue}
                  type='radio'
                  value='ten'
                  />$5.00 - $9.99
              </label>
              <label>
                <input
                  checked={feedbackform.gamevalue === 'fifteen'}
                  name='gamevalue'
                  onClick={this.changeValue}
                  type='radio'
                  value='fifteen'
                  />$10.00 - $14.99
              </label>
              <label>
                <input
                  checked={feedbackform.gamevalue === 'twenty'}
                  name='gamevalue'
                  onClick={this.changeValue}
                  type='radio'
                  value='twenty'
                  />$15.00 - $19.99
              </label>
              <label>
                <input
                  checked={feedbackform.gamevalue === 'willnotsay'}
                  name='gamevalue'
                  onClick={this.changeValue}
                  type='radio'
                  value='willnotsay'
                  />I will not say
              </label>
            </fieldset>
          </fieldset>
          <button
            children={'Submit'}
            id='FeedbackFormSubmitButton'
            type='submit'
            />
        </form>
        <div className='feedbackform-submit-error'>{this.props.auth.get('feedbackerror')}</div>
      </div>
    );
  }
}

FeedbackForm.propTypes = {
  auth: React.PropTypes.instanceOf(immutable.Map)
};

export default FeedbackForm;
