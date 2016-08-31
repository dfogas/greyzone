/* Dumb Component */
import './collection.window.styl'; //
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

import Pointer from '../pointer.react';

class CollectionWindow extends Component {
  render() {
    // const {game, jsonapi} = this.props;
    return (
      <div id='CollectionWindow'>
        Work in progress
        <Pointer pointsto='strategical' />
      </div>
    );
  }
}

CollectionWindow.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default CollectionWindow;
