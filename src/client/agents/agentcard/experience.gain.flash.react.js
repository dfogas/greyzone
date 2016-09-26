import './experience.gain.flash.styl';
import Component from '../../components/component.react';
import React from 'react';

class ExperienceGainFlash extends Component {
  render() {
    const {experiencegain} = this.props;
    return (
      <div className='experience-gain-flash'>
        {`${experiencegain} xp`}
      </div>
    );
  }
}

ExperienceGainFlash.propTypes = {
  experiencegain: React.PropTypes.number
};

export default ExperienceGainFlash;
