import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class Particules {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  anim() {
    console.log("anim particules");
  }
}
