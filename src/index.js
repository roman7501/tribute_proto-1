import getScrollWithAnims from "./js/utils/getScrollWithAnims.js";

const init = () => {
  new getScrollWithAnims();
};

window.onLoad = init();

// const title = document.querySelector(".title");

// console.log(title);

// title.addEventListener("mouseenter", () => {
//   console.log("test");
// });

// const moonMap = document.querySelector(".moon-map__container");
// console.log(moonMap);
// moonMap.addEventListener("mousedown", () => {
//   console.log("enter 4");
// });
