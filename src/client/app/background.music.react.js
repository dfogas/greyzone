import './background.music.styl';
import Component from '../components/component.react';
import React from 'react';
import $ from 'jquery';
import cconfig from '../client.config';

class BackgroundMusic extends Component {
  componentDidMount() {
    $('#BackgroundMusic').prop('volume', 0.2);
  }

  render() {
    const url = process.env.NODE_ENV === 'production' ? cconfig.dnsprod : cconfig.dnsdevel;
    return (
      <audio
        controls
        id='BackgroundMusic'
        loop>
        <source
          src={url + '/assets/audio/NorthSea.ogg'}
          type='audio/ogg' />
      </audio>
    );
  }
}

export default BackgroundMusic;
