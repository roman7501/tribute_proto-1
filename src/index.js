import Scrollbar from "smooth-scrollbar";

import Header from "./js/header.js";
import Lines from "./js/lines.js";
import MoonMap from "./js/moonMap.js";
import LocomotiveScroll from "locomotive-scroll";

const init = () => {
  // new Header();
  // new Lines();
  // new MoonMap();
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
};

window.onLoad = init();
