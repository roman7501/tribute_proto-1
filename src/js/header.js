import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Header {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  }

  anim() {
    gsap.fromTo("#header-img", { opacity: 0 }, { opacity: 1, duration: 4, scale: 0.95, delay: 0.5 });
    gsap.from(".title", { opacity: 0 });

    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".title",
      start: "top top+=100",
      endTrigger: ".lines",
      end: "top bottom-=300",
      scrub: true,
      pin: true,
    });

    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".desc",
      start: "top top+=600",
      endTrigger: ".lines",
      end: "top bottom-=300",
      scrub: true,
      pin: true,
    });

    gsap.from("#info", { opacity: 0, duration: 2, delay: 1.5 });
  }
}
