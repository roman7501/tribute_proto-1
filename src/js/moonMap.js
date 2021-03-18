import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class MoonMap {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
    this.mouse = { x: 0, y: 0 };
    this.mouseEased = { x: { value: 0 }, y: { value: 0 } };
  }

  anim() {
    this.animLines();
    this.animMoons();
    this.getMousePosition();
    this.hoverMoons();
  }

  getMousePosition() {
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX / window.innerWidth;
      this.mouse.y = e.clientY / window.innerHeight;

      gsap.to(this.mouseEased.x, { value: this.mouse.x, ease: "power2.inOut", duration: 1 });

      //  TM.to(this.loadedEased, 4.7, {
      //    value: this.indexLoaded,
      //    ease: Power3,
      //  });

      console.log(this.mouseEased.x);
    });
  }

  hoverMoons() {
    this.moonMap = document.querySelector(".moon-map__container");

    const moonsPath = document.querySelectorAll(".moon-path");

    window.addEventListener("mousemove", () => {
      moonsPath.forEach((moonEl) => {
        moonEl.style.transform = `translate3d(${-15 * this.mouse.x}px, ${-5 * this.mouse.y}px, 0)`;
      });
    });
  }

  animLines() {
    gsap.fromTo(
      "#small-circle, #small-line-1, #small-line-2",
      { opacity: 0 },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#intro-1",
          start: "center center",
        },
        opacity: 1,
        duration: 1.5,
      }
    );
    gsap.from("#big-line-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "top top-=200",
        end: "bottom bottom",
        scrub: true,
      },
      transformOrigin: "center center",
      drawSVG: 0,
      scale: 5,
      opacity: 0.2,
      ease: "power2.inOut",
    });

    gsap.from("#big-line-3,#big-line-1", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "center top-=200",
        end: "bottom bottom",
        scrub: true,
      },
      transformOrigin: "center center",
      // drawSVG: 0,
      // scale: 10,
      opacity: 0,
    });
    gsap.from(".middle-line, #triangle-down, #triangle-up, #small-polygon, #big-polygon", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-2",
        start: "top top",
        endTrigger: ".lines",
        end: "bottom bottom",
        scrub: true,
      },
      drawSVG: 0,
      transformOrigin: "center center",
      // scale: 0.8,
      // opacity: 0,
    });
    gsap.from("#big-circle", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-2",
        start: "top top",
        endTrigger: ".lines",
        end: "bottom bottom",
        scrub: true,
      },
      drawSVG: 0,
      scale: 6,
      opacity: 0.4,
      // duration: 4,
    });
  }

  animMoons() {
    gsap.from("#moon-1,#moon-2,#moon-6", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "top top",
      },
      opacity: 0,
      y: 10,
      x: 8,
      duration: 6,
      stagger: 0,
    });
    gsap.from("#moon-8,#moon-4,#moon-5, #moon-3, #moon-7", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "top top",
      },
      opacity: 0,
      y: 4,
      x: -14,
      duration: 4,
      stagger: 0.1,
    });
  }
}
