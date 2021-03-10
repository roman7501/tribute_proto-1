import Scrollbar from "smooth-scrollbar";
import LocomotiveScroll from "locomotive-scroll";

import Header from "./js/header.js";
import Lines from "./js/lines.js";
import MoonMap from "./js/moonMap.js";

// const header = new Header();

const init = () => {
  new Header();
  new MoonMap();
  new Lines();
};

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

window.onLoad = init();
