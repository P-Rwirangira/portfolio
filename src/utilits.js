import { initializeJQuery } from './lib/jquery-loader';

export const jqueryFuntion = async () => {
  // Initialize jQuery and plugins first
  const isReady = await initializeJQuery();
  if (!isReady || typeof window === 'undefined') {
    console.error('jQuery not available');
    return;
  }

  const $ = window.$;

  $(window).on('load', function () {
    /* ----------------------------------------------------------- */
    /*  PAGE PRELOADER
    /* ----------------------------------------------------------- */
    var preloader = $('#preloader');
    setTimeout(function () {
      preloader.addClass('preloaded');
    }, 800);

    if ($(window).width() > 1024) {
      setTimeout(function () {
        $('.header-inner').addClass('animated fadeInDown');
      }, 1500);
      setTimeout(function () {
        $('.home>div>div h1 span span').addClass('animated fadeInUp');
        $('.home>div>div .intro').addClass('animated fadeInUp');
        $('.home .cta').addClass('animated fadeInUp');
      }, 2200);
    } else {
      setTimeout(function () {
        $('.header-inner').addClass('animated fadeInDown');
      }, 1100);
      setTimeout(function () {
        $('.home>div>div h1 span span').addClass('animated fadeInUp');
        $('.home>div>div .intro').addClass('animated fadeInUp');
        $('.home .cta').addClass('animated fadeInUp');
      }, 1800);
    }

    /* ----------------------------------------------------------- */
    /*  SET ACTIVE MENU ITEM ON SCROLL
    /* ----------------------------------------------------------- */
    var homewidth = $('.home').width() - 10;
    var aboutwidth = homewidth + $('.about').width() + $('.facts').width() - 10;
    var portfoliowidth =
      aboutwidth +
      $('.portfolio .single-item .main-content').width() +
      $('.portfolio .single-item .details').width() +
      250 +
      65 +
      300 +
      $('.clients').width() -
      10;
    var contactwidth =
      portfoliowidth + $('.contact').width() + $('.testimonials').width() - 10;
    var blogwidth =
      contactwidth + $('.blog').width() + $('.copyright').width() - 10;

    /* ----------------------------------------------------------- */
    /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
    /* ----------------------------------------------------------- */
    function animateContent() {
      var divWidth = $('#wrapper').width() - $(window).width() / 2 + 270;
      var animated = $('.animated-layer');
      animated.each(function () {
        var anim = $(this);
        var offset = $(this).offset().left;
        if (offset < divWidth) {
          // Image Reveal Animation
          if (anim.hasClass('image-animation')) {
            anim.addClass('animated');
          }
          // Fade In Up Animation
          else if (anim.hasClass('fade-in-up-animation')) {
            anim.addClass('animated fadeInUp');
          }
          // Fade In Animation
          else if (anim.hasClass('fade-in-animation')) {
            anim.addClass('animated fadeIn');
          }
          // Fade In Down Animation
          else if (anim.hasClass('fade-in-down-animation')) {
            anim.addClass('animated fadeInDown');
          }
          // Fade In Right Animation
          else if (anim.hasClass('fade-in-right-animation')) {
            anim.addClass('animated fadeInRight');
          }
          // Fade In Left Animation
          else if (anim.hasClass('fade-in-left-animation')) {
            anim.addClass('animated fadeInLeft');
          }
        }
      });
    }

    function checkScroll() {
      if (
        Math.abs(parseInt($('.mCSB_container').css('left'))) > homewidth &&
        Math.abs(parseInt($('.mCSB_container').css('left'))) < aboutwidth
      ) {
        $('.menu ul li span').removeClass('active');
        $('#about-link').addClass('active');
      } else if (
        Math.abs(parseInt($('.mCSB_container').css('left'))) > aboutwidth &&
        Math.abs(parseInt($('.mCSB_container').css('left'))) < portfoliowidth
      ) {
        $('.menu ul li span').removeClass('active');
        $('#my-work-link').addClass('active');
      } else if (
        Math.abs(parseInt($('.mCSB_container').css('left'))) > portfoliowidth &&
        Math.abs(parseInt($('.mCSB_container').css('left'))) < contactwidth
      ) {
        $('.menu ul li span').removeClass('active');
        $('#contact-link').addClass('active');
      } else if (
        Math.abs(parseInt($('.mCSB_container').css('left'))) > contactwidth &&
        Math.abs(parseInt($('.mCSB_container').css('left'))) < blogwidth
      ) {
        $('.menu ul li span').removeClass('active');
        $('#blog-link').addClass('active');
      } else {
        $('.menu ul li span').removeClass('active');
        $('#home-link').addClass('active');
      }
    }

    if ($('#wrapper').length) {
      if ($(window).width() > 1024) {
        try {
          // Check if mCustomScrollbar is available
          if (typeof $.fn.mCustomScrollbar === 'function') {
            $('#wrapper').mCustomScrollbar({
              axis: 'x',
              theme: 'dark-3',
              keyboard: { enable: true, scrollType: 'stepless' },
              advanced: {
                autoExpandHorizontalScroll: true,
              },
              mouseWheel: {
                scrollAmount: 400,
              },
              callbacks: {
                whileScrolling: function () {
                  animateContent();
                  checkScroll();
                },
              },
            });
          } else {
            console.error('mCustomScrollbar plugin not available');
          }
        } catch (error) {
          console.error('Error initializing mCustomScrollbar:', error);
        }
      } else {
        // Initialize WOW.js for mobile
        if (typeof window !== 'undefined') {
          import('wowjs')
            .then(({ WOW }) => {
              new WOW().init();
            })
            .catch(console.error);
        }
      }
    }
  });

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      $('body').addClass('body-safari');
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
    /* ----------------------------------------------------------- */
    $("a[href='#']").on('click', function (e) {
      e.preventDefault();
    });

    function removeHash() {
      if (typeof window !== 'undefined' && window.history) {
        window.history.replaceState(
          '',
          document.title,
          window.location.origin +
            window.location.pathname +
            window.location.search
        );
      }
    }

    $('#menu li a').on('click', function (e) {
      setTimeout(() => {
        removeHash();
      }, 5);
    });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */
    if ($(window).width() > 1024) {
      $('.fadeIn').removeClass('fadeIn');
      $('.fadeInUp').removeClass('fadeInUp');
      $('.fadeInDown').removeClass('fadeInDown');
      $('.fadeInRight').removeClass('fadeInRight');
      $('.fadeInLeft').removeClass('fadeInLeft');
    }

    /* ----------------------------------------------------------- */
    /*  MENU LINKS
    /* ----------------------------------------------------------- */
    $('.menu ul li span').on('click', function () {
      setTimeout(function () {
        $(this).toggleClass('active');
      }, 1600);
    });

    const scrollToSection = target => {
      if ($(window).width() > 1024) {
        try {
          if (
            $('#wrapper').data('mCS') &&
            typeof $.fn.mCustomScrollbar === 'function'
          ) {
            $('#wrapper').mCustomScrollbar('scrollTo', target, {
              scrollInertia: 1500,
            });
          }
        } catch (error) {
          console.error('Error scrolling to section:', error);
        }
      }
    };

    $('#home-link').on('click', function () {
      scrollToSection('#home');
    });

    $('#about-link').on('click', function () {
      scrollToSection('#about');
    });

    $('#my-work-link').on('click', function () {
      scrollToSection('#my-work');
    });

    $('#contact-link').on('click', function () {
      scrollToSection('#contact');
    });

    $('#blog-link').on('click', function () {
      scrollToSection('#blog');
    });

    $('#menu li a').on('click', function () {
      $('#checkboxmenu').trigger('click');
      $('body').toggleClass('overflow-hidden');
    });

    $('#menuToggle').on('click', function () {
      $('body').toggleClass('overflow-hidden');
    });

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */
    $('#cta').on('click', function () {
      if ($(window).width() > 1024) {
        scrollToSection('#about');
      } else {
        const target = $('#my-photo');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
        }
      }
    });
  });
};
