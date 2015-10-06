import './buttons.css';
import './navbarbutton.css';
import Component from '../components/component.react';
import React from 'react';
// import NavBarButton from './navbar.react';
import {Link} from 'react-router';

class NavBar extends Component {
  render() {
    var classString = '';
    if (this.props.placement)
      classString += this.props.placement;
    return (
      <div className={'nav-bar ' + classString}>
        <Link to='armory'>
          <input
            className='navbar-button'
            id='ArmoryNavigateButton'
            type='button'
            value='Armory'
            />
        </Link>
        <Link to='mission'>
          <input
            className='navbar-button'
            id='MissionNavigateButton'
            type='button'
            value='Mission'
            />
        </Link>
        <Link to='dashboard'>
          <input
            className='navbar-button'
            id='DashboardNavigateButton'
            type='button'
            value='Dashboard'
            />
        </Link>
        <Link to='briefing'>
          <input
            className='navbar-button'
            id='BriefingNavigateButton'
            type='button'
            value='Briefing'
            />
        </Link>
      </div>
    );
  }
}

NavBar.propTypes = {
  placement: React.PropTypes.string
};

export default NavBar;
