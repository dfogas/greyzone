import Component from '../components/component.react';
import React from 'react';

class Thumbnail extends Component {
  render() {
    var imgsrc = '../../assets/img/country/flags/generic-flag.png';
    return (
      <div>
        <img src={imgsrc} />
      </div>
    );
  }
}

Thumbnail.propTypes = {
  imgsrc: React.PropTypes.string
};

export default Thumbnail;
