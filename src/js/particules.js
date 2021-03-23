import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import lottie from "lottie-web";
import data from "./animations/data.json";

export default class Particules {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);

    this.sunMapContainer = document.querySelector(".sun-map__container");

    lottie.loadAnimation({
      container: this.sunMapContainer, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: data,
    });
  }

  anim() {
    gsap.to("#kiss-1", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".particules",
        start: "top top",
      },
      x: "-50%",
      yoyo: true,
      repeat: -1,
      duration: 25,
      ease: "linear",
    });
    gsap.to("#kiss-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".particules",
        start: "top top",
      },
      x: "50%",
      yoyo: true,
      repeat: -1,
      duration: 45,
      ease: "linear",
    });

    // Anim waves
    gsap.to(".kill-wrapper", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".particules",
        start: "top top",
      },
      backgroundPosition: "-2247px -80px",
      yoyo: true,
      repeat: -1,
      duration: 25,
      ease: "linear",
    });
  }
}
