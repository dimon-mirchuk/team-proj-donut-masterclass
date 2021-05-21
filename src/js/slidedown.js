$('.action').on('click', function (e) {
  e.preventDefault();
  $(this).text($(this).text() == 'Read more' ? 'Less' : 'Read more');
  $(this).closest('div.section__wrapper').find('.hidden-content').slideToggle();
});
