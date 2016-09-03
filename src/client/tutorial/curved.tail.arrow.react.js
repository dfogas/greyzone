import './curved.tail.arrow.styl';
import Component from '../components/component.react';
import React from 'react';
import {Link} from 'react-router';
// import {msg} from '../intl/store';
// import immutable from 'immutable';

class CurvedTailArrow extends Component {
  render() {
    return (
      <Link to='dashboard'>
        <div className='curved-tail-arrow'>
        </div>
      </Link>
    );
  }
}

export default CurvedTailArrow;
