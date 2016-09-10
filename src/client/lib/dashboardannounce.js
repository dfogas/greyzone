import $ from 'jquery';

const dashboardAnnounce = function(message) {
  $('#DashboardAnnounce').remove();
  $('#DashboardScreen').append(`<div id='DashboardAnnounce'>${message}</div>`);
  $('#DashboardAnnounce').on('click', () => {
    $('#DashboardAnnounce').remove();
  });
};

export default dashboardAnnounce;
