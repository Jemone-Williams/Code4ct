
// enabling smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// the counter will start at 0 and will reach it's given target within 3000 milliseconds
$('.countUp').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 3000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
});

// the elements are cloned in order for the carousel to move infinitely
$(function () {
  var $first=$('#partners>:first-child');
  $('#partners').width($first.outerWidth(true));
  $first.clone(true).appendTo('#partners');
  $('#partners').addClass('ready');
})
