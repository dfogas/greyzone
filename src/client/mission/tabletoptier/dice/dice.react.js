import './dice.styl';
// import * as diceActions from './actions';
import Component from '../../../components/component.react';
import React from 'react';
import classnames from 'classnames';

// dnd
import {DragSource} from 'react-dnd';
import {ItemTypes} from '../../../lib/dnditemtypes';

// Implements the drag source contract.
const diceSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

// Specifies the props to inject into your component.
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Dice extends Component {
  drag(ev) {
    const {diceindex, dicetype, value} = this.props;
    ev.dataTransfer.setData('text', JSON.stringify({diceindex: diceindex, dicetype: dicetype, value: value}));
  }

  render() {
    // const {connectDragSource, dicetype, isDragging, value} = this.props;
    const {diceindex, dicetype, key, value} = this.props;

      // <div
      //   className={classnames('dice', dicetype, value)}
      //   dicetype={dicetype}
      //   style={{opacity: isDragging ? 0.5 : 1}}
      //   value={value}
      //   />
    return (
      <div
        className={classnames('dice', dicetype, value)}
        diceindex={diceindex}
        dicetype={dicetype}
        draggable={true}
        key={key}
        onDragStart={this.drag.bind(this)}
        value={value}
        />
    );
  }
}

Dice.propTypes = {
  // connectDragSource: React.PropTypes.func.isRequired,
  dicetype: React.PropTypes.string.isRequired,
  key: React.PropTypes.string,
  // isDragging: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired
};

export default Dice;
