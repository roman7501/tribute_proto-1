import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class ProgressBar {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  animOnScroll(scrollPosition) {
    gsap.to(".progress-bar", {
      width: `${scrollPosition}%`,
    });
  }

  anim() {
    gsap.fromTo(
      ".progress-bar__wrapper",
      {
        scaleX: 0,
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "center center",
        },
        scaleX: 1,
        delay: 0.5,
        duration: 0.5,
      }
    );
  }
}
