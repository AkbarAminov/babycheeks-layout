$(document).ready(function () {

  $('.owl-1').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    animateOut: 'fadeOut',

    navText: ['<i class="fa fa-angle-left fa-2x fa-fw" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right fa-2x fa-fw" aria-hidden="true"></i>'
    ], //we will be using font awesome icon here
    responsive: {
      0: {
        items: 1
      },
      900: {
        item: 3
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })


  $('.expand-button').on('click', function () {
    $('.special-text').toggleClass('-expanded');

    if ($('.special-text').hasClass('-expanded')) {
      $('.expand-button').html('Свернуть');
    } else {
      $('.expand-button').html('Читать Больше');
    }
  });


})