import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default class Lines {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);

    this.tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#moon",
        start: "center center",
      },
    });

    this.init();
  }

  init() {
    this.anim();
  }

  anim() {
    gsap.from("#intro-1", { scrollTrigger: "#intro-1", opacity: 0, delay: 0.5, duration: 2 });
    gsap.from("#intro-2", { scrollTrigger: "#intro-2", opacity: 0, delay: 0.5, duration: 2 });

    gsap.from("#moon", { scrollTrigger: "#moon", delay: 1, opacity: 0, duration: 4 });

    gsap.from("#text-1", {
      scrollTrigger: { trigger: "#text-1" },
      opacity: 0,
      duration: 5,
    });

    gsap.from("#text-2", {
      scrollTrigger: { trigger: "#text-2" },
      opacity: 0,
      duration: 5,
    });
    gsap.from("#text-3", {
      scrollTrigger: { trigger: "#text-3" },
      opacity: 0,
      duration: 5,
    });
    gsap.from("#text-4", {
      scrollTrigger: { trigger: "#text-4" },
      opacity: 0,
      duration: 5,
    });
    gsap.from("#text-5", {
      scrollTrigger: { trigger: "#text-5" },
      opacity: 0,
      duration: 5,
    });

    gsap.to("#moon-2", {
      duration: 5,
      ease: "power2",
      scrollTrigger: {
        trigger: ".path__wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      motionPath: {
        path: "#path",
      },
    });

    // To make movingontainer", { scrollTrigger: "#text-5", y: "200vh", opacity: 1, duration: 15, ease: "Power3.out" });
  }
}
