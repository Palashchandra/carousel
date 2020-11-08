(function ($) {
    "use strict";

    //sticky menu
    // $(window).on('scroll', function() {
    //     var window_top = $(window).scrollTop() + 0;
    //     if (window_top > 0) {
    //         $('.classic_header, .fixed_menu ').addClass('menu_fixed animated fadeInDown');
    //     } else {
    //         $('.classic_header, .fixed_menu').removeClass('menu_fixed animated fadeInDown');
    //     }
    // });

    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();

    //dl video popup js
    var video_popup = $('.dl_video_popup');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

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
                    slideToClickedSlide: true,
                    direction: dir,
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
                    navigation: {
                        nextEl: nav_nx,
                        prevEl: nav_pv
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

    //swiper slider option
    $(".dl_slider_wrapper").each(function () {
        var t = $(this),
            i = ($(this).attr("id"), $(this).data("perpage") || 1),
            a = $(this).data("loop"),
            e = $(this).data("speed") || 1000,
            o = $(this).data("space") || 0,
            l = $(this).data("effect"),
            c = $(this).data("center"),
            pl = $(this).data("autoplay"),
            nex = $(this).data("next"),
            pre = $(this).data("prev"),
            pag = $(this).data("pagination"),
            mous = $(this).data("mousewheel"),
            pagtype = $(this).data("paginationtype"),
            d = $(this).data("direction") || "horizontal",
            cfr = $(this).data("rotate"),
            cfs = $(this).data("stretch"),
            cfd = $(this).data("depth"),
            lops = $(this).data("loopslides"),
            scol = $(this).data("slidescolumn"),
            r = $(this).data("breakpoints");
        new Swiper(t, {
            slidesPerView: i,
            direction: d,
            spaceBetween: o,
            loop: a,
            speed: e,
            effect: l,
            breakpoints: r,
            centeredSlides: c,
            mousewheel: mous,
            slidesPerColumn: scol,
            slideToClickedSlide: true,
            loopedSlides: lops,
            autoplay: pl,
            coverflowEffect: {
                rotate: cfr,
                stretch: cfs,
                depth: cfd,
                modifier: 1,
                slideShadows: false,
            },
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
    // $(".swiper-container, .dl_thumb_slider_wrapper ").hover(function () {
    //     (this).swiper.autoplay.stop();
    // }, function () {
    //     (this).swiper.autoplay.start();
    // });

    //tab slider
    var dl_galleryThumbs1 = new Swiper('.dl_gallery_slider_nav_tab_01', {
        spaceBetween: 30,
        slidesPerView: 7,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        speed: 1000,
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
            },
            1366: {
              slidesPerView: 7,
            }
        }
    });
    var dl_galleryTop1 = new Swiper('.dl_gallery_slider_tab_01', {
        loop: false,
        effect: 'fade',
        speed: 1000,
        thumbs: {
            swiper: dl_galleryThumbs1
        }
    });

    var dl_galleryThumbs2 = new Swiper('.dl_gallery_slider_nav_tab_02', {
        spaceBetween: 30,
        slidesPerView: 7,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        speed: 1000,
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
            },
            1366: {
              slidesPerView: 7,
            }
        }
    });
    var dl_galleryTop2 = new Swiper('.dl_gallery_slider_tab_02', {
        loop: false,
        effect: 'fade',
        speed: 1000,
        thumbs: {
            swiper: dl_galleryThumbs2
        }
    });

    var dl_galleryThumbs3 = new Swiper('.dl_gallery_slider_nav_tab_03', {
        spaceBetween: 30,
        slidesPerView: 7,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        speed: 1000,
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
            },
            1366: {
              slidesPerView: 7,
            }
        }
    });
    var dl_galleryTop3 = new Swiper('.dl_gallery_slider_tab_03', {
        loop: false,
        effect: 'fade',
        speed: 1000,
        thumbs: {
            swiper: dl_galleryThumbs3
        }
    });

    var dl_galleryThumbs4 = new Swiper('.dl_gallery_slider_nav_tab_04', {
        spaceBetween: 30,
        slidesPerView: 7,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        speed: 1000,
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
            },
            1366: {
              slidesPerView: 7,
            }
        }
    });
    var dl_galleryTop4 = new Swiper('.dl_gallery_slider_tab_04', {
        loop: false,
        effect: 'fade',
        speed: 1000,
        thumbs: {
            swiper: dl_galleryThumbs4
        }
    });

    var dl_galleryThumbs5 = new Swiper('.dl_gallery_slider_nav_tab_05', {
        slidesPerView: 7,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: false,
        speed: 1000,
        direction: 'vertical',
        breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
            },
            1366: {
              slidesPerView: 7,
            }
        }
    });
    var dl_galleryTop5 = new Swiper('.dl_gallery_slider_tab_05', {
        loop: false,
        effect: 'fade',
        speed: 1000,
        thumbs: {
            swiper: dl_galleryThumbs5
        }
    });

    


}(jQuery));