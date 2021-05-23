$('.mobile-menu__link').on('click', function () {
  if ($('.mobile-menu').hasClass('is-open')) {
    $('.mobile-menu').removeClass('is-open');
    $('body').removeClass('lock-scroll');
  }
});