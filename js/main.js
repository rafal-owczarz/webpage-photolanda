const $nav = $('.navbar');
const $toogler = $('.navbar-toggler');

$(window).on('scroll', () => {
  const scrollValue = window.scrollY;
  scrollValue > 100 ? $nav.addClass('active') : $nav.removeClass('active');
});

$toogler.on('click', () => {
  $nav.toggleClass('nav-shadow');
});