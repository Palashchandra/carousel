(function ($) {
    "use strict";

    const dlmultiSwiperSlides = function () {
        let sliderMain = document.querySelectorAll('.dl_thumb_slider_main')
        let sliderNav = document.querySelectorAll('.dl_thumb_slider_nav')
        let mainArray = [];
        let navArray = [];
        sliderMain.forEach(function (element, p) {
            var lop = $(this).data("loop");
            var spd = $(this).data("speed") || 2000;
            var sps = $(this).data("space") || 0;
            var afc = $(this).data("effect");
            var cents = $(this).data("centere");
            var dir = $(this).data("direction") || "horizontal";
            mainArray.push(
                new Swiper(element, p, {
                    loop: lop,
                    loopedSlides: 4,
                    slidesPerView: 3,
                    centeredSlides: cents,
                    speed: spd,
                    effect: afc,
                    spaceBetween: sps,
                    direction: dir,
                })
            );
        });
        sliderNav.forEach(function (element, i, q) {
            var self = sliderNav;
            var navlop = $(this).data("nav_loop");
            var navspd = $(this).data("nav_speed") || 2000;
            var navsps = $(this).data("nav_space") || 0;
            var navafc = $(this).data("nav_effect");
            var navcents = $(this).data("nav_centere");
            var navdir = $(this).data("nav_direction") || "horizontal";
            navArray.push(
                new Swiper(element, q, {
                    slidesPerView: 5,
                    loop: navlop,
                    loopedSlides: 4,
                    slideToClickedSlide: true,
                    spaceBetween: navsps,
                    centeredSlides: navcents,
                    direction: navdir,
                    speed: navspd,
                    effect: navafc,
                    navigation: {
                        nextEl: self[i].querySelector('.swiper-button-next'),
                        prevEl: self[i].querySelector('.swiper-button-prev')
                    }
                })
            );
        });
        const checkOnPage = function () {
            if (sliderMain.length > 0 && sliderNav.length > 0) {
                let numberOfSlides = mainArray.length || navArray.length || 0;
                for (let i = 0; i < numberOfSlides; i++) {
                    mainArray[i].controller.control = navArray[i];
                    navArray[i].controller.control = mainArray[i];
                }
            }
        }
        checkOnPage();
    }
    dlmultiSwiperSlides();

}(jQuery));