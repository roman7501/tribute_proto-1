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
    // Title
    gsap.from("#title", { opacity: 0, duration: 7 });
    gsap.from("#TRIBUTE_TO_BEAU", { strokeDashoffset: 0, strokeDasharray: 20, duration: 5 });
    gsap.to("#TRIBUTE_TO_BEAU", { fill: "#f0cf20", duration: 5, delay: 2 });

    // // Rest of Header
    this.tl.from("#header-img", { opacity: 0, duration: 7, scale: 0.9, delay: 0.5 });
    this.tl.from("#desc", { opacity: 0, duration: 5 }, "-=3");
    this.tl.from("#overlay", { opacity: 0, duration: 3 }, "-=4");
    this.tl.from("#info", { opacity: 0, duration: 3 }, "-=2");
    0;
  }
}
