import './dice.css';
// import * as diceActions from './actions';
import Component from '../components/component.react';
import React from 'react';
import classnames from 'classnames';
import uuid from '../lib/guid';

// dnd
// import {DragSource} from 'react-dnd';
// import {ItemTypes} from '../lib/dnditemtypes';

/*
  How to approach upgrade to react-dnd?
    - step1 - test it on dices as drag source and dicebin as dropTarget
    - step2 - do the same for agentscard and agentsscrollbar, do scrollbar continuous carousel, while you're at it
    - step3 - finish with doing the same for equipments

  To make item DragSource
    - import react-dnd
*/


// // Implements the drag source contract.
// const diceSource = {
//   beginDrag(props) {
//     return {
//       text: props.text
//     };
//   }
// };

// // Specifies the props to inject into your component.
// function collect(connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging()
//   };
// }

class Dice extends Component {
  drag(ev) {
    const {dicetype, key, value} = this.props;
    ev.dataTransfer.setData('text', JSON.stringify({dicetype: dicetype, key: key, value: value}));
  }

  render() {
    // const {connectDragSource, dicetype, isDragging, value} = this.props;
    const {dicetype, value} = this.props;
    var key = uuid();

      // <div
      //   className={classnames('dice', dicetype, value)}
      //   dicetype={dicetype}
      //   style={{opacity: isDragging ? 0.5 : 1}}
      //   value={value}
      //   />
    return (
      <div
        className={classnames('dice', dicetype, value)}
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
