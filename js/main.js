$(document).ready(function () {
  // Smooth Scrolling //

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
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
          }, 1000, function () {
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

  $('.bcg-parallax').each(function () {
    var cont = $(this).find('.content-wrapper');
    var bg = $(this).find('.bcg');
    var parallaxTL = new TimelineMax();
    parallaxTL
      .from(cont, 0.4, {
        autoAlpha: 0,
        ease: Power0.easeNone,
      }, 0.4)
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

  //loop through each project element
  $('.project').each(function () {
    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
      })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  });
});
