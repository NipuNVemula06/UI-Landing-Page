// locomotive scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// gsap

gsap.from(".navlink", {
  stagger: 0.2,
  y: 10,
  opacity: 0,
  duration: 1,
  ease: Power2,
});

Shery.textAnimate(".hero-center-title .hero-center-text", {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from("#animateOne", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 1,
});

Shery.imageEffect(".hero-center-image", {
  style: 2, //Select Style
  debug: true,
  config: {
    /* Config made from debug panel */
  },
  // preset: "./presets/wigglewobble.json",
});
