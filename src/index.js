import Header from "./js/header.js";
import Lines from "./js/lines.js";
import MoonMap from "./js/moonMap.js";

// const header = new Header();

const init = () => {
  new Header();
  new MoonMap();
  new Lines();
};

window.onLoad = init();
