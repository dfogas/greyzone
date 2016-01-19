import './statuses.window.styl';
import Component from '../../components/component.react';
import React from 'react';

class StatusesWindow extends Component {
  render() {
    const {statuses} = this.props;
    return (
      <div id='StatusesWindow'>
        {statuses.map((status) => {
          return (
            <div className='status-card'>{status.get('name')}</div>
          );
        })}
      </div>
    );
  }
}

export default StatusesWindow;
