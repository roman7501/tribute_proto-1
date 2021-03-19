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

  animPlay() {
    gsap.fromTo(
      "#intro-1",
      {
        color: "rgba(255, 255, 255, 1)",
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "center center",
        },
        color: "rgba(255, 255, 255, 0)",
        duration: 0.4,
      }
    );
    gsap.fromTo(
      "#play-path",
      {
        opacity: 0,
        drawSVG: 0,
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "bottom bottom",
        },
        drawSVG: "100%",
        opacity: 1,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      "#play",
      {
        color: "rgba(255, 255, 255, 1)",
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "center center",
        },
        color: "rgba(255, 255, 255, 0.3)",
        delay: 0.3,
        scale: 0.9,
        duration: 0.6,
      }
    );
    gsap.fromTo(
      "#play-path",
      {
        opacity: 1,
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "center center",
        },
        opacity: 0.7,
        delay: 0.3,
        duration: 0.6,
      }
    );
  }

  animText() {
    this.animPlay();

    gsap.from("#moon-container", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-2",
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
      },

      opacity: 0,
      duration: 1.5,
    });
    gsap.from("#text-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-2",
        start: "center bottom",
      },

      opacity: 0,
      duration: 1.5,
    });
    gsap.from("#text-3", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-3",
        start: "center bottom",
      },

      opacity: 0,
      duration: 2,
    });
    gsap.from("#text-4", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-4",
        start: "center bottom",
      },

      opacity: 0,
      duration: 4,
    });
    gsap.from("#text-5", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "center bottom",
      },

      opacity: 0,
      duration: 1,
    });

    // ScrollTrigger.create({
    //   scroller: "[data-scroll-container]",
    //   trigger: "#text-5",
    //   start: "top top+=50",
    //   endTrigger: "html",
    //   end: "bottom bottom",
    //   scrub: true,
    //   pin: true,
    // });
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
