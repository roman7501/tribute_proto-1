import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class Reverse {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  anim() {
    gsap.to(".god", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".god",
        start: "center center",
        endTrigger: ".catch",
        end: "top bottom",
        pin: true,
        scrub: true,
      },
      x: "10vw",
    });
  }
}
