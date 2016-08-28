import {dispatch} from '../../dispatcher';
import setToString from '../../lib/settostring';
import {gameCursor, jsonapiCursor} from '../../state';
// import {msg} from '../../intl/store';
import $ from 'jquery'; //

export function buyStatus(status) {
  const statusesall = gameCursor(['globals', 'statuses']);
  const alltieritems = statusesall.filter(item => item.get('tier') === status.get('tier'));
  const statuses = jsonapiCursor(['statuses']);
  const tieritems = statuses.filter(item => item.get('tier') === status.get('tier'));

  if (jsonapiCursor(['gameCash']) >= status.getIn(['price', 'cash']) && jsonapiCursor(['gameContacts']) >= status.getIn(['price', 'contacts'])) {
    dispatch(buyStatus, {status});
    if (tieritems.size + 1 === alltieritems.size)
      dispatch(tierCursorChange, {tier: status.get('tier')});
  } else flashDashboard(`You're short on cash!`);
}

export function flashDashboard(message) {
  $('#DashboardMessage').remove();
  $('#DashboardScreen').append(`<div id='DashboardMessage'>${message}</div>`);
  $('#DashboardMessage').hide().fadeIn(400);
  $('#DashboardMessage').fadeOut(1200, () => $('#DashboardMessage').remove());
}

export function statusesIntroToggle() {
  // console.log($('#StatusesIntro').hide === 'function');
  // if ($('#StatusesIntro').hide === 'function') {
  //   console.log('statuses intro present');
  //   $('#StatusesIntro').fadeOut(400, () => {
  //     dispatch(statusesIntroToggle, {});
  //   });
  // } else {
  //   console.log('statuses intro not present');
  //   $('#StatusesWindow').append(`<div id='StatusesIntro'>${msg('dashboard.statuses.intro.textHtml')}</div>`);
  //   $('#StatusesIntro').on('click', () => {
  //     $('#StatusesIntro').hide().fadeIn(400, () => {
  //       dispatch(statusesIntroToggle, {});
  //     });
  //   });
  // }
  if (document.getElementById('StatusesIntro'))
    $('#StatusesIntro').fadeOut(400, () => {
      dispatch(statusesIntroToggle, {});
    });
  else
    dispatch(statusesIntroToggle, {});
}

export function statusTierSelect(tier) {
  dispatch(statusTierSelect, {tier});
}

export function tierCompleteClose() {
  dispatch(tierCompleteClose, {});
}

export function tierCursorChange(tier) {
  dispatch(tierCursorChange, {tier});
}

setToString('statuses', {
  buyStatus,
  flashDashboard,
  statusesIntroToggle,
  statusTierSelect,
  tierCursorChange,
  tierCompleteClose
});
