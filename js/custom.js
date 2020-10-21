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

    //maasonry js
    $(".dl_addons_grid_wrapper").each(function () {
        var dl_addons_grid_wrapper = $('.dl_addons_grid_wrapper');
        if (dl_addons_grid_wrapper.length) {
            $(this).dlAddonsGridLayout();
        }
    });

    //niceselent js
    var niceSelect = $('.niceSelect');
    if (niceSelect.length > 0) {
        niceSelect.niceSelect();
    }

    //parallaxie back ground image
    var parallaxie = $('.parallaxie');
    if (parallaxie.length) {
        parallaxie.parallaxie({
            speed: 0.5,
            offset: 50,
        });
    };

    //mouse move parallax
    if ($('.mouse_move_animation').length > 0) {
        $('.mouse_move_animation').parallax({
            scalarX: 10.0,
            scalarY: 8.0,
        });
    }

    var pricingPart = $('#dl_pricing_part');
    if (pricingPart.length) {
        var e = document.getElementById("dl_filt_monthly"),
            d = document.getElementById("dl_filt_yearly"),
            t = document.getElementById("dl_switcher"),
            m = document.getElementById("dl_monthly"),
            y = document.getElementById("dl_yearly");

        e.addEventListener("click", function () {
            t.checked = false;
            e.classList.add("toggler--is-active");
            d.classList.remove("toggler--is-active");
            m.classList.remove("dl_hide");
            y.classList.add("dl_hide");
        });

        d.addEventListener("click", function () {
            t.checked = true;
            d.classList.add("toggler--is-active");
            e.classList.remove("toggler--is-active");
            m.classList.add("dl_hide");
            y.classList.remove("dl_hide");
        });

        t.addEventListener("click", function () {
            d.classList.toggle("toggler--is-active");
            e.classList.toggle("toggler--is-active");
            m.classList.toggle("dl_hide");
            y.classList.toggle("dl_hide");
        })
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

    $(".dl_inner_tab_container").each(function () {
        $('.dl_top_nav_item').on("click", function () {
            $(".dl_inner_tab").removeClass('dl_tab_content_active');
            $(".dl_inner_tab[data-id='" + $(this).attr('data-id') + "']").addClass("dl_tab_content_active");
            $(".dl_top_nav_item").removeClass('dl_tab_active');
            $(this).addClass('dl_tab_active');
        });
    })

    $(document).ready(function () {
        $(".dl_tab_container").each(function () {
            var $myTabs = $(this);
            $myTabs.find(".dl_tab_content_wrapper , .dl_tab_content_wrapper").hide().first().show();
            $myTabs.find("ul.dl_tab_menu li:first").addClass("dl_active").show();

            $myTabs.find("ul.dl_tab_menu li").click(function () {
                var $this = $(this);

                $this.addClass("dl_active").siblings().removeClass("dl_active");
                $myTabs.find(".dl_tab_content_wrapper, .dl_tab_content_wrapper").hide();

                var activeTab = $this.find("a").attr("href");
                $(activeTab).fadeIn();

                return false;
            });
        });
    });

    //on hover css
    $(".dl_hover_addclass").hover(function () {
        $(".dl_hover_addclass").removeClass('dl_active');
        $(this).addClass('dl_active')
    });


    var $w = $(window);
    $.fn.visible = function (partial, hidden, direction, container) {

        if (this.length < 1)
            return;

        // Set direction default to 'both'.
        direction = direction || 'both';

        var $t = this.length > 1 ? this.eq(0) : this,
            isContained = typeof container !== 'undefined' && container !== null,
            $c = isContained ? $(container) : $w,
            wPosition = isContained ? $c.position() : 0,
            t = $t.get(0),
            vpWidth = $c.outerWidth(),
            vpHeight = $c.outerHeight(),
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function') {

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                rec.left >= 0 && rec.left < vpWidth,
                rViz = isContained ?
                rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left :
                rec.right > 0 && rec.right <= vpWidth,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || rViz : lViz && rViz,
                vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if (direction === 'both')
                return clientSize && vVisible && hVisible;
            else if (direction === 'vertical')
                return clientSize && vVisible;
            else if (direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop = isContained ? 0 : wPosition,
                viewBottom = viewTop + vpHeight,
                viewLeft = $c.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                position = $t.position(),
                _top = position.top,
                _bottom = _top + $t.height(),
                _left = position.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if (direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if (direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if (direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };


    // if ($('#dl_line_process').visible(true)) {
    //      var scrollAmount = $(window).scrollTop();
    //      var documentHeight = $(document).height();
    //      var scrollPercent = (scrollAmount / documentHeight) * 100;

    //      var fnDoScroll = function() {
    //        $(".dl_timeline_section_inner").css({
    //          height: scrollPercent + '%'
    //        });
    //      };

    //      if (scrollPercent >= 0)
    //        fnDoScroll();
    // }


    $(document).ready(function () {
        setupFade();
        setupClickToScroll();
        setupPostAnimation();
        setupScrollToTop();
        enableScrollAbortion();

        // Trigger window.scroll, this will initiate some of the scripts
        $(window).scroll();
    });


    // Allow user to cancel scroll animation by manually scrolling
    function enableScrollAbortion() {
        var $viewport = $('html, body');
        $viewport.on('scroll mousedown DOMMouseScroll mousewheel keyup', function (e) {
            if (e.which > 0 || e.type === 'mousedown' || e.type === 'mousewheel') {
                $viewport.stop();
            }
        });
    }

    function setupScrollToTop() {
        var scrollSpeed = 750;
        $('.trigger-scroll-to-top').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, scrollSpeed);
        });
    }


    function setupPostAnimation() {
        var posts = $('.post-wrapper .post');
        $(window).on('scroll resize', function () {

            var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
                windowHeight = $(window).height(), // Needs to be here because window can resize
                overScroll = Math.ceil(windowHeight * .20),
                treshhold = (currScroll + windowHeight) - overScroll;

            posts.each(function () {

                var post = $(this),
                    postScroll = post.offset().top

                if (postScroll > treshhold) {
                    post.addClass('hidden');
                } else {
                    post.removeClass('hidden');
                }

            });

        });
    }

    function setupFade() {
        var posts = $('.post-wrapper .post').reverse(),
            stemWrapper = $('.stem-wrapper'),
            halfScreen = $(window).height() / 2;
        $(window).on('scroll resize', function () {
            delay(function () {
                var currScroll = $(window).scrollTop() > $(document).scrollTop() ? $(window).scrollTop() : $(document).scrollTop(),
                    scrollSplit = currScroll + halfScreen;

                posts.removeClass('active').each(function () {

                    var post = $(this),
                        postOffset = post.offset().top;

                    if (scrollSplit > postOffset) {

                        // Add active class to fade in
                        post.addClass('active')

                        // Get post color
                        var color = post.data('stem-color') ? post.data('stem-color') : null,
                            allColors = 'color-green color-yellow color-white'

                        stemWrapper.removeClass(allColors);

                        if (color !== null) {
                            stemWrapper.addClass('color-' + color);
                        }

                        return false;
                    }

                });
            }, 20);

        });

    }


    function setupClickToScroll(post) {

        var scrollSpeed = 750;

        $('.post-wrapper .post .stem-overlay .icon').click(function (e) {
            e.preventDefault();

            var icon = $(this),
                post = icon.closest('.post'),
                postTopOffset = post.offset().top,
                postHeight = post.height(),
                halfScreen = $(window).height() / 2,
                scrollTo = postTopOffset - halfScreen + (postHeight / 2);

            $('html, body').animate({
                scrollTop: scrollTo
            }, scrollSpeed);
        });

    }

    // Timeout function
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    $.fn.reverse = function () {
        return this.pushStack(this.get().reverse(), arguments);
    };

    var dl_timeline_inner = document.getElementsByClassName("dl_timeline_inner");
    if (dl_timeline_inner.length) {
        function owlInitialize() {
            if ($(window).width() > 767) {
                $('.dl_timeline_inner').addClass("owl-carousel");
                $('.owl-carousel').owlCarousel({
                    loop: false,
                    margin: 60,
                    nav: true,
                    navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                    dots: false,
                    items: 3,
                    loop: true
                });
            } else {
                $('.owl-carousel').owlCarousel('destroy');
                $('.dl_timeline_inner').removeClass("owl-carousel");
            }
        }
        $(document).ready(function (e) {
            owlInitialize();
        });
        $(window).resize(function () {
            owlInitialize();
        });
    }


    // (Optional) Active an item if it has the class "is-active"	
    $(".dl_accordion > .dl_accordion_item.is-active").children(".dl_accordion_panel").slideDown();

    $(".dl_accordion > .dl_accordion_item").on('click', function () {
        // Cancel the siblings
        $(this).siblings(".dl_accordion_item").removeClass("is-active").children(".dl_accordion_panel").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".dl_accordion_panel").slideToggle("ease-out");
    });

    //responsive table js
    // DIRTY Responsive pricing table JS

    $(".dl_table_nav").on("click", "button", function () {
        var pos = $(this).index() + 2;
        $("tr").find('td:not(:eq(0))').hide();
        $('td:nth-child(' + pos + ')').css('display', 'table-cell');
        $("tr").find('th:not(:eq(0))').hide();
        $('button').removeClass('active');
        $(this).addClass('active');
    });

    // Initialize the media query
    var mediaQuery = window.matchMedia('(min-width: 640px)');

    // Add event
    mediaQuery.addListener(doSomething);

    // Function to do something with the media query
    function doSomething(mediaQuery) {
        if (mediaQuery.matches) {
            $('.sep').attr('colspan', 5);
        } else {
            $('.sep').attr('colspan', 2);
        }
    }
    // On load
    doSomething(mediaQuery);


    // map js
    $(".dl_map").each(function () {
        var d = $(this),
            lat = $(this).data('lat'),
            lon = $(this).data('lon'),
            zoom = $(this).data('zoom'),
            marker = $(this).data('marker'),
            markerLat = $(this).data('mlat'),
            info = $(this).data('info'),
            markerLon = $(this).data('mlon');
        var map = new GMaps({
            el: ".dl_map",
            lat: lat,
            lng: lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: zoom,
        });
        map.addMarker({
            lat: markerLat,
            lng: markerLon,
            icon: marker,
            infoWindow: {
                content: info
            }
        })
    });

    //swiper slider multi thumb slider
    const dlmultiSwiperSlides = function () {
        let sliderMain = document.querySelectorAll('.swiper-container.dl_thumb_slider_main')
        let sliderNav = document.querySelectorAll('.swiper-container.dl_thumb_slider_nav')
        let mainArray = [];
        let navArray = [];
        sliderMain.forEach(function (element, i) {
            var mself = sliderMain;
            var per = ($(mself[i]).attr("id"), $(mself[i]).data("perpage") || 1);
            var lop = $(mself[i]).data("loop");
            var spd = $(mself[i]).data("speed") || 3000;
            var sps = $(mself[i]).data("space") || 0;
            // var sl = $(mself[i]).data("mainslideloop") || 7;
            var afc = $(mself[i]).data("effect");
            var maincents = $(mself[i]).data("main_centere");
            var dir = $(mself[i]).data("direction") || "horizontal";
            mainArray.push(
                new Swiper(element, {
                    loop: lop,
                    loopedSlides: 5,
                    slidesPerView: per,
                    speed: spd,
                    effect: afc,
                    spaceBetween: sps,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: !1
                    },
                    centeredSlides: maincents,
                    direction: dir,
                })
            );
        });
        sliderNav.forEach(function (element, i) {
            var self = sliderNav;
            var navper = ($(self[i]).attr("id"), $(self[i]).data("nav_perpage") || 1);
            var navlop = $(self[i]).data("nav_loop");
            var navspd = $(self[i]).data("nav_speed") || 2000;
            var navsps = $(self[i]).data("nav_space") || 0;
            var navafc = $(self[i]).data("nav_effect");
            var navcents = $(self[i]).data("nav_centere");
            // var nsl = $(self[i]).data("navslideloop") || 7;
            var navdir = $(self[i]).data("nav_direction") || "horizontal";
            navArray.push(
                new Swiper(element, {
                    slidesPerView: navper,
                    loop: navlop,
                    loopedSlides: 5,
                    slideToClickedSlide: true,
                    spaceBetween: navsps,
                    centeredSlides: navcents,
                    direction: navdir,
                    speed: navspd,
                    effect: navafc,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: !1
                    },
                    navigation: {
                        nextEl: self[i].querySelector('.dl_swiper_button_next'),
                        prevEl: self[i].querySelector('.dl_swiper_button_prev')
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


    //swiper slider multi thumb slider
    // const dlmultiSwiperSlides = function () {
    //     let sliderMain = document.querySelectorAll('.swiper-container.dl_thumb_slider_main')
    //     let sliderNav = document.querySelectorAll('.swiper-container.dl_thumb_slider_nav')
    //     let mainArray = [];
    //     let navArray = [];
    //     sliderMain.forEach(function (element, i) {
    //         var per = $('.dl_thumb_slider_main').data("perpage");
    //         var lop = $('.dl_thumb_slider_main').data("loop");
    //         var spd = $('.dl_thumb_slider_main').data("speed") || 1000;
    //         var sps = $('.dl_thumb_slider_main').data("space") || 0;
    //         var afc = $('.dl_thumb_slider_main').data("effect");
    //         var cents = $('.dl_thumb_slider_main').data("centere");
    //         var dir = $('.dl_thumb_slider_main').data("direction") || "horizontal";
    //         mainArray.push(
    //             new Swiper(element, {
    //                 loop: lop,
    //                 loopedSlides: 4,
    //                 slidesPerView: per,
    //                 centeredSlides: cents,
    //                 speed: spd,
    //                 effect: afc,
    //                 spaceBetween: sps,
    //                 direction: dir,
    //             })
    //         );
    //     });

    //     sliderNav.forEach(function (element, i) {
    //         var self = sliderNav;
    //         var navper = $('.dl_thumb_slider_nav').data("nav_perpage");
    //         var navlop = $('.dl_thumb_slider_nav').data("nav_loop");
    //         var navspd = $('.dl_thumb_slider_nav').data("nav_speed") || 1000;
    //         var navsps = $('.dl_thumb_slider_nav').data("nav_space") || 0;
    //         var navafc = $('.dl_thumb_slider_nav').data("nav_effect");
    //         var navcents = $('.dl_thumb_slider_nav').data("nav_centere");
    //         var navdir = $('.dl_thumb_slider_nav').data("nav_direction") || "horizontal";
    //         navArray.push(
    //             new Swiper(element, {
    //                 slidesPerView: navper,
    //                 loop: navlop,
    //                 loopedSlides: 4,
    //                 slideToClickedSlide: true,
    //                 spaceBetween: navsps,
    //                 centeredSlides: navcents,
    //                 direction: navdir,
    //                 speed: navspd,
    //                 effect: navafc,
    //                 navigation: {
    //                     nextEl: self[i].querySelector('.swiper-button-next'),
    //                     prevEl: self[i].querySelector('.swiper-button-prev')
    //                 }
    //             })
    //         );
    //     });
    //     const checkOnPage = function () {
    //         if (sliderMain.length > 0 && sliderNav.length > 0) {
    //             let numberOfSlides = mainArray.length || navArray.length || 0;
    //             for (let i = 0; i < numberOfSlides; i++) {
    //                 mainArray[i].controller.control = navArray[i];
    //                 navArray[i].controller.control = mainArray[i];
    //             }
    //         }
    //     }
    //     checkOnPage();
    // }
    // dlmultiSwiperSlides();

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
    $(".swiper-container").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });



}(jQuery));