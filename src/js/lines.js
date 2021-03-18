import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default class Lines {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);
  }

  anim() {
    this.animText();
    this.animLines();
  }

  animText() {
    gsap.fromTo(
      "#intro-1",
      {
        opacity: 0.5,
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "center center",
        },
        textFillColor: "#f0cf20",
        opacity: 1,
        delay: 0.4,
        duration: 0.4,
      }
    );

    gsap.from("#moon-container", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-1",
        start: "top bottom-=50",
      },
      opacity: 0,
      y: 700,
      duration: 6,
    });

    gsap.from("#text-1", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-1",
        start: "center bottom",
        toggleActions: "play pause reverse reverse",
      },

      opacity: 0,
      duration: 2,
    });
    gsap.from("#text-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-2",
        start: "center bottom",
        toggleActions: "play pause reverse reverse",
      },

      opacity: 0,
      duration: 2,
    });

    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: "#text-5",
      start: "top top+=50",
      endTrigger: "html",
      end: "bottom bottom",
      scrub: true,
      pin: true,
    });
  }

  animLines() {
    gsap.from("#rain-1", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-1",
        start: "top top",
        endTrigger: "#text-3",
        end: "top top",
        scrub: true,
      },
      drawSVG: 0,
      opacity: 0,
    });
    gsap.from("#rain-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-1",
        start: "top top",
        endTrigger: "#text-4",
        end: "top top",
        scrub: true,
      },
      drawSVG: 0,
      opacity: 0,
    });
    gsap.from("#rain-3", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-3",
        start: "top top",
        endTrigger: "#text-5",
        end: "top top",
        scrub: true,
      },
      drawSVG: 0,
      transformOrigin: "center center",
    });
  }
}
