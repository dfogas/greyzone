import * as feedbackFormActions from './actions';
import React from 'react';
import Component from '../../components/component.react';
import capitalLetter from '../../lib/general/capitalletter';
import StarRatingComponent from 'react-star-rating-component';

class StarRatingsFeedbackFormTier extends Component {

  onStarClick(nextValue, prevValue, name) {
    // this.setState({rating: nextValue});
    feedbackFormActions.setStars(nextValue, name);
  }

  render() {
    const {stars} = this.props;
    const dimensions = ['mechanics', 'aesthetics', 'interface', 'theme', 'difficulty', 'overall'];
    return (
      <div id='StarRatingsFeedbackFormTier'>
        {dimensions.map(dim => {
          return (
            <div
              style={{
                fontSize: '25px',
                width: '300px'
              }}>
              <fieldset>
                <legend style={{fontSize: '16px'}}>{capitalLetter(dim)}</legend>
                <StarRatingComponent
                  className='feedbackform-star-rating'
                  name={dim}
                  onStarClick={this.onStarClick.bind(this)}
                  starCount={5}
                  value={stars.dim}
                  />
              </fieldset>
            </div>
          );
        })}
      </div>
    );
  }
}

StarRatingsFeedbackFormTier.propTypes = {
  stars: React.PropTypes.object
};

export default StarRatingsFeedbackFormTier;
