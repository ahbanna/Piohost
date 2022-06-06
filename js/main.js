(function ($) {
    "use strict";


    // mean-menu (mobile)
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuOpen: "<span></span><span></span><span></span>",
    });


    //wow
    new WOW().init();



    $('.nav-style').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    //testimonial
    $('.testimonial-active').slick({
        infinite: true,
        nextArrow: '<button type="button" class="slick - next "><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="slick - prev"><i class="fas fa-arrow-left"></i></button>',
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    arrows: true,
                    slidesToShow: 2,
                }
                },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                }
                },
            ]
    });

    //    brand
    $('.brand-active').slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 4,
                }
                },
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 2,
                }
                },
            ]
    });

    // scroll
    $('body').materialScrollTop();






})(jQuery);
