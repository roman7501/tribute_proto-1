import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Header {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  }

  anim() {
    gsap.from(".title", { opacity: 0 });
    gsap.from("#info", { opacity: 0, duration: 1 });

    gsap.fromTo(
      ".info",
      { opacity: 0.7 },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".header",
          start: "top top-=200",
          end: "center top-=200",
          scrub: true,
        },
        opacity: 0,
      }
    );

    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".title",
      start: "top top+=50%",
      endTrigger: ".lines",
      end: "top bottom-=300",
      scrub: true,
      pin: true,
    });

    this.animDesc();
  }

  animDesc() {
    this.tl = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "top bottom-=300",
        toggleActions: "play pause reverse reverse",
      },
    });
    this.tl.fromTo(
      ".desc-shadow",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
      }
    );
    this.tl.to(
      "#desc-1",
      {
        opacity: 0.14,
        delay: 0.3,
        duration: 0.5,
      },
      "<"
    );
    this.tl.to(
      ".desc-shadow",
      {
        opacity: 0.2,
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
      },
      "<"
    );
  }
}
