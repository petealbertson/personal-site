// SIDENAV LINKS
$(document).ready(function() {
  function scrollToSection(section, scroll_offset) {
    $('html, body').animate({
        scrollTop: ($(section).offset().top) - scroll_offset
    }, 1400);
  }
  $(".hello_link").click(function() {
    scrollToSection('.landing', 0);
  });
  $(".bio_link").click(function() {
      scrollToSection('.bio', 0);
  });
  $(".work_link").click(function() {
      scrollToSection('.work', 0);
  });
  $(".favs_link").click(function() {
      scrollToSection('.favs', 0);
  });
  $(".contact_link").click(function() {
      scrollToSection('.contact', 0);
  });


  // NAME SCROLLING EFFECT
  var lastScrollTop = 0;
  $(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
    $('.scroller').each(function(){
      $(this).css('margin-top', - scroll_top / parseInt($(this).attr('scrollSpeed')));
    });
    // STICKY SIDENAV
    if (window.matchMedia("(min-width: 1300px)").matches) {
      /* the view port is at least 1300 pixels wide */
      if(scroll_top > 325) {
        $('#sidebar').addClass('scrolled');
      }
      if(scroll_top < 325) {
        $('#sidebar').removeClass('scrolled');
      }
    } else {
      /* the view port is less than 1300 pixels wide */
      if(scroll_top > 200) {
        $('#sidebar').addClass('scrolled');
      }
      if(scroll_top < 200) {
        $('#sidebar').removeClass('scrolled');
      }
    }
    if (window.matchMedia("(max-width: 770px)").matches) {
      if(scroll_top > 200) {
        $('.nav_list').addClass('small-screen');
      }
      if(scroll_top > 225) {
        $('.small-screen-nav-bg').show();
      }
      if(scroll_top < 200) {
        $('.nav_list').removeClass('small-screen');
        $('.small-screen-nav-bg').removeClass('small-screen');
      }
    }

    // reveal nav on mobile scroll up
    var st = $(this).scrollTop();
    if (scroll_top > 200) {
      if (st < lastScrollTop){
           // upscroll code
        $('.nav_list').removeClass('small-screen');
        $('.small-screen-nav-bg').addClass('small-screen');
      } else {
          // downscroll code
        $('.nav_list').addClass('small-screen');
        $('.small-screen-nav-bg').removeClass('small-screen');
      }
      lastScrollTop = st;
    };

     // sidenav border change
    if(scroll_top > ($('.bio').offset().top * 0.9)) {
      $('.bio_link').addClass('active');
      $('.hello_link').removeClass('active');
    }
    if(scroll_top < ($('.bio').offset().top * 0.9)) {
      $('.bio_link').removeClass('active');
      $('.hello_link').addClass('active');
    }

    if(scroll_top > ($('.work').offset().top * 0.915)) {
      $('.work_link').addClass('active');
      $('.bio_link').removeClass('active');
    }
    if(scroll_top < ($('.work').offset().top * 0.915) && scroll_top > ($('.bio').offset().top * 0.925)) {
      $('.work_link').removeClass('active');
      $('.bio_link').addClass('active');
    }

    if(scroll_top > ($('.favs').offset().top * 0.925)) {
      $('.favs_link').addClass('active');
      $('.work_link').removeClass('active');
    }
    if(scroll_top < ($('.favs').offset().top * 0.925) && scroll_top > ($('.work').offset().top * 0.92)) {
      $('.favs_link').removeClass('active');
      $('.work_link').addClass('active');
    }

    if(scroll_top > ($('.contact').offset().top * 0.935)) {
      $('.contact_link').addClass('active');
      $('.favs_link').removeClass('active');
    }
    if(scroll_top < ($('.contact').offset().top * 0.935) && scroll_top > ($('.favs').offset().top * 0.925)) {
      $('.contact_link').removeClass('active');
      $('.favs_link').addClass('active');
    }
  });
});
