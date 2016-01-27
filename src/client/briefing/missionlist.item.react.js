import * as agentsActions from '../agents/actions';
import * as missionActions from '../mission/actions';
import Component from '../components/component.react';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../intl/store';

class MissionListItem extends Component {
  missionPass() {
    const {mission} = this.props;
    agentsActions.passOnMission(mission);
  }

  selectMission(e) {
    e.preventDefault();

    const targetParentNode = e.target.parentNode;
    const title = targetParentNode.childNodes[0].innerHTML;
    const inCountry = targetParentNode.childNodes[1].innerHTML;
    const tier = parseInt(targetParentNode.childNodes[2].innerHTML, 10);

    console.log('Mission ' + title + ' in ' + inCountry + ' Tier ' + tier);
    missionActions.select(title, inCountry, tier);
  }

  render() {
    const {mission} = this.props;
    return (
      <tr
        onClick={(e) => this.selectMission(e)}
        >
        <td>{mission.get('title')}</td>
        <td>{mission.get('inCountry')}</td>
        <td>{mission.get('tier')}</td>
        <td>
          {
            <button
              className='mission-pass'
              onClick={this.missionPass.bind(this)}
              >Pass
            </button>
          }
        </td>
      </tr>
    );
  }
}

MissionListItem.propTypes = {
  mission: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionListItem;
