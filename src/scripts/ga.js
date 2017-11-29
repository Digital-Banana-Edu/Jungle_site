(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-60556005-2', 'auto');
ga('send', 'pageview');

setTimeout(function() {
  ga('send', 'event', 'timer', 'read');
}, 30000);

$(document).on('click', '.ga_msk', function() {
  ga('send', 'event', 'msk_click', 'msk_click', 'msk_click');
})

$(document).on('click', '.ga_spb', function() {
  ga('send', 'event', 'spb_click', 'spb_click', 'spb_click');
})

$(document).on('click', '.ga_msk_timepad', function() {
  ga('send', 'event', 'msk_click_timepad', 'msk_click_timepad', 'msk_click_timepad');
})

$(document).on('click', '.ga_spb_timepad', function() {
  ga('send', 'event', 'spb_click_timepad', 'spb_click_timepad', 'spb_click_timepad');
})

$(document).on('click', '.header-org__left', function() {
  ga('send', 'event', 'go_banana', 'go_banana', 'go_banana');
})

$(document).on('click', '.header-org__right', function() {
  ga('send', 'event', 'go_preza', 'go_preza', 'go_preza');
})

$(document).on('click', '.contacts_presentation', function() {
  ga('send', 'event', 'go_preza_footer', 'go_preza_footer', 'go_preza_footer');
})