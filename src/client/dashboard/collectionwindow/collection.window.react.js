/* Dumb Component */
import './collection.window.styl'; //
import Component from '../../components/component.react';
import React from 'react';
import immutable from 'immutable';

class CollectionWindow extends Component {
  render() {
    const {game, jsonapi} = this.props;
    return (
      <div id='CollectionWindow'>
        Work in progress
      </div>
    );
  }
}

CollectionWindow.propTypes = {
  game: React.PropTypes.instanceOf(immutable.Map),
  jsonapi: React.PropTypes.instanceOf(immutable.Map)
};

export default CollectionWindow;
