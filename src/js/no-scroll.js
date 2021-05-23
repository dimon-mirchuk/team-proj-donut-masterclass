$('.menu-button').on('click', function () {
  if ($('body').hasClass('lock-scroll')) {
    $('body').removeClass('lock-scroll');
    $('.back_to_top--mob').addClass('back_to_top');
    $('.back_to_top--mob').removeClass('hide-and-seek');
  } else {
    $('body').addClass('lock-scroll');
    $('.back_to_top--mob').removeClass('back_to_top');
    $('.back_to_top--mob').addClass('hide-and-seek');
  }
});
