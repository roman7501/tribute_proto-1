import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";

export default class Lines {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

    this.textEls = document.querySelectorAll(".lines .text-beau");
  }

  anim() {
    this.animPlay();
    this.animText();
    this.animMoon();
    this.animLines();
  }

  animPlay() {
    // Draw play path
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

    // Fade out text around play
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
        delay: 0.5,
        duration: 0.4,
      }
    );

    // Fade out play
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

    // Fade out play path
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
        opacity: 0.5,
        delay: 0.3,
        duration: 0.6,
      }
    );
  }

  animText() {
    this.textEls.forEach((text) => {
      let mySplitText = new SplitText(text, { type: "words,chars" });

      // gsap.from(mySplitText.chars, {
      //   scrollTrigger: {
      //     scroller: "[data-scroll-container]",
      //     trigger: text,
      //     start: "top bottom-=200",
      //   },
      //   opacity: 0,
      //   x: 10,
      //   rotate: 10,
      //   duration: 1,
      //   stagger: 0.05,
      // });

      gsap.from(text, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: text,
          start: "top bottom-=200",
        },
        scale: 0.9,
        opacity: 0,
        duration: 6,
      });
    });
  }

  animMoon() {
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
