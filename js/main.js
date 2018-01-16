$(window).on('load', function() {
  // Show Loader as window loads.
  $('.loader').fadeOut('loader');;
});

$(document).ready(function() {
  // Smooth Scrolling //
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="#skills"]')
    .not('[href="#summary"]')
    .not('[href="#art"]')
    .not('[href^="#collapse"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top,
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            }
          });
        }
      }
    });

  // ScrollMagic //

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Pin Intro
  var pinIntroScene = new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 0,
    })
    .setPin('#intro', {
      pushFollowers: false,
    })
    .addTo(controller);

  // Loop through each Title Card

  $('.bcg-parallax').each(function() {
    var bg = $(this).find('.bcg');
    var parallaxTL = new TimelineMax();
    parallaxTL
      .from(bg, 2, {
        y: '-40%',
        ease: Power0.easeNone,
      }, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 1,
        duration: '200%',
      })
      .setTween(parallaxTL)
      .addTo(controller);
  });

  $('.bcg-parallax').each(function() {
    var cont = $(this).find('.content-wrapper');
    var parallaxTL2 = new TimelineMax();
    parallaxTL2
      .from(cont, 2, {
        ease: Bounce.easeOut,
        y: '-300%',
      })

    var slideParallaxScene2 = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9,
        reverse: false,
      })
      .setTween(parallaxTL2)
      .addTo(controller);
  });

  //loop through each project element
  $('.project').each(function() {
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
      })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  });
});
