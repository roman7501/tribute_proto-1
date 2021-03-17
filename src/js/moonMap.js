import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class MoonMap {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  anim() {
    gsap.from("line", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-1",
      },
      drawSVG: 0,
      duration: 2,
      stagger: 0.5,
    });
    gsap.from("#big-circle", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "top top",
        endTrigger: ".lines",
        end: "bottom bottom",
      },
      drawSVG: 0,
      opacity: 0.4,
      duration: 4,
    });
    gsap.from("#moon-1,#moon-2,#moon-6", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-2",
      },
      opacity: 0,
      duration: 6,
      stagger: 0,
    });
    gsap.from("#moon-8,#moon-4,#moon-5, #moon-3, #moon-7", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-4",
      },
      opacity: 0,
      duration: 4,
      stagger: 0.1,
    });
  }
}
