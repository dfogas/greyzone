import './commandtocountries.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

class CommandToCountries extends Component {
  render() {
    return (
      <Link to='countries'>
        <button
          className='ingame-nav-button'
          id='CommandToCountries'
          >{msg('menu.countries')}</button>
      </Link>
    );
  }
}

export default CommandToCountries;
