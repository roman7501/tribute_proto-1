import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class MoonMap {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);

    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".moon-map__container",
        start: "center bottom",
      },
    });

    this.init();
  }

  init() {
    this.anim();
  }

  anim() {
    // circle
    this.tl.from(".cls-1", { scale: 0.85, opacity: 0, duration: 8 }, "<");
    // polygon
    this.tl.from(".cls-11", { scale: 1.3, opacity: 0, duration: 8 }, "<");
    // triangle
    this.tl.from(".cls-12", { scale: 0.85, opacity: 0, duration: 8 }, "<");

    // lines
    this.tl.from(".cls-8", { drawSVG: 0, duration: 2 }, "<");
    this.tl.from(".cls-9", { drawSVG: 0, duration: 2 }, "<");
    this.tl.from(".cls-10", { drawSVG: 0, duration: 2 }, "<");
    this.tl.from(".cls-13", { drawSVG: 0, duration: 2 }, "<");

    this.tl.from(
      ".cls-2, .cls-4,  .cls-6, .cls-8,  .cls-10",
      {
        opacity: 0,
        scale: 0.9,
        x: -30,
        duration: 8,
        stagger: 0.2,
      },
      "<"
    );
    this.tl.from(
      ".cls-9, .cls-5",
      {
        opacity: 0,
        scale: 0.9,
        y: 100,
        duration: 8,
        stagger: 0.2,
      },
      "<"
    );
    this.tl.from(
      ".cls-7",
      {
        opacity: 0,
        scale: 0.9,
        y: -100,
        duration: 8,
        stagger: 0.2,
      },
      "<"
    );

    // MorphSVGPlugin.convertToPath("#moon-start");
    // gsap.to("#moon-start", { morphSVG: "#moon-end", fill: "#886e3c", duration: 2, delay: 1 });
  }
}
