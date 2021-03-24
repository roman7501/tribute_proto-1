import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class Reverse {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  anim() {
    this.animGod();
    this.animCatch();
    this.animGodReversed();
    this.animTransition();
  }

  animGod() {
    this.tlGod = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".god",
        start: "center center",
        endTrigger: ".reverse",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    this.tlMoon = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".god",
        start: "center center",
        endTrigger: ".reverse",
        end: "bottom top",
        scrub: true,
      },
    });

    // God appears from right
    this.tlGod.to(".god", {
      x: 50,
    });

    // ... and blue point shifts on right
    this.tlMoon.to("#moon-map__container", {
      x: -300,
    });

    this.tlMoon.to(
      "#middle-line-4",
      {
        opacity: 0.4,
        x: "100vw",
      },
      "<"
    );
    this.tlMoon.to(
      "#small-circle",
      {
        y: -100,
      },
      "<"
    );
  }

  animCatch() {
    this.lines1 = "#middle-line-1, #middle-line-3, #middle-line-5, #middle-line-7, #middle-line-9, #middle-line-11";
    this.lines2 = "#middle-line-2, #middle-line-4, #middle-line-6, #middle-line-8, #middle-line-10, #middle-line-12";
    this.lines3 = "#big-line-1";
    this.lines4 = "#big-line-2";
    this.lines5 = "#big-line-3";

    this.tlCatch = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".catch",
        start: "center bottom",
        endTrigger: ".reverse",
        end: "bottom bottom",
        scrub: true,
      },
    });

    this.tlCatch.to(".catch", {
      rotate: 180,
    });

    this.tlCatch.to(
      "#triangle-down, #triangle-up",
      {
        rotate: 180,
      },
      "<"
    );

    this.tlCatch.to(
      this.lines1,
      {
        // transformOrigin: "left",
        scale: 0.5,
        rotate: -180,
      },
      "<"
    );
    this.tlCatch.to(
      this.lines2,
      {
        // transformOrigin: "left",
        scale: 0.5,
        rotate: 180,
      },
      "<"
    );

    this.tlCatch.to(
      this.lines3,
      {
        // transformOrigin: "left",
        stroke: "#1655BA",
        scale: 6,
        rotate: 250,
        opacity: 0.4,
      },
      "<"
    );

    this.tlCatch.to(
      this.lines4,
      {
        // transformOrigin: "left",
        stroke: "#1655BA",
        scale: 6,
        rotate: 130,
        opacity: 0.4,
      },
      "<"
    );
    this.tlCatch.to(
      this.lines5,
      {
        // transformOrigin: "left",
        stroke: "#1655BA",
        x: 50,
        scale: 2,
        rotate: 190,
        opacity: 0.4,
      },
      "<"
    );

    this.tlCatch.to(
      "#small-circle",
      {
        y: 200,
        scale: 0.1,
      },
      "<"
    );
  }

  animGodReversed() {
    this.tlGodReversed = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".god-reversed",
        start: "top bottom",
        endTrigger: ".reverse",
        end: "bottom bottom",
        scrub: true,
      },
    });

    this.tlGodReversed.to(".god-reversed", {
      rotate: 180,
    });

    this.tlGodReversed.to(
      "#small-circle",
      {
        scale: 0,
      },
      "<"
    );
  }

  animTransition() {
    gsap.to(".moon-map__container", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".particules",
        start: "top bottom",
        end: "top top-=3000",
        scrub: true,
      },
      y: "-180vh",
    });
  }
}
