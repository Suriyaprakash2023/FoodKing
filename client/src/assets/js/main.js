/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

         //>> Hero Slider Start <<//
         const sliderActive1 = ".hero-slider";
         const sliderInit1 = new Swiper(sliderActive1, {
             loop: true,
             slidesPerView: 1,
             effect: "fade",
             speed: 2000,
             autoplay: {
             delay: 5000,
             disableOnInteraction: false,
             },
             pagination: {
                el: ".dot",
                clickable: true,
            },
             
         });
         // content animation when active start here
         function animated_swiper(selector, init) {
             let animated = function animated() {
                 $(selector + " [data-animation]").each(function () {
                     let anim = $(this).data("animation");
                     let delay = $(this).data("delay");
                     let duration = $(this).data("duration");
                     $(this)
                         .removeClass("anim" + anim)
                         .addClass(anim + " animated")
                         .css({
                             webkitAnimationDelay: delay,
                             animationDelay: delay,
                             webkitAnimationDuration: duration,
                             animationDuration: duration,
                         })
                         .one("animationend", function () {
                             $(this).removeClass(anim + " animated");
                         });
                 });
             };
             animated();
             init.on("slideChange", function () {
                 $(sliderActive1 + " [data-animation]").removeClass("animated");
             });
             init.on("slideChange", animated);
         }
         animated_swiper(sliderActive1, sliderInit1);
         //>> Hero Slider End <<//

         //>> Hero Slider Start <<//
        const sliderActive2 = ".hero-slider-2";
        const sliderInit2 = new Swiper(sliderActive2, {
              loop: true,
              slidesPerView: 1,
              effect: "fade",
              speed: 2000,
              autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              },
              pagination: {
                el: ".pegi-number",
                type: "fraction",
            },

            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
              
         });
         // content animation when active start here
         function animated_swiper(selector, init) {
             let animated = function animated() {
                 $(selector + " [data-animation]").each(function () {
                     let anim = $(this).data("animation");
                     let delay = $(this).data("delay");
                     let duration = $(this).data("duration");
                     $(this)
                         .removeClass("anim" + anim)
                         .addClass(anim + " animated")
                         .css({
                             webkitAnimationDelay: delay,
                             animationDelay: delay,
                             webkitAnimationDuration: duration,
                             animationDuration: duration,
                         })
                         .one("animationend", function () {
                             $(this).removeClass(anim + " animated");
                         });
                 });
             };
             animated();
             init.on("slideChange", function () {
                 $(sliderActive1 + " [data-animation]").removeClass("animated");
             });
             init.on("slideChange", animated);
         }
         animated_swiper(sliderActive2, sliderInit2);
         //>> Hero Slider End <<//

         //>> Hero Slider 5 Start <<//
        const sliderActive3 = ".hero-slider-5";
        const sliderInit3 = new Swiper(sliderActive3, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive3 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive3, sliderInit3);

        //>> Scroll Js Start <<//
        const scrollPath = document.querySelector(".scroll-up path");
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        const updatescroll = function() {
            let scrolltotal = $(window).scrollTop();
            let height = $(document).height() - $(window).height();
            let scrolltotalheight = pathLength - (scrolltotal * pathLength) / height;
            scrollPath.style.strokeDashoffset = scrolltotalheight;
        };
        updatescroll();

        $(window).scroll(updatescroll);
        const offset = 50;
        const duration = 950;

        $(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".scroll-up").addClass("active-scroll");
            } else {
                jQuery(".scroll-up").removeClass("active-scroll");
            }
        });

        $(".scroll-up").on("click", function(event) {
            event.preventDefault();
            jQuery("html, body").animate({
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });

         //>> Search Popup Start <<//
         const $searchWrap = $(".search-wrap");
         const $navSearch = $(".nav-search");
         const $searchClose = $("#search-close");
 
         $(".search-trigger").on("click", function (e) {
             e.preventDefault();
             $searchWrap.animate({ opacity: "toggle" }, 500);
             $navSearch.add($searchClose).addClass("open");
         });
 
         $(".search-close").on("click", function (e) {
             e.preventDefault();
             $searchWrap.animate({ opacity: "toggle" }, 500);
             $navSearch.add($searchClose).removeClass("open");
         });
 
         function closeSearch() {
             $searchWrap.fadeOut(200);
             $navSearch.add($searchClose).removeClass("open");
         }
 
         $(document.body).on("click", function (e) {
             closeSearch();
         });
 
         $(".search-trigger, .main-search-input").on("click", function (e) {
             e.stopPropagation();
         });
  
        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

         //>> Active Js Start <<//
         $(".contact-info-items").hover(
            function() {
                $(".contact-info-items").removeClass("active");
                $(this).addClass("active");
            }
        );

        //>> Food Catagory Slider Start <<//
        const foodCatagorySlider = new Swiper(".food-catagory-slider", {
            spaceBetween: 30,
            speed: 800,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Food Catagory Slider Start <<//
         const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            speed: 1000,
            //centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                991: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 4,
                },
                500: {
                    slidesPerView: 3,
                },
                400: {
                    slidesPerView: 2,
                },
            },
        });


        const testimonialImageSlider = new Swiper(".testimonial-image-slider", {
            speed: 1000,
            loop: true,
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
            autoplay:true,
            grabCursor: true,
            centeredSlides: true,
        });

        const testimonialContentSlider = new Swiper(".testimonial-content-slider", {
            speed: 1000,
            loop: "true",
            autoplay:true,
            centeredSlides: true,
        });

        testimonialContentSlider.controller.control = testimonialImageSlider;
        testimonialImageSlider.controller.control = testimonialContentSlider;


        const testimonialContentSlider2 = new Swiper(".testimonial-content-slider-2", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 2000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
           
        });

        const testimonialContentSlider3 = new Swiper(".testimonial-content-slider-3", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 2000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
           
        });

        //>> Update Page 4 Start <<//
        const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
           
        });

        //>> Food Catagory Slider Start <<//
        const gallerySlider = new Swiper(".gallery-slider", {
            spaceBetween: 30,
            loop: "true",
            speed: 2000,
            //centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 3,
                },
                485: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Food Catagory Slider Start <<//
        const todayBestSaleImageSlider = new Swiper(".today-best-sale-image-slider", {
            loop: "true",
            speed: 3000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                991: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Food Catagory Slider Start <<//
        const instagramBannerSlider = new Swiper(".instagram-banner-slider", {
            spaceBetween: 0,
            loop: "true",
            speed: 2000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1299: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Food Catagory Slider Start <<//
        const foodSlider = new Swiper(".food-slider", {
            spaceBetween: 30,
            loop: "true",
            speed: 4000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
        });

        //>> Scroll Up Start <<//
        $("#scrollUp").on("click", function () {
            setTimeout(function () {
                $("html, body").animate({ scrollTop: "-=1000000px" }, "slow");
            }, 1000);
        });

        // range sliger
        function getVals() {
            let parent = this.parentNode;
            let slides = parent.getElementsByTagName("input");
            let slide1 = parseFloat(slides[0].value);
            let slide2 = parseFloat(slides[1].value);
            if (slide1 > slide2) {
                let tmp = slide2;
                slide2 = slide1;
                slide1 = tmp;
            }

            let displayElement = parent.getElementsByClassName("rangeValues")[0];
            displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
        }

        window.onload = function() {
            let sliderSections = document.getElementsByClassName("range-slider");
            for (let x = 0; x < sliderSections.length; x++) {
                let sliders = sliderSections[x].getElementsByTagName("input");
                for (let y = 0; y < sliders.length; y++) {
                    if (sliders[y].type === "range") {
                        sliders[y].oninput = getVals;
                        sliders[y].oninput();
                    }
                }
            }
        }

        progressBar: () => {
            const pline = document.querySelectorAll(".progressbar.line");
            const pcircle = document.querySelectorAll(".progressbar.semi-circle");
            pline.forEach(e => {
                const line = new ProgressBar.Line(e, {
                    strokeWidth: 6,
                    trailWidth: 6,
                    duration: 3000,
                    easing: 'easeInOut',
                    text: {
                        style: {
                            color: 'inherit',
                            position: 'absolute',
                            right: '0',
                            top: '-30px',
                            padding: 0,
                            margin: 0,
                            transform: null
                        },
                        autoStyleContainer: false
                    },
                    step: (state, line) => {
                        line.setText(Math.round(line.value() * 100) + ' %');
                    }
                });
                let value = e.getAttribute('data-value') / 100;
                new Waypoint({
                    element: e,
                    handler: function() {
                        line.animate(value);
                    },
                    offset: 'bottom-in-view',
                })
            });
            pcircle.forEach(e => {
                const circle = new ProgressBar.SemiCircle(e, {
                    strokeWidth: 6,
                    trailWidth: 6,
                    duration: 2000,
                    easing: 'easeInOut',
                    step: (state, circle) => {
                        circle.setText(Math.round(circle.value() * 100));
                    }
                });
                let value = e.getAttribute('data-value') / 100;
                new Waypoint({
                    element: e,
                    handler: function() {
                        circle.animate(value);
                    },
                    offset: 'bottom-in-view',
                })
            });
        }

        const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
        let priceGap = 1000;

        priceInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = parseInt(priceInput[0].value),
                    maxPrice = parseInt(priceInput[1].value);

                if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                    if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                    } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                    }
                }
            });
        });

        rangeInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if (maxVal - minVal < priceGap) {
                    if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    priceInput[0].value = minVal;
                    priceInput[1].value = maxVal;
                    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });

         //>> Quantity Js Start <<//
         $(".quantity").on("click", ".plus", function (e) {
            let $input = $(this).prev("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            $input.val(val + 1).change();
        });

        $(".quantity").on("click", ".minus", function (e) {
            let $input = $(this).next("input.qty");
            const val = parseInt($input.val(), 10); // Specify base 10
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });

        //>> Quantity Cart Js Start <<//
        let quantity = 0;
        let price = 0;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        $(".total-price, .product-pri").html(price.toFixed(2));
        $(".cart-increment, .cart-incre").on("click", function() {
            if (quantity <= 4) {
                quantity++;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-decrement, .cart-decre").on("click", function() {
            if (quantity >= 1) {
                quantity--;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-item-remove>a").on("click", function() {
            $(this).closest(".cart-item").hide(300);
        });

        //>> PaymentMethod Js Start <<//
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
        $(".checkout-radio-single").on("click", function() {
            let paymentMethod = $("input[name='pay-method']:checked").val();
            $(".payment").html(paymentMethod);
        });

        if($('.testimonial-section .fry-shape').length > 0) {
            const testimonialSection = gsap.timeline({
                scrollTrigger: {
                  trigger: ".testimonial-section",
                  scrub: 1,
                  start: 'top 70%',
                  end: 'top 10%',
                }
            });
            testimonialSection.to(".testimonial-section .fry-shape", {yPercent: 100, ease: "none"});
            testimonialSection.to(".testimonial-section .pizza-shape", {rotation: 360, duration: 3});
            testimonialSection.to(".testimonial-section .burger-shape", {rotation: 270, duration: 3});
        }

        if($('.food-category-section .burger-shape-2').length > 0) {
            const categoryFood = gsap.timeline({
                scrollTrigger: {
                  trigger: ".food-category-section",
                  scrub: 1,
                  start: 'top 50%',
                  end: 'top 10%',
                }
            });
            categoryFood.to(".food-category-section .tomato-shape", {yPercent: -40, ease: "none"});
            categoryFood.to(".food-category-section .burger-shape-2", {xPercent: 100, ease: "none"});
        }

        if($('.main-cta-banner').length > 0) {
            const bike = gsap.timeline({
                scrollTrigger: {
                  trigger: ".main-cta-banner",
                  scrub: 1,
                  end: "+=1000",
                }
            });
            bike.to(".delivery-man", {xPercent: -20, ease: "none",});
        }

        if($('.main-cta-banner-2').length > 0) {
            const bike2 = gsap.timeline({
                scrollTrigger: {
                  trigger: ".main-cta-banner-2",
                  scrub: 1,
                  end: "+=1000",
                }
            });
            bike2.to(".delivery-man", {xPercent: -20, ease: "none",});
        }

        if($('.news-section .burger-shape').length > 0) {
            const newsShape = gsap.timeline({
                scrollTrigger: {
                  trigger: ".news-section",
                  scrub: 1,
                  end: "+=1000",
                }
            });
            newsShape.to(".news-section .burger-shape", {yPercent: 130, ease: "none",})
            newsShape.to(".news-section .fry-shape", {rotation: 350, ease: "none",});
        }

        if($('.footer-section .burger-shape').length > 0) {
            const footerShape = gsap.timeline({
                scrollTrigger: {
                  trigger: ".footer-section",
                  scrub: 1,
                  end: "+=1000",
                }
            });
    
            footerShape.to(".burger-shape", {yPercent: -200, ease: "none",})
            footerShape.to(".fry-shape", {xPercent: 350, ease: "none",});
        }

        if($('.footer-section .footer-shape').length > 0) {
            const footerShape = gsap.timeline({
                scrollTrigger: {
                  trigger: ".footer-section",
                  scrub: 1,
                  end: "+=1000",
                }
            });
    
            footerShape.to(".footer-shape", {yPercent: -100, ease: "none",})
            footerShape.to(".footer-shape-2", {rotation: 360, ease: "none",});
        }


        //Update Page Shop Sigle-2


        //Quantity 
        var inputs = document.querySelectorAll('#qty, #qty2, #qty3');
        var btnminus = document.querySelectorAll('.qtyminus');
        var btnplus = document.querySelectorAll('.qtyplus');

        if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

            inputs.forEach(function(input, index) {
                var min = Number(input.getAttribute('min'));
                var max = Number(input.getAttribute('max'));
                var step = Number(input.getAttribute('step'));

                function qtyminus(e) {
                    var current = Number(input.value);
                    var newval = (current - step);
                    if (newval < min) {
                        newval = min;
                    } else if (newval > max) {
                        newval = max;
                    }
                    input.value = Number(newval);
                    e.preventDefault();
                }

                function qtyplus(e) {
                    var current = Number(input.value);
                    var newval = (current + step);
                    if (newval > max) newval = max;
                    input.value = Number(newval);
                    e.preventDefault();
                }

                btnminus[index].addEventListener('click', qtyminus);
                btnplus[index].addEventListener('click', qtyplus);
            });
        }

        //Quantity 

        //>> Update Page 06 Start <<//

        //>> Popular Dishes Slider Start <<//
        const popularDishesSlider = new Swiper(".popular-dishes-slider", {
            spaceBetween: 30,
            loop: "true",
            speed: 2000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        const popularDishesSlider2 = new Swiper(".popular-dishes-slider-2", {
            spaceBetween: 30,
            loop: "true",
            speed: 2000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
                reverseDirection: true,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });


        $(function() {
            // Get the form.
            const form = $("#contact-form");
            // Get the messages div.
            const formMessages = $(".form-message");
            // Set up an event listener for the contact form.
            $(form).submit(function(e) {
                // Stop the browser from submitting the form.
                e.preventDefault();
                // Serialize the form data.
                const formData = $(form).serialize();
                // Submit the form using AJAX.
                $.ajax({
                        type: "POST",
                        url: $(form).attr("action"),
                        data: formData,
                    })
                    .done(function(response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass("error");
                        $(formMessages).addClass("success");
                        // Set the message text.
                        $(formMessages).text(response);
                        // Clear the form.
                        $("#form input, #form textarea").val("");
                    })
                    .fail(function(data) {
                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass("success");
                        $(formMessages).addClass("error");
                        // Set the message text.
                        if (data.responseText !== "") {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text(
                                "Oops! An error occured and your message could not be sent."
                            );
                        }
                    });
            });
        });


    }); // End Document Ready Function

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();
   

})(jQuery); // End jQuery

