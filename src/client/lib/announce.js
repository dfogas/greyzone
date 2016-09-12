import $ from 'jquery';

const announce = function(message, context) {
  $(`#${context}Announce`).remove();
  $(`#${context}Screen`).append(`<div id='${context}Announce'>${message}</div>`);
  $(`#${context}Announce`).on('click', () => {
    $(`#${context}Announce`).remove();
  });
};

export default announce;
