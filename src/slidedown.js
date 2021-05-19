$('.actions .btn').on('click', function (e) {
  e.preventDefault();
  $(this).text($(this).text() == 'Read more' ? 'Less' : 'Read more');
  $(this).closest('article.post').find('.hidden-content').slideToggle();
});
