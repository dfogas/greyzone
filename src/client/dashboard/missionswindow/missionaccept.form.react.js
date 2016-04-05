import './missionaccept.form.styl';
import * as dashboardActions from '../actions';
import Component from '../../components/component.react.js';
import React from 'react';
import immutable from 'immutable';
import {msg} from '../../intl/store';

import DropDown from 'react-dropdown-w-react13';

class MissionAcceptForm extends Component {
  getForm() {
    return this.props.missionaccept ? this.props.missionaccept.get('form') : null;
  }

  onFormSubmit(e) {
    e.preventDefault();
    const fields = this.getForm().get('fields').toJS();
    dashboardActions.acceptMission(fields.tier, fields.focus, fields.country);
    dashboardActions.clearMissionAcceptFields(fields.rank);
  }

  render() {
    const {enhancements, missions, missionaccept, missionspricelist} = this.props;
    const defaultform = {fields: {tier: '', focus: '', country: ''}};
    const form = this.getForm() || immutable.fromJS(defaultform);

    return (
      <div id='MissionAcceptForm'>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <h3>Missions Control</h3>
          <fieldset>
            <DropDown
              baseClassName='tier'
              name='tier'
              onChange={option => dashboardActions.updateFormField(option, 'missionaccept')}
              options={[
                {value: '1', name: 'tier', label: 'Tier 1'},
                {value: '2', name: 'tier', label: 'Tier 2'},
                {value: '3', name: 'tier', label: 'Tier 3'},
                {value: '4', name: 'tier', label: 'Tier 4'},
                {value: '5', name: 'tier', label: 'Tier 5'},
              ]}
              value={form.getIn(['fields', 'tier']) || 'Tier...'}
            />
            <DropDown
              baseClassName='focus'
              name='focus'
              onChange={option => dashboardActions.updateFormField(option, 'missionaccept')}
              options={[
                {value: 'random', name: 'focus', label: 'Any will do'},
                {value: 'cash', name: 'focus', label: 'Gimme Cash'},
                {value: 'contacts', name: 'focus', label: 'Work relations'},
                {value: 'reputation', name: 'focus', label: 'Fame and Glory'},
                {value: 'obscurity', name: 'focus', label: 'Need to lay low.'},
                {value: 'special', name: 'focus', label: 'Something Special?'},
                {value: 'multiplayer', name: 'focus', label: 'TBD'}
              ]}
              value={form.getIn(['fields', 'focus']) || 'What you wanna get?'}
            />
            <DropDown
              baseClassName='country'
              name='country'
              onChange={option => dashboardActions.updateFormField(option, 'missionaccept')}
              options={[
                {value: 'random', name: 'country', label: 'Any'},
                {value: 'US', name: 'country', label: 'US'},
                {value: 'West Europe', name: 'country', label: 'West Europe'},
                {value: 'Russia', name: 'country', label: 'Russia'},
                {value: 'Arabia', name: 'country', label: 'Arabia'},
                {value: 'SouthEast', name: 'country', label: 'SouthEast'},
                {value: 'Latin America', name: 'country', label: 'Latin America'}
              ]}
              value={form.getIn(['fields', 'country']) || 'In Country ...'}
            />
            <button
              id='MissionAcceptButton'
              type='submit'>{msg('dashboard.strategical.missionaccept.button.acceptMission')}</button>
          </fieldset>
        </form>
        <div id='MissionAcceptPriceTag'>
          {(missionspricelist.getIn([form.getIn(['fields', 'tier']), 'cash']) || '0') + '\u{1f4b0}'}
          <br />
          {(missionspricelist.getIn([form.getIn(['fields', 'tier']), 'contacts']) || '0') + '\u{1f575}'}
        </div>
      </div>
    );
  }
}

MissionAcceptForm.propTypes = {
  enhancements: React.PropTypes.instanceOf(immutable.List),
  missionaccept: React.PropTypes.instanceOf(immutable.Map),
  missions: React.PropTypes.instanceOf(immutable.List),
  missionspricelist: React.PropTypes.instanceOf(immutable.Map)
};

export default MissionAcceptForm;
