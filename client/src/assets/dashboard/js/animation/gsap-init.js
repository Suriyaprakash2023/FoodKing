(function(jQuery) {
  "use strict";
  if(typeof gsap !== typeof undefined) {
    if (typeof ScrollTrigger !== typeof undefined) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const gsapAnimate = {
      onStart : (elem) => {
        const option = {
          opacity: 0,
          scale: 1,
          position: {
            x: 0,
            y:0,
          },
          ease: "",
          duration: 1,
          delay: .4,
          rotate: 0
        }

        option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0)

        option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0)

        option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0)

        option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1)

        option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0)

        option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, .4)

        option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5)

        option.ease = gsapAnimate.validValue(elem.dataset.iqEase, '')

        const setOption = {opacity: option.opacity, scale: option.scale, x: option.position.x, y: option.position.y, ease: option.ease, rotate: option.rotate, duration: option.duration, delay: option.delay}

        if (typeof ScrollTrigger !== typeof undefined) {
          if (elem.dataset.iqTrigger == 'scroll') {
            const scrub = elem.dataset.iqScrollScrub === 'true' ? true : false

            setOption.scrollTrigger = {
              trigger: elem,
              start: () => "top 95%",
              // end: () => "bottom 10%",
              scrub: scrub,
              markers: false
            }
          }
        }

        gsap.from(elem, setOption)

      },
      validValue: (attr, defaultVal) => {
        if (attr !== undefined && attr !== null) {
          return attr
        }
        return defaultVal
      }
    }

    const gsapElem = document.querySelectorAll('[data-iq-gsap="onStart"]')

    Array.from(gsapElem, (elem) => {
      gsapAnimate.onStart(elem)
    })

    // Home Page 1 banner
    if($('#auth-login').length) {
      gsap.from('.first-img', {opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay:.4})
      gsap.from('.second-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:.6})
      gsap.from('.third-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:.8})
      gsap.from('.fourth-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.2})
      gsap.from('.fifth-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.4})
      gsap.from('.six-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.6})
      gsap.from('.seventh-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.6,})
      gsap.from('.eight-img', { opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1, delay:1.8,})
    }
  }
})(jQuery);
