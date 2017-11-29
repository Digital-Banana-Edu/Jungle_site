$(document).ready(function() {
  $('a').click(function() {
    if ($(this).attr('href').match(/#/) == "#") {
      event.preventDefault();

      var id = $(this).attr('href');
      var top = $(id).offset().top;

      $('body, html').animate({scrollTop: top}, 1500);
    }
  });

  $('.section-about_feature').on('click', '.btn', function() {
    var currentProgramm = $(this).parent().index();
    
    $('.is-visible').removeClass('is-visible');
    $('.programm-holder:eq(' + currentProgramm + ')').addClass('is-visible');
  });
});