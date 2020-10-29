var pc_element = pc_element || {};
! function (p) {
    "use strict";
    pc_element.pc_initialize = {
        init: function () {
            pc_element.pc_initialize.swiperSlider()
        },
        swiperSlider: function () {
            p(".dl_slider_wrapper").each(function () {
                var t = p(this),
                    i = (p(this).attr("id"), p(this).data("perpage") || 1),
                    a = p(this).data("loop"),
                    e = p(this).data("speed") || 1000,
                    o = p(this).data("space") || 0,
                    l = p(this).data("effect"),
                    c = p(this).data("center"),
                    pl = p(this).data("autoplay"),
                    nex = p(this).data("next"),
                    pre = p(this).data("prev"),
                    pag = p(this).data("pagination"),
                    pagtype = p(this).data("paginationtype"),
                    d = p(this).data("direction") || "horizontal",
                    r = p(this).data("breakpoints");
                new Swiper(t, {
                    slidesPerView: i,
                    direction: d,
                    spaceBetween: o,
                    loop: a,
                    speed: e,
                    effect: l,
                    breakpoints: r,
                    centeredSlides: c,
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: !1
                    // },
                    autoplay: pl,
                    pagination: {
                        el: pag,
                        type: pagtype,
                        clickable: !0
                    },
                    navigation: {
                        nextEl: nex,
                        prevEl: pre
                    }
                })
            })
            $(".swiper-container").hover(function() {
                (this).swiper.autoplay.stop();
            }, function() {
                (this).swiper.autoplay.start();
            });
        },

    }, pc_element.documentOnReady = {
        init: function () {
            pc_element.pc_initialize.init()
        }
    }, p(document).ready(pc_element.documentOnReady.init)
}(jQuery);







//swiper slider multi thumb slider option
const dlmultiSwiperSlides = function () {
    let sliderMain = document.querySelectorAll('.swiper-container.dl_thumb_slider_main')
    let sliderNav = document.querySelectorAll('.swiper-container.dl_thumb_slider_nav')
    let mainArray = [];
    let navArray = [];
    
    sliderMain.forEach(function (element, i) {
        var mself = sliderMain;
        var per = ($(mself[i]).attr("id"), $(mself[i]).data("perpage") || 1);
        var lop = $(mself[i]).data("loop");
        var spd = $(mself[i]).data("speed") || 1000;
        var sps = $(mself[i]).data("space") || 0;
        var afc = $(mself[i]).data("effect");
        var atp = $(mself[i]).data("main_autoplay");
        var msl = $(mself[i]).data("mainslideloop") || 7;
        var maincents = $(mself[i]).data("main_centere");
        var main_br = $(mself[i]).data("breakpoints");
        var main_nx = $(mself[i]).data("main_swiper_next");
        var main_pv = $(mself[i]).data("main_swiper_prev");
        var dir = $(mself[i]).data("direction") || "horizontal";
        mainArray.push(
            new Swiper(element, {
                loop: lop,
                loopedSlides: msl,
                slidesPerGroup: 1,
                slidesPerView: per,
                loopFillGroupWithBlank: true,
                speed: spd,
                effect: afc,
                spaceBetween: sps,
                autoplay: atp,
                centeredSlides: maincents,
                breakpoints: main_br,
                direction: dir,
                // navigation: {
                //     nextEl: mself[i].querySelector(main_nx),
                //     prevEl: mself[i].querySelector(main_pv)
                // }
                navigation: {
                    nextEl: main_nx,
                    prevEl: main_pv
                }
            })
        );
    });
    sliderNav.forEach(function (element, i) {
        var self = sliderNav;
        var navper = ($(self[i]).attr("id"), $(self[i]).data("nav_perpage") || 1);
        var navlop = $(self[i]).data("nav_loop");
        var navspd = $(self[i]).data("nav_speed") || 1000;
        var navsps = $(self[i]).data("nav_space") || 0;
        var navafc = $(self[i]).data("nav_effect");
        var navatp = $(self[i]).data("nav_autoplay");
        var navcents = $(self[i]).data("nav_centere");
        var nsl = $(self[i]).data("navslideloop") || 7;
        var nav_br = $(self[i]).data("breakpoints");
        var nav_nx = $(self[i]).data("navswipernext");
        var nav_pv = $(self[i]).data("navswiperprev");
        var navdir = $(self[i]).data("nav_direction") || "horizontal";
        navArray.push(
            new Swiper(element, {
                slidesPerView: navper,
                loop: navlop,
                loopedSlides: nsl,
                slidesPerGroup: 1,
                slideToClickedSlide: true,
                spaceBetween: navsps,
                loopFillGroupWithBlank: true,
                centeredSlides: navcents,
                direction: navdir,
                autoplay: navatp,
                speed: navspd,
                effect: navafc,
                breakpoints: nav_br,
                // navigation: {
                //     nextEl: self[i].querySelector(nav_nx),
                //     prevEl: self[i].querySelector(nav_pv)
                // }
                navigation: {
                    nextEl: nav_nx,
                    prevEl: nav_pv
                }
            })
        );
    });
    // const checkOnPage = function () {
    //     if (sliderMain.length > 0 && sliderNav.length > 0) {
    //         let numberOfSlides = mainArray.length || navArray.length || 0;
    //         for (let i = 0; i < numberOfSlides; i++) {
    //             mainArray[i].controller.control = navArray[i];
    //             navArray[i].controller.control = mainArray[i];
    //         }
    //     }
    // }
    // checkOnPage();
}
dlmultiSwiperSlides();