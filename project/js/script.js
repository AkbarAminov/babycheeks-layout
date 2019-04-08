$(document).ready(function () {
  $('.expand-button').on('click', function () {
    $('.special-text').toggleClass('-expanded');

    if ($('.special-text').hasClass('-expanded')) {
      $('.expand-button').html('Свернуть');
    } else {
      $('.expand-button').html('Читать Больше');
    }
  });

});

