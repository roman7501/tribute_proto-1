import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Header {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    this.tl = gsap.timeline();
    this.init();
  }

  init() {
    this.anim();
  }

  anim() {
    // // Rest of Header
    gsap.fromTo("#header-img", { opacity: 0 }, { opacity: 1, duration: 19, scale: 0.95, delay: 0.5 });
    gsap.from("#info", { opacity: 0, duration: 5, delay: 3.5 });
    0;
    gsap.to("#info", {
      scrollTrigger: {
        trigger: "#header-img",
        start: "center top",
      },
      opacity: 0,
      duration: 3,
    });

    gsap.to(".title, .desc", {
      scrollTrigger: {
        trigger: ".lines",
        start: "top bottom",
        end: "40px top",
        scrub: true,
      },
      y: -500,
      opacity: 0,
      ease: "Power2.in",
    });
  }
}
