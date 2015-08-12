$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          //added extra 100 offset to get scrolling to go exactly to headers
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});