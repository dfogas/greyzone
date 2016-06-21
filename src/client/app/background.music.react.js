import Component from '../components/component.react';
import React from 'react';
import $ from 'jquery';

class BackgroundMusic extends Component {
  componentDidMount() {
    $('#BackgroundMusic').prop('volume', 0.2);
  }

  render() {
    return (
      <audio id='BackgroundMusic' controls autoPlay loop>
        <source src='http://localhost:8000/assets/audio/NorthSea.ogg' type='audio/ogg' />
      </audio>
    );
  }
}

export default BackgroundMusic;
