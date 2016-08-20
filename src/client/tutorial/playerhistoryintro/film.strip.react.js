import Component from '../../components/component.react';
import React from 'react';
import {msg} from '../../intl/store';
import immutable from 'immutable';

import FilmSlide from './film.slide.react';

class FilmStrip extends Component {
  render() {
    const {tutorial} = this.props;
    const slides = tutorial.getIn(['playerhistory', 'intro', 'slides']);
    return (
      <div id='PlayerHistoryFilmStrip'>
        {slides.map(slide => {
          return (
            <FilmSlide
              slide={slide} />
          );
        })}
      </div>
    );
  }
}

export default FilmStrip;
