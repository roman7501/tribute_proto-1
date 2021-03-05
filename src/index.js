import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

import MoonMap from "./js/moonMap.js";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const moonMap = new MoonMap();

// Header timeline
const tl = gsap.timeline();

/**
 * Header
 */
// Title
gsap.from("#title", { opacity: 0, duration: 7 });
gsap.from("#TRIBUTE_TO_BEAU", { strokeDashoffset: 0, strokeDasharray: 20, duration: 5 });
gsap.to("#TRIBUTE_TO_BEAU", { fill: "#f0cf20", duration: 5, delay: 2 });

// // Rest of Header
tl.from("#header-img", { opacity: 0, duration: 7, scale: 0.9, delay: 0.5 });
tl.from("#desc", { opacity: 0, duration: 5 }, "-=3");
tl.from("#overlay", { opacity: 0, duration: 3 }, "-=4");
tl.from("#info", { opacity: 0, duration: 3 }, "-=2");
0;

/**
 * Lines
 */
gsap.from("#intro-1", { scrollTrigger: "#intro-1", opacity: 0, delay: 0.5, duration: 2 });
gsap.from("#intro-2", { scrollTrigger: "#intro-2", opacity: 0, delay: 0.5, duration: 2 });
gsap.from("#moon", { scrollTrigger: "#moon", opacity: 0, delay: 1, duration: 4 });

// draw lines
gsap.from("#line-1", { scrollTrigger: "#line-1", drawSVG: 0, duration: 5, delay: 4 });
gsap.from("#line-2", { scrollTrigger: "#line-2", drawSVG: 0, duration: 5, delay: 4.5 });
gsap.from("#line-3", { scrollTrigger: "#line-3", drawSVG: 0, duration: 5, delay: 4.5 });
gsap.from("#line-4", { scrollTrigger: "#line-4", drawSVG: 0, duration: 5, delay: 4.5 });
gsap.from("#line-4", { scrollTrigger: "#line-5", drawSVG: 0, duration: 5, delay: 4.5 });

// draw text
gsap.from("#text-1", { scrollTrigger: "#text-1", opacity: 0, duration: 5, delay: 2.5 });
gsap.from("#text-2", { scrollTrigger: "#text-2", opacity: 0, duration: 5, delay: 2.5 });
gsap.from("#text-3", { scrollTrigger: "#text-3", opacity: 0, duration: 5, delay: 2.5 });
gsap.from("#text-4", { scrollTrigger: "#text-4", opacity: 0, duration: 5, delay: 2.5 });
gsap.from("#text-5", { scrollTrigger: "#text-5", opacity: 0, duration: 5, delay: 2.5 });

// To make moving down the moon
// gsap.to("#moon-container", { scrollTrigger: "#text-5", y: "200vh", opacity: 1, duration: 15, ease: "Power3.out" });
