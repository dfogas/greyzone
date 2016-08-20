import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
import immutable from 'immutable';

class FilmSlide extends Component {
  render() {
    const {slide} = this.props;
    return (
      <div className='film-slide'>
      </div>
    );
  }
}

export default FilmSlide;
