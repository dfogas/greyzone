import './navbarbutton.css';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';


// too much recursion? don't be shitting me :-D
class NavBarButton extends Component {
  render() {
    return (
      <Link to='command'><input className='navbar-button' type='button' value='Navigate' /></Link>
    );
  }
}

export default NavBarButton;
