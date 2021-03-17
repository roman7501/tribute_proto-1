import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default class Lines {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);
  }

  anim() {
    const durationFadeIn = 3;

    gsap.from("#intro-1", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-1",
        start: "top bottom-=50",
      },
      opacity: 0,
      duration: durationFadeIn,
    });

    gsap.from("#intro-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-2",
        start: "top bottom-=50",
      },
      opacity: 0,
      duration: durationFadeIn,
    });

    gsap.from("#moon-container", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-2",
        start: "top bottom-=50",
      },
      opacity: 0,
      y: 500,
      duration: 10,
    });
  }
}
