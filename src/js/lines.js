import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Lines {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    this.tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#moon",
        start: "center center",
      },
    });

    this.init();
  }

  init() {
    // this.allSvgLoaded();

    this.anim();
  }

  allSvgLoaded() {
    const allSvg = document.querySelectorAll("svg");
    let index = 0;
    console.log(allSvg);

    allSvg.forEach((svg) => {
      svg.addEventListener("load", () => {
        index++;
        console.log("loading");
        if (index === allSvg.length) {
          this.anim();
          console.log("loaded !");
        }
      });
    });
  }

  anim() {
    gsap.from("#intro-1", { scrollTrigger: "#intro-1", opacity: 0, delay: 0.5, duration: 2 });
    gsap.from("#intro-2", { scrollTrigger: "#intro-2", opacity: 0, delay: 0.5, duration: 2 });

    // gsap.set("#line-1", { attr: { fill: "none", stroke: "red", "stroke-width": 1 } });
    this.tl1.from("#moon", { opacity: 0, delay: 1, duration: 4 });
    this.tl1.from("#line-1", { drawSVG: 0, duration: 5 }, "-=1");
    this.tl1.from("#text-1", { opacity: 0, duration: 5 }, "-=1");

    // // draw lines

    // setting

    gsap.from("#line-2", { scrollTrigger: "#line-2", drawSVG: 0, duration: 5, delay: 4.5 });
    gsap.from("#line-3", { scrollTrigger: "#line-3", drawSVG: 0, duration: 5, delay: 4.5 });
    gsap.from("#line-4", { scrollTrigger: "#line-4", drawSVG: 0, duration: 5, delay: 4.5 });
    gsap.from("#line-5", { scrollTrigger: "#line-5", drawSVG: 0, duration: 5, delay: 4.5 });

    // // draw text
    gsap.from("#text-2", { scrollTrigger: "#text-2", opacity: 0, duration: 5, delay: 2.5 });
    gsap.from("#text-3", { scrollTrigger: "#text-3", opacity: 0, duration: 5, delay: 2.5 });
    gsap.from("#text-4", { scrollTrigger: "#text-4", opacity: 0, duration: 5, delay: 2.5 });
    gsap.from("#text-5", { scrollTrigger: "#text-5", opacity: 0, duration: 5, delay: 2.5 });

    // To make moving down the moon
    // gsap.to("#moon-container", { scrollTrigger: "#text-5", y: "200vh", opacity: 1, duration: 15, ease: "Power3.out" });
  }
}
